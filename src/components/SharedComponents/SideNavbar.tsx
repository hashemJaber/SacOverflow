'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// CSS imports
import './SideNavbar.css';
import { createBrowserClient } from '@supabase/ssr';

// first half of nav items
const NavigationItems = [
	{
		name: 'Dashboard',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="navitem-icon"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
				/>
			</svg>
		),
		path: '/dashboard',
	},
	{
		name: 'Invoices',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="navitem-icon"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
				/>
			</svg>
		),
		path: '/invoices',
	},
	{
		name: 'Projects',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="navitem-icon"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
				/>
			</svg>
		),
		path: '/projects',
	},
	{
		name: 'Account',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="navitem-icon"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
				/>
			</svg>
		),
		path: '/account',
	},
];

// bottom portion of nav items
const AccountControlItems = [
	{
		name: 'Settings',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="navitem-icon"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
		),
		path: '/settings',
	},
	{
		name: 'Logout',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="navitem-icon"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
				/>
			</svg>
		),
		path: '/logout',
	},
];

const SideNavbar = ({ show, setter }) => {
	const pathname = usePathname();

	// NOTE: Advise on this, if want to do this, or use server side ??
	const SignOut = async () => {
		const supabase = await createBrowserClient(
			process.env.NEXT_PUBLIC_SUPABASE_URL!,
			process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		);
		const { error } = await supabase.auth.signOut();
		window.location.reload();
	};

	const appendShown = show ? '' : 'disabled';

	// TODO: implement modal overlay so if user clicks outside of sidebar, it closes
	const ModalOverlay = () => {
		<div
			className={`model-overlay`}
			onClick={() => {
				setter((oldVal: boolean) => !oldVal);
			}}
		/>;
	};

	return (
		<>
			<nav className={`side-navbar ${appendShown}`}>
				{/* navigation controls */}
				<div className="navigation-controls-container">
					{/* navigation items */}
					{NavigationItems.map((item, index) => {
						return (
							<Link
								className={`sidenav-item ${
									pathname === item.path ? 'active' : ''
								}`}
								href={`${item.path}`}
								key={index}
							>
								{/* icon */}
								{item.icon}

								{/* text */}
								<span className="navitem-text">
									{item.name}
								</span>
							</Link>
						);
					})}
				</div>

				{/* account controls */}
				<div className="account-controls-container">
					{AccountControlItems.map((item, index) => {
						if (item.name.toLowerCase() === 'logout') {
							return (
								<button
									className={`sidenav-item ${
										pathname === item.path ? 'active' : ''
									}`}
									onClick={SignOut}
									key={index}
								>
									{/* icon */}
									{item.icon}

									{/* text */}
									<span className="navitem-text">
										{item.name}
									</span>
								</button>
							);
						}
						return (
							<Link
								className={`sidenav-item ${
									pathname === item.path ? 'active' : ''
								}`}
								href={`${item.path}`}
								key={index}
							>
								{/* icon */}
								{item.icon}

								{/* text */}
								<span className="navitem-text">
									{item.name}
								</span>
							</Link>
						);
					})}
				</div>
			</nav>

			{/* display ModelOverlay here */}
			{show ? <></> : <></>}
		</>
	);
};

export default SideNavbar;
