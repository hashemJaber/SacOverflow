// meta tags
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Signup Page',
    description: 'Join us at CAMEL.',
    authors: [{ name: 'SacOverflow' }],
    keywords: ['CAMEL', 'Cloud Asset Management Enhanced Launcher', 'Sign Up'],
};

// Custom Components
import SignUpForm from '@/components/SignUp/SignUpForm';

const SignUp = () => {
    return <SignUpForm />;
};

export default SignUp;
