'use client';
import { createBrowserClient } from '@supabase/ssr';
import { useState, useEffect } from 'react';
import InputComponent from '@/components/SharedComponents/InputComponent';
import Link from 'next/link';

function UpdatePasswordForm() {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [passwordMatch, setPasswordMatch] = useState(true);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
	};

	return (
		<form
			action=""
			method="post"
			id="recover-password-form"
			onSubmit={handleSubmit}
		>
			<InputComponent
				label="password"
				labelText="Password"
				type="password"
				id="password"
				placeholder="Enter Password"
				value={password}
				onChange={e => setPassword(e.target.value)}
				required={true}
			/>
			<InputComponent
				label="password"
				labelText="Confirm Password"
				type="password"
				id="confirmPassword"
				placeholder="Enter Password Again"
				value={confirmPassword}
				onChange={e => {
					setConfirmPassword(e.target.value);
					setPasswordMatch(e.target.value === password);
				}}
				required={true}
			/>
			<div className="text-red-500">
				{passwordMatch ? '' : 'Passwords do not match'}
			</div>

			{/* <!-- btn for confirming password --> */}
			<div className="">
				<button
					type="submit"
					id="confirm-password-btn"
					className=""
				>
					Confirm
				</button>
			</div>
		</form>
	);
}

export default UpdatePasswordForm;
