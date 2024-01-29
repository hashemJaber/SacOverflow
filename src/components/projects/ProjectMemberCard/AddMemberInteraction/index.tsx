'use client';

import { useEffect, useState } from 'react';
// CSS import
import './AddMemberInteraction.css';
import {
	getCookie,
	getOrganizationMembers,
	getProjectMembers,
	inviteProjectMember,
} from '@/lib/actions/client';
import { IUsers } from '@/types/database.interface';
import Image from 'next/image';

export function SearchBar() {
	const [isActive, setIsActive] = useState(false);
	const [value, setValue] = useState('');

	const [orgMembers, setOrgMembers] = useState<IUsers[]>([]);
	const [projectMembers, setProjectMembers] = useState<IUsers[]>([]);
	const [filteredMembers, setFilteredMembers] = useState<IUsers[]>([]);

	useEffect(() => {
		const org = getCookie('org');
		async function fetchOrgMembers() {
			const members = await getOrganizationMembers(org);
			setOrgMembers(members);
		}

		async function fetchProjectMembers() {
			// retrieve the slug using window
			const slug = window.location.pathname.split('/').slice(-1)[0];

			// fetch project members
			const members = await getProjectMembers(org, slug);
			setProjectMembers(members);
		}

		fetchOrgMembers();
		fetchProjectMembers();
	}, []);

	const searchMember = async (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setValue(e.target.value);

		// assure value len is > 3
		if (value.length < 3) {
			return;
		}

		// filter by name or email using %like% operator
		const filtered = orgMembers.filter(member => {
			const val = value.toLowerCase();
			return (
				member.name.toLowerCase().includes(val) ||
				member.email.toLowerCase().includes(val)
				// member.username.toLowerCase().includes(val)
			);
		});

		setFilteredMembers(filtered);
	};
	const handleToggle = async (e: React.MouseEvent<SVGElement>) => {
		setIsActive(!isActive);
	};

	return (
		<div className={`search-member-bar ${isActive ? 'active' : ''}`}>
			{isActive ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					className="magnifier"
					onClick={handleToggle}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					className="add-icon"
					onClick={handleToggle}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 4.5v15m7.5-7.5h-15"
					/>
				</svg>
			)}

			<input
				type="text"
				className="input"
				placeholder="Search ..."
				value={value}
				onChange={searchMember}
				onBlur={() => setIsActive(false)}
			/>

			{isActive && filteredMembers.length > 0 && value.length > 2 ? (
				<div className="members-container">
					{filteredMembers.map((member, idx) => {
						let membership = false;

						// check if member is already a member of the project
						projectMembers.forEach(projectMember => {
							if (projectMember.id === member.id) {
								membership = true;
							}
						});

						return (
							<InviteProjectMemberComp
								key={idx}
								user={member}
								project_id={
									window.location.pathname
										.split('/')
										.slice(-1)[0]
								}
								org_id={getCookie('org')}
								isProjectMember={membership}
							/>
						);
					})}
				</div>
			) : null}
		</div>
	);
}

export const InviteProjectMemberComp = ({
	user,
	project_id,
	org_id,
	isProjectMember,
}: {
	user: IUsers;
	project_id: string;
	org_id: string;
	isProjectMember: boolean;
}) => {
	const [membershipText, setMembershipText] = useState('Invite');

	const inviteNewProjectMember = async (
		e: React.MouseEvent<HTMLButtonElement>,
	) => {
		e.preventDefault();

		const resp = await inviteProjectMember(org_id, project_id, user.id);

		// if the user wasnt a member before, change text
		if (resp) {
			setMembershipText('Member');
			window.location.reload();
		}
	};

	return (
		<div
			className={`member-info ${
				isProjectMember || membershipText === 'Member'
					? 'cursor-default'
					: 'cursor-pointer'
			}`}
		>
			<div className="member-details">
				<div className="member-name">{user.name}</div>
				<div className="member-email font-semibold text-black">
					{user.email}
				</div>
			</div>

			{user.image && (
				<div className="member-photo flex flex-col items-center gap-2">
					<Image
						src={user.image || '/images/hashemtmp.jpeg'}
						alt="member"
						height={25}
						width={25}
						className="rounded-full h-10 w-10"
					/>

					{isProjectMember ? (
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
							onClick={
								isProjectMember
									? () => {}
									: inviteNewProjectMember
							}
						>
							{membershipText}
						</button>
					)}
				</div>
			)}
		</div>
	);
};
