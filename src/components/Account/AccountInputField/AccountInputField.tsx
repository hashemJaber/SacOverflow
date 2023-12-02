import React from 'react';
import './AccountInputField.css';
import Avatar from '../Avatar/Avatar';
import Buttons from '@/components/SharedComponents/Buttons';

interface UserProfileProps {
	name: string;
	role: string;
}
interface AccountInputFieldProps {
	label: string;
	placeholder: string;
	type: 'text' | 'email' | 'password';
}

const example: AccountInputFieldProps[] = [
	{ label: 'First Name', placeholder: 'First Name', type: 'text' },
	{ label: 'Last Name', placeholder: 'Last Name', type: 'text' },
	{ label: 'Email', placeholder: 'Email', type: 'email' },
	{ label: 'Set New Password', placeholder: 'Password', type: 'password' },
	{
		label: 'Confirm Password',
		placeholder: 'Confirm Password',
		type: 'password',
	},
];

const AccountInputField = ({ name, role }: UserProfileProps) => {
	return (
		<div>
			<div className="accountcontainer">
				<div className="accountinfo">
					<Avatar name={name} />
					<div className="user-profile">
						<div className="name">{name}</div>
						<div className="role">{role}</div>
					</div>
				</div>
				{example.map((inpt, index) => (
					<div
						key={inpt.label}
						className="infocolumns"
					>
						<label
							htmlFor={inpt.label}
							className="labelsformat"
						>
							{inpt.label}
						</label>
						<input
							type={inpt.type}
							id={inpt.label}
							className="inputf"
							placeholder={inpt.placeholder}
							required
						/>
					</div>
				))}
				<Buttons
					variant="primary"
					content="Save"
					size="medium"
					className="mx-2 my-2"
				/>
			</div>
		</div>
	);
};

export { AccountInputField };
