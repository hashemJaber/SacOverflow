'use client';
import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';
import InputComponent from '@/components/SharedComponents/InputComponent';

function RecoverPasswordForm() {
	const [emailOrUsername, setEmailOrUsername] = useState('');
	const router = useRouter();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const supabase = await createBrowserClient(
			process.env.NEXT_PUBLIC_SUPABASE_URL!,
			process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		);

		const { data, error } =
			await supabase.auth.resetPasswordForEmail(emailOrUsername);
	};

	return (
		<form
			action=""
			method="post"
			id="recover-password-form"
			onSubmit={handleSubmit}
		>
			<InputComponent
				label="email"
				labelText="Email address"
				type="email"
				id="email"
				// pattern="^(?=.{3,50}$)([a-zA-Z0-9_\.]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}|[a-zA-Z][a-zA-Z0-9_\.]{2,19})$"
				placeholder="Enter Email"
				value={emailOrUsername}
				onChange={e => setEmailOrUsername(e.target.value)}
				required={true}
			/>

			{/* <!-- btn for sending password reset link --> */}
			<div className="">
				<button
					type="submit"
					id="recover-password-btn"
					className=""
					form="recover-password-form"
				>
					Send Password Reset Link
				</button>
			</div>
		</form>
	);
}

export default RecoverPasswordForm;
