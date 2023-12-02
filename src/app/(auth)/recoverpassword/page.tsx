// meta tags
import type { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Recover Password Page',
	description: 'Join us at CAMEL.',
	authors: [{ name: 'SacOverflow' }],
	keywords: [
		'CAMEL',
		'Cloud Asset Management Enhanced Launcher',
		'Recover Password',
	],
};

// Custom Components
import RecoverPasswordForm from '@/components/RecoverPassword/RecoverPasswordForm';

const RecoverPassword = () => {
	return <RecoverPasswordForm />;
};

export default RecoverPassword;
