'use client';

import { useState } from 'react';
import InputComponent from '@/components/SharedComponents/InputComponent';

import { useRouter } from 'next/navigation';
import { createSupbaseClient } from '@/lib/supabase/client';
import PopUp from './PopUp';

function SignUpForm() {
	const [emailOrUsername, setEmailOrUsername] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [userName, setUserName] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [passwordMatch, setPasswordMatch] = useState(true);

	const [popup, setPopup] = useState(false);
	const [popupMsg, setPopupMsg] = useState('');
	const router = useRouter();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (!passwordMatch) {
			return;
		}
		// FIXME: Ahahahahaha
		const resp: any = await signupNewUser();

		if (resp?.error) {
			// TODO:  if error message is 'User already registered.' then popup msg populate, redirect to signin as well...
			// encountered error
			console.log('err caught: ', resp);
			setPopupMsg(resp.error?.message || 'Something went wrong.');
			setPopup(true);
			// router.refresh();
			return;
		}

		// redirect to signin page
		router.push('/dashboard');
		router.refresh();
	};

	const signupNewUser = async () => {
		// create a browser client accessing cookie
		const supabase = await createSupbaseClient();

		// signup user with email, pass and meta data
		const { data, error } = await supabase.auth.signUp({
			email: emailOrUsername,
			password: password,
			options: {
				data: {
					// NOTE: How the Metadata fields are correlated later
					name: `${firstName} ${lastName}`,
					username: userName,
				},
			},
		});

		if (error) {
			return { error };
		}

		// double check me
		const { user, session } = data;

		return data;
	};

	return (
		<>
			<PopUp
				isOpen={popup}
				onClose={() => {
					setPopup(false);
				}}
				type="error"
				msg={`${popupMsg}`}
			/>
			<form
				action=""
				method="post"
				id="signup-form"
				onSubmit={handleSubmit}
			>
				<InputComponent
					label="firstName"
					labelText="First Name"
					type=""
					id="firstName"
					pattern="^[a-zA-ZÀ-ÿ]+$"
					placeholder="First Name"
					value={firstName}
					onChange={e => setFirstName(e.target.value)}
					required={true}
				/>
				<InputComponent
					label="lastName"
					labelText="Last Name"
					type=""
					id="lastName"
					pattern="^[a-zA-ZÀ-ÿ]+$"
					placeholder="Last Name"
					value={lastName}
					onChange={e => setLastName(e.target.value)}
					required={true}
				/>
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
				<InputComponent
					label="Username"
					labelText="Username"
					type=""
					id=""
					pattern="^[a-zA-Z0-9_]+$"
					placeholder="Enter Username"
					value={userName}
					onChange={e => setUserName(e.target.value)}
					required={true}
				/>
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

				{/* <!-- btn for signup --> */}
				<div className="">
					<button
						form="signup-form"
						type="submit"
						id="signup-btn-form"
						className=""
					>
						Sign Up
					</button>
				</div>
			</form>
		</>
	);
}

export default SignUpForm;
