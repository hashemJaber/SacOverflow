'use client';
import Dropdown from '@/components/Dropdown';
import Image from 'next/image';

import { Lexend_Giga, Poppins } from 'next/font/google';
const inter = Lexend_Giga({ subsets: ['latin'] });

// import css
import './base.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayoutPage({ children }) {
    const path = usePathname();

    let text = 'Please Sign up to Proceed';
    if (path === '/login') {
        text = 'Please Login to Proceed';
    }
    return (
        <section id="login-section">
            <div id="login-content">
                {/* <!-- login-nav section --> */}
                <div id="login-nav">
                    <div>
                        <Dropdown />
                    </div>

                    <button id="signin-btn">
                        <Link
                            href="/signup"
                            className={`login-nav-links ${
                                path === '/signup' ? 'sign-in-btn' : ''
                            }`}
                        >
                            Sign Up
                        </Link>
                    </button>
                    <button id="signup-btn">
                        <Link
                            href="/login"
                            // className="sign-in-btn login-nav-links"
                            className={`login-nav-links ${
                                path === '/login' ? 'sign-in-btn' : ''
                            }`}
                        >
                            Login
                        </Link>
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

                    <h5 id="icon-description-text">{text}</h5>
                </div>

                {children}
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
}
