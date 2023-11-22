import Image from 'next/image';

// import css
import './base.css';
import { Props } from '@/types/componentTypes';
import {
	BrandHeroSection,
	LanguageAuthHeader,
} from '@/components/SharedComponents/AuthHeaderComponent/RegistrationComponents';

import { Lexend_Giga } from 'next/font/google';
import { redirect } from 'next/navigation';
import { readUser } from '@/lib/actions';
const lexendGiga = Lexend_Giga({ subsets: ['latin'] });

export default async function DashboardLayoutPage({ children }: Props) {
	// if the user is logged in redirect to dashboard
	const {
		data: { user },
	} = await readUser();

	if (user) {
		// redirect to dashboard
		return redirect('/dashboard');
	}

	return (
		<section id="login-section">
			<div id="login-content">
				{/* Language, Sign In, & Register Links */}
				<LanguageAuthHeader />
				{/* Image with Product Logo */}
				<BrandHeroSection />
				{children}
			</div>

			{/* <!-- green content to right of login --> */}
			<div id="right-content">
				<div className={lexendGiga.className}>
					<h3
						id="content-title"
						className=""
					>
						Camel
					</h3>
				</div>
				<Image
					priority={true}
					src="/images/camel.svg"
					alt="camel"
					width={430}
					height={305}
				/>
			</div>
		</section>
	);
}
