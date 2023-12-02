import { AccountInputField } from '@/components/Account/AccountInputField/AccountInputField';

const AccountPage = () => {
	//TO DO: ref backend for First Name, Last Name initials of user
	const username = 'Imren More';
	return (
		<>
			<AccountInputField
				role={'Employee'}
				name={username}
			/>
		</>
	);
};

export default AccountPage;
