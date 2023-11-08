'use client';

import Image from 'next/image';
import Link from 'next/link';
import Buttons from '@/components/SharedComponents/Buttons';

// CSS imports
import './navbar.css';
import { usePathname } from 'next/navigation';

const SearchBar = (props) => {
    const { className } = props;
    return (
        <div className={`search-bar-container ${className}`}>
            {/* Search Bar*/}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="search-icon"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>

            <input
                type="text"
                placeholder="Search something here..."
                className="search-bar"
            />
        </div>
    );
};
/**
 *  Component for the navbar, which includes a logo, sign up button, and login button
 *
 * @returns a navbar component with a logo, sign up button, and login button
 */
function Navbar() {
    let loggedIn = false;
    const pathName = usePathname();

    // LOGGED IN PATHS
    const loggedInPaths = [
        '/dashboard',
        '/projects',
        '/invoices',
        '/account',
        '/profile',
    ];

    // if logged in, show navbar
    if (loggedInPaths.includes(pathName)) {
        loggedIn = true;
    }

    if (loggedIn) {
        return (
            <nav className="bg-primary-green-600 ">
                <div className="navbar-container">
                    <Link
                        href="/"
                        className="flex items-center justify-center text-white font-bold tracking-widest"
                    >
                        {/* TODO: Retrieve proper sized svg file */}
                        <Image
                            src="/images/camel.svg"
                            className="h-8"
                            alt="CAMEL Logo"
                            height={100}
                            width={100}
                        />
                        {'CAMEL'}
                    </Link>

                    {/* Search Bar*/}
                    <SearchBar className="" />

                    <div className="profile-container">
                        {/* company image */}
                        <Image
                            src="/images/wyncoservices.svg"
                            alt="company logo"
                            height={25}
                            width={25}
                            className="profile-company-logo"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="notification-bell"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                            />
                        </svg>

                        {/* profile avatar */}
                        <button className="profile-avatar">
                            <Image
                                src="/images/hashemtmp.jpeg"
                                alt="profile"
                                height={25}
                                width={25}
                                className="rounded-full h-8 w-8"
                            />

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="profile-avatar-arrow"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </button>
                    </div>
                    {/* <div id="navbar-sticky">
                        <Link
                            href="/"
                            className="navbar-sticky-text"
                            aria-current="page"
                        >
                            CAMEL
                        </Link>
                    </div> */}
                </div>
            </nav>
        );
    }

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
