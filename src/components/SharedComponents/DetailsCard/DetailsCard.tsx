'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// import CSS
import './DetailsCard.css';
import { useState } from 'react';
import CreateOrgModal from '@/components/Organization/CreateOrgModal';

export function CreateOrgCard({
	className,
	children,
	clickHandler,
}: {
	className?: string;
	children?: React.ReactNode;
	clickHandler?: () => void;
}) {
	const [modalOpen, setModalOpen] = useState(false);

	return !modalOpen ? (
		<div
			id="create-org-card"
			className={`${className}`}
		>
			<button
				// href={'/projects/new'}
				onClick={() => setModalOpen(true)}
				className="flex flex-col h-full justify-center items-center"
			>
				<div className="flex flex-col items-center h-2/3 justify-center p-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-52 h-52 stroke-primary-green-300"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
						/>
					</svg>
				</div>

				<span className="text-gray-500 font-semibold capitalize text-center">
					Create New Organization...
				</span>
			</button>
		</div>
	) : (
		<CreateOrgModal clickHandler={() => setModalOpen(false)} />
	);
}

interface OrgDetailsCardProps {
	className?: string;
	children?: React.ReactNode;

	// Props of our schema
	id: string;
	name: string;
	created_by: string;
	image: string;
	created_at: Date | string;
}
export function OrgDetailsCard({
	className,
	children,
	id,
	name,
	created_by,
	image,
	created_at,
}: OrgDetailsCardProps) {
	const router = useRouter();

	const setOrg = () => {
		// set a cookie for the org
		document.cookie = `org=${id}; path=/;`;
		router.refresh();
	};

	return (
		<Link
			// href={'/projects/new'}
			href={`/dashboard`}
			onClick={setOrg}
			className={`${className} org-card`}
		>
			{/* Image for the card details */}
			<Image
				src={image || '/images/wyncoservices.svg'}
				alt="Picture of the author"
				width={125}
				height={125}
			/>
			<span className="org-title">{name}</span>
		</Link>
	);
}
