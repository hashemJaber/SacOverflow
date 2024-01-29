'use client';
import { getCookie } from '@/lib/actions/client';

import './MemberSearch.css';
import { createSupbaseClient } from '@/lib/supabase/client';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function FormInput() {
	const [email, setEmail] = useState('');
	const [display, setDisplay] = useState(false);
	const [displayedUsers, setDisplayedUsers] = useState([]);
	// Ref for assuring not clicking item inside container content
	const containerRef = useRef<any>(null);

	/**
	 * Function to update the results of the current query user is searching for.
	 * Current implemenentation only allows for searching by email. Username TBD.
	 *
	 * @param e Form event
	 */
	const updateSearch = async (e: any) => {
		e.preventDefault();

		// update the email
		setEmail(e.target.value);

		searchMembers();
	};

	/**
	 * Function to check if the user is already a member of the organization.
	 * @param userId the id of the user to check
	 * @param org the id of the organization to check (from cookie)
	 * @returns boolean indicating if the user is a member of the organization
	 */
	const isOrgMember = async ({
		userId,
		org,
	}: {
		userId: string;
		org: string;
	}) => {
		const supabase = await createSupbaseClient();

		// check if the user is already a member of the organization
		const { data: orgMembers, error: orgMembersError } = await supabase
			.from('organization_member')
			.select('*')
			.eq('org_id', org)
			.eq('member_id', userId);

		// if the user is already a member, do not send invite
		if (orgMembers && orgMembers.length > 0) {
			return true;
		}
		return false;
	};

	/**
	 * Event handler for when the user clicks outside the search bar container.
	 * @param e Event
	 */
	const handleBlur = (e: any) => {
		// Delay the execution to allow time for the click event to fire
		setTimeout(() => {
			// Check if the current active element is outside the container
			if (
				containerRef.current &&
				!containerRef.current.contains(document.activeElement)
			) {
				setDisplay(false);
			}
		}, 10);
	};
	/**
	 * Function to search for members in the organization.
	 * @returns Array of users that match the search query
	 */
	const searchMembers = async () => {
		// e.preventDefault();

		if (!email || email.length < 3) {
			setDisplay(false);
			setDisplayedUsers([]);
			return;
		}

		const supabase = await createSupbaseClient();

		// retrieve the input field; being with name or email
		const { data: userProfiles, error } = await supabase
			.from('user')
			.select('*')
			.ilike('email', `%${email}%`)
			.limit(3);

		if (error) {
			console.error('err: ', error);
			if (
				error.details === 'The result contains zero rows' ||
				error.code === 'PGRST116'
			) {
				console.log('user does not exist');
			}
			setDisplayedUsers([]);
		}

		// if some users are found, display them in a list
		if (userProfiles) {
			setDisplay(true);

			// // add new field checking if the user is already a member of the organization
			const org = getCookie('org');
			// Return a new object with the isMember property
			const memberChecks = userProfiles.map(user =>
				isOrgMember({
					userId: user.id,
					org,
				}).then(isMember => {
					return { ...user, isMember };
				}),
			);
			// Wait for all promises to resolve
			const memberChecksResolved: any = await Promise.all(memberChecks);
			// Set the displayed users
			setDisplayedUsers(memberChecksResolved);
		}
	};

	return (
		<form
			className="search-bar"
			onSubmit={searchMembers}
			ref={containerRef}
		>
			<input
				type="text"
				name="search"
				id="search"
				autoComplete="off"
				placeholder="Search"
				className="search-input"
				onChange={updateSearch}
				onBlur={handleBlur}
			/>

			{display && (
				<div className="search-container">
					<div className="members-container">
						{displayedUsers.length > 0 ? (
							displayedUsers.map((user: any) => (
								<SearchMemberCard
									key={user.id}
									name={user.name}
									email={user.email}
									userId={user.id}
									imgSrc={user.image}
									isMember={user.isMember}
								/>
							))
						) : (
							<div className="member-info">
								<div className="member-details">
									<div className="member-name">
										No users found
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</form>
	);
}

/**
 * Function to render member info when user is searching.
 * @returns JSX.Element Component for member indicating if they member of org.
 */
export const SearchMemberCard = ({
	name,
	email,
	userId,
	imgSrc,
	isMember,
}: {
	name: string;
	email: string;
	userId?: string;
	imgSrc?: string;
	isMember?: boolean;
}) => {
	'use client';

	const [membershipText, setMembershipText] = useState('Invite');
	const org = getCookie('org');

	/**
	 * Function to invite a user to the organization if they aren't already a member
	 * @param e Event
	 */
	const inviteMember = async (e: any) => {
		e.preventDefault();

		// Search withs upabase if user exists
		const supabase = await createSupbaseClient();

		// insert the new user into the organization_member table
		const { data: newOrgMember, error: newOrgMemberError } = await supabase
			.from('organization_member')
			.insert([
				{
					member_id: userId,
					org_id: org,
					role: 'member',
				},
			])
			.select('*');

		// if the user wasnt a member before, change text
		setMembershipText('Member');
	};
	return (
		<button
			className={`member-info ${
				isMember || membershipText === 'Member'
					? 'cursor-default'
					: 'cursor-pointer'
			}`}
			onClick={e => {
				e.preventDefault();
				return;
			}}
		>
			<div className="member-details">
				<div className="member-name">{name}</div>
				<div className="member-email font-semibold text-black">
					{email}
				</div>
			</div>

			{imgSrc && (
				<div className="member-photo flex flex-col items-center gap-2">
					<Image
						src={imgSrc || '/images/hashemtmp.jpeg'}
						alt="member"
						height={25}
						width={25}
						className="rounded-full h-10 w-10"
					/>

					{isMember ? (
						// 	Organization Member
						<span className="org-member-info-card member">
							Member
						</span>
					) : (
						// 	NON Organization Member
						<button
							className={`${
								membershipText !== 'Member' ? '' : 'member'
							} org-member-info-card`}
							onClick={isMember ? () => {} : inviteMember}
						>
							{membershipText}
						</button>
					)}
				</div>
			)}
		</button>
	);
};
