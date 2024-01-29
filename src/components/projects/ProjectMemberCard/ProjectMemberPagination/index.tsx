'use client';
// TODO: think more for above to not be client component
import { useState } from 'react';
import MemberCard from '@/components/projects/ProjectMemberCard';

// CSS import
import './ProjectMemberPagination.css';

export default function ProjectMemberPagination({
	members,
	admin,
	project_id,
}: {
	members: any[];
	admin?: boolean;
	project_id: string;
}) {
	const MEMBERS_PER_PAGE = 3;

	const [currentMembers, setCurrentMembers] = useState<any[]>(
		members.slice(0, MEMBERS_PER_PAGE), // first 3 members upon load
	);

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(
		Math.ceil(members.length / MEMBERS_PER_PAGE),
	);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		const start = (page - 1) * MEMBERS_PER_PAGE;
		const end = start + MEMBERS_PER_PAGE;
		setCurrentMembers(members.slice(start, end));
	};

	return (
		<>
			{currentMembers ? (
				<div className="members-pagination">
					<div className="members">
						{currentMembers.map((member: any, idx: number) => (
							<MemberCard
								key={idx}
								memberName={member.name}
								memberRole={member.role}
								memberImage={member.image}
								memberDescription={member.description}
								user_id={member.id}
								project_id={project_id}
								admin={admin}
							/>
						))}

						{/* pagination */}
					</div>
					<PaginationHandler
						className="pagination-controls"
						currentPage={currentPage}
						setCurrentPage={handlePageChange}
						totalPages={totalPages}
					/>
				</div>
			) : (
				<div className="no-members">
					<span className="no-members-text">
						There are no members for this project
					</span>
				</div>
			)}
		</>
	);
}

export const PaginationHandler = ({
	className,
	currentPage,
	setCurrentPage,
	totalPages,
}: {
	className?: string;
	currentPage: number;
	setCurrentPage: (currentPage: number) => void;
	totalPages: number;
}) => {
	return (
		<div className={`${className ? `${className}` : ''}`}>
			{/* left arrow */}
			<button
				onClick={() => setCurrentPage(currentPage - 1)}
				className={`${currentPage <= 1 ? 'disabled' : ''}`}
				disabled={currentPage <= 1}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					className="w-6 h-6 stroke-primary-green-200"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 19.5 8.25 12l7.5-7.5"
					/>
				</svg>
			</button>

			{/* page numbers */}
			<div className="current-page">
				{currentPage} {` / `}
				{totalPages}
			</div>

			{/* right arrow */}
			<button
				onClick={() => setCurrentPage(currentPage + 1)}
				className={`${currentPage === totalPages ? 'disabled' : ''}`}
				disabled={currentPage >= totalPages}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					className="w-6 h-6 stroke-primary-green-200"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m8.25 4.5 7.5 7.5-7.5 7.5"
					/>
				</svg>
			</button>
		</div>
	);
};
