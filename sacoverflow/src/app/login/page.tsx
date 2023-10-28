// meta tags
import type { Metadata } from 'next';

// fonts
import { Lexend_Giga, Poppins } from 'next/font/google';
const inter = Lexend_Giga({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Login Page',
    description: 'Join us at CAMEL.',
    authors: [{ name: 'SacOverflow' }],
    keywords: ['CAMEL', 'Cloud Asset Management Enhanced Launcher', 'Sign In'],
};

// CSS
import './login.css';

// Custom Components
import LoginForm from '@/components/Login/LoginForm';
import Dropdown from '@/components/Dropdown';
import Image from 'next/image';

const Login = () => {
    // return <JoinPage />;
    return (
        <section id="login-section">
            <div id="login-content">
                {/* <!-- login-nav section --> */}
                <div id="login-nav">
                    <div>
                        <Dropdown />
                    </div>

                    <button id="signin-btn">
                        <a href="#" className="sign-in-btn login-nav-links">
                            Sign In
                        </a>
                    </button>
                    <button id="signup-btn">
                        <a href="/signup" className="login-nav-links">
                            Register
                        </a>
                    </button>
                </div>

                <div id="icon-content">
                    <Image
                        priority
                        src="/images/camel.svg"
                        alt="camel"
                        width={240}
                        height={240}
                    />

                    <div className={inter.className}>
                        <h3 id="icon-text">Camel</h3>
                    </div>

                    <h5 id="icon-description-text">Please Login to Proceed</h5>
                </div>

                <LoginForm />
            </div>

            {/* <!-- green content to right of login --> */}
            <div
                id="right-content"
                className="hidden md:flex flex-col justify-center items-center w-3/4 bg-[#5A8472] gap-y-4 min-h-full"
            >
                <div className={inter.className}>
                    <h3 id="content-title" className="">
                        Camel
                    </h3>
                </div>
                <Image
                    priority
                    src="/images/camel.svg"
                    alt="camel"
                    width={430}
                    height={305}
                />
            </div>
        </section>
    );
};

export default Login;
