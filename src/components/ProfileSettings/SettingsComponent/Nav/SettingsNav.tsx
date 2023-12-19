'use client';
import './SettingsNav.css';
import { useState } from 'react';
import InputComponent from '@/components/SharedComponents/InputComponent';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface SettingsNavItem {
	//rules
	title: 'Settings';
	href?: string; //optional parameter, question mark is optional
	src: string;
	src2: string;
}

//created function named SettingsItem
const SettingsNav = ({ title, href, src, src2 }: SettingsNavItem) => {
	//using rules and creating functions
	const router = useRouter(); //refresh user to refresh page
	const clickhandle = () => {
		if (href) {
			router.push(href);
		}
	};

	return (
		<section onClick={clickhandle}>
			<div className="Nav flex items-center pb-8">
				<div className="mr-2">
					<Image
						src={src}
						className="h-10 md:h-14 w-16 md:w-20"
						alt=""
						height={100}
						width={100}
					/>
				</div>
				<div className="mr-2">
					<Image
						src={src2}
						className="h-10 md:h-14 w-10 md:w-14"
						alt=""
						height={100}
						width={100}
					/>
				</div>
				{/* make h1 a div or not???  */}
				{/* <h1>{title}</h1> */}
				<div className={`settings-nav title-${title}`}>{title}</div>
			</div>
		</section>
	);
};

export default SettingsNav;
