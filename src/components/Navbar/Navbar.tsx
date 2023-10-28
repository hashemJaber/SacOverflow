'use client';

import Image from 'next/image';
import Link from 'next/link';
import Buttons from '@/components/SharedComponents/Buttons';

// CSS imports
import './navbar.css';

/**
 *  Component for the navbar, which includes a logo, sign up button, and login button
 *
 * @returns a navbar component with a logo, sign up button, and login button
 */
function Navbar() {
    return (
        <nav className="bg-primary-green-600 ">
            <div className="navbar-container">
                <Buttons
                    variant="secondary"
                    size="small"
                    href="/signup"
                    content="Sign Up"
                    className="md:hidden"
                />

                {/* Icon SVG */}
                <Link href="/" className="flex items-center justify-center">
                    {/* TODO: Retrieve proper sized svg file */}
                    <Image
                        src="/images/camel.svg"
                        className="h-8 mr-3"
                        alt="CAMEL Logo"
                        height={100}
                        width={100}
                    />
                </Link>
                <div className="btns-container">
                    <Buttons
                        variant="secondary"
                        size="small"
                        content="Sign Up"
                        href="/signup"
                        className="hidden md:block"
                    />
                    <Buttons
                        variant="primary"
                        size="small"
                        content="Login"
                        href="/login"
                    />
                </div>
                <div id="navbar-sticky">
                    <Link
                        href="/"
                        className="navbar-sticky-text"
                        aria-current="page"
                    >
                        CAMEL
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
