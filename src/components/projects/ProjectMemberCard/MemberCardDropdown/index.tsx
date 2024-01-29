'use client';

import { useState } from 'react';

// CSS import
import './MemberCardDropdown.css';
import { removeProjectMember } from '@/lib/actions/client';

export default function MemberCardDropdown({
	user_id,
	project_id,
}: {
	user_id: string;
	project_id: string;
}) {
	'use client';
	const [showDropdown, setShowDropdown] = useState(false);

	// remove member from project
	const removeMember = async () => {
		const response = await removeProjectMember(project_id, user_id);

		if (response) {
			window.location.reload();
		}
	};

	return (
		<button
			className="member-card-dropdown"
			onClick={() => setShowDropdown(!showDropdown)}
		>
			{/* SVG to enable click options */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="currentColor"
				className="w-6 h-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="m19.5 8.25-7.5 7.5-7.5-7.5"
				/>
			</svg>

			{/* options  */}
			<div
				className={`member-card-dropdown-options${
					!showDropdown ? ' hidden' : ''
				}`}
			>
				<div
					className="option"
					onClick={removeMember}
				>
					Remove
				</div>
			</div>
		</button>
	);
}
