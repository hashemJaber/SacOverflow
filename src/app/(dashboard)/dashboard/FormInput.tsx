'use client';
import Buttons from '@/components/SharedComponents/Buttons';
import { createSupbaseClient } from '@/lib/supabase/client';
import { cookies } from 'next/headers';
import { useState } from 'react';

export default function FormInput() {
	const [email, setEmail] = useState('');
	const inviteMember = async e => {
		e.preventDefault();
		console.log('curr email: ', email);

		// retrieve the inptu field
		// Search withs upabase if user exists
		const supabase = await createSupbaseClient();
		const { data: userInfo, error } = await supabase
			.from('user')
			.select('*')
			.eq('email', email)
			.single();

		if (error) {
			console.error('err: ', error);
			if (
				error.details === 'The result contains zero rows' ||
				error.code === 'PGRST116'
			) {
				// TODO: add a toast or soemthing
				console.log('user does not exist');
			}
		}

		// const userData = user
		// retrieve cookies
		const cookies = window.document.cookie;
		console.log(cookies);

		function getCookie(name): string {
			const value = `; ${window.document.cookie}`;
			const parts = value.split(`; ${name}=`);
			if (parts.length === 2) {
				return parts.pop().split(';').shift();
			}
			return '';
		}
		const org = getCookie('org');
		console.log('org : ', org);
		// const org = cookies.get('org')?.value as string;

		// If user exists, send invite
		console.log(userInfo);
		if (userInfo) {
			// supabase.
			console.log('user exists');
		}
		// insert user into organization_member table
		const { data: orgMemberInfo, error: err1 } = await supabase
			.from('organization_member')
			.insert([{ member_id: userInfo?.id, org_id: org, role: 'member' }])
			.select();

		console.log('oegMemberInfo: ', orgMemberInfo);

		// If user does not exist, create user and send invite

		console.log('invited member');
	};
	return (
		<form
			className="search-bar"
			onSubmit={inviteMember}
		>
			<input
				type="text"
				name="search"
				id="search"
				placeholder="Search"
				onChange={e => setEmail(e.target.value)}
			/>
			<button type="submit">Invite Member</button>
			{/* <Buttons
				variant="primary"
				content="Invite Member"
				size="medium"
				// href="/api/invite"
			/> */}
		</form>
	);
}
