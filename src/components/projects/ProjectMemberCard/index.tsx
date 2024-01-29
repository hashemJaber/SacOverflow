import Image from 'next/image';
import { Poppins } from 'next/font/google';

// CSS import
import './ProjectMemberCard.css';
import MemberCardDropdown from './MemberCardDropdown';

const PoppinsRegular = Poppins({
	subsets: ['latin-ext'],
	weight: ['400'],
});

interface MemberCardProps {
	className?: string;

	memberName: string;
	memberRole: string;
	memberImage: string;
	memberDescription: string;

	user_id: string;
	project_id: string;
	admin?: boolean;
}

export default function MemberCard({
	className,
	memberName,
	memberRole,
	memberImage,
	memberDescription,
	user_id,
	project_id,
	admin,
}: MemberCardProps) {
	return (
		<div
			className={`member-card ${PoppinsRegular.className}${
				className ? ` ${className}` : ''
			}`}
		>
			{/* dropdown toggle */}
			{admin ? (
				<MemberCardDropdown
					user_id={user_id}
					project_id={project_id}
				/>
			) : null}
			<div className="profile">
				{/* img left col */}
				<Image
					src={memberImage}
					alt={memberName}
					width={125}
					height={125}
					className="member-image"
				/>
				<div className="member-name">{memberName}</div>
			</div>

			<div className="member-role">Team {memberRole}</div>
			<span className="member-description">
				{/* TODO: edit to handle description */}
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Dignissimos labore numquam provident quaerat dicta, maxime neque
				iusto aut deserunt. Officiis, temporibus rerum quaerat quos
				consectetur vitae rem fugit ut neque?
			</span>
		</div>
	);
}
