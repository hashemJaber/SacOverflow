// meta tags
import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Login Page',
    description: 'Join us at CAMEL.',
    authors: [{ name: 'SacOverflow' }],
    keywords: ['CAMEL', 'Cloud Asset Management Enhanced Launcher', 'Sign In'],
};

// Custom Components
import LoginForm from '@/components/Login/LoginForm';

const Login = () => {
    return <LoginForm />;
};

export default Login;
