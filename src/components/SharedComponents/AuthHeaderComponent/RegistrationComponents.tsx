'use client';
import Dropdown from '@/components/Dropdown';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Lexend_Giga } from 'next/font/google';
const lexendGiga = Lexend_Giga({ subsets: ['latin'] });

// css styling
import './RegistrationComponents.css';
import Image from 'next/image';

function LanguageAuthHeader() {
	const path = usePathname();

	return (
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
					className={`login-nav-links ${
						path === '/login' ? 'sign-in-btn' : ''
					}`}
				>
					Login
				</Link>
			</button>
		</div>
	);
}

function BrandHeroSection() {
	const path = usePathname();

	let text = 'Please Sign up to Proceed';
	if (path === '/login') {
		text = 'Please Login to Proceed';
	}
	return (
		<div id="icon-content">
			<Image
				priority
				src="/images/camel.svg"
				alt="camel"
				width={240}
				height={240}
			/>

			<div className={lexendGiga.className}>
				<h3 id="icon-text">Camel</h3>
			</div>

			<h5 id="icon-description-text">{text}</h5>
		</div>
	);
}

export { LanguageAuthHeader, BrandHeroSection };
