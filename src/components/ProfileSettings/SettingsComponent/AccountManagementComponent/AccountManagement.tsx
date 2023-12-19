'use client';
import './AccountManagement.css';
import { useState } from 'react';
import InputComponent from '@/components/SharedComponents/InputComponent';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface SettingsAccountManagementItem {
	//rules
	title: 'Account' | 'Notifications';
	href?: string; //optional parameter, question mark is optional
	src: string;
	src2: string;
}

const AccountManagementComponent = ({
	title,
	href,
	src,
	src2,
}: SettingsAccountManagementItem) => {
	//using rules and creating functions
	const router = useRouter(); //refresh user to refresh page
	const clickhandle = () => {
		if (href) {
			router.push(href);
		}
	};

	return (
		<section onClick={clickhandle}>
			<div className="horizontal-line mx-auto flex">
				<Image
					src={src}
					className="h-14"
					alt=""
					height={100}
					width={100}
				/>

				<div
					className={`settings-account-management-item title-${title}`}
				>
					{title}
				</div>

				<Image
					src={src2}
					className="h-12"
					alt=""
					height={100}
					width={100}
				/>
				<hr></hr>
			</div>
		</section>
	);
};

export default AccountManagementComponent;
