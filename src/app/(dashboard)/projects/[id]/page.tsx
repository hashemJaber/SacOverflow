import {
	checkProjectMember,
	getOrganizationMemberRole,
	getProjectMembers,
} from '@/lib/actions';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Poppins } from 'next/font/google';

// CSS import
import './SingleProjectPage.css';
import ProjectActivity from '@/components/Dashboard/project_activity/project_activity';
import ProjectMemberPagination from '@/components/projects/ProjectMemberCard/ProjectMemberPagination';
import { SearchBar } from '@/components/projects/ProjectMemberCard/AddMemberInteraction';
import ProjectAttachments from '@/components/projects/ProjectAttachments';

const PoppinsSemiBold = Poppins({
	subsets: ['latin-ext'],
	weight: ['600'],
});

export default async function SingleProjectPage({
	params,
}: {
	params: { id: string };
}) {
	// verify user has a cookie for org
	const cookieStore = cookies();
	const org = cookieStore.get('org')?.value as string;

	// if there is no cookie association with the user for the org, redirect to the organization page
	if (!org) {
		redirect('/organization');
	}
	// Check if user has associaton to this current organization
	const roleResponse = await getOrganizationMemberRole(org);
	const role: string = roleResponse?.role || '';
	if (!role) {
		redirect('/organization');
	}

	// check if user has association with this project under this organization
	const orgAndProjectAssociation = await checkProjectMember(org, params.id);

	// if user has no association to this current project, redirect to the projects page
	if (!orgAndProjectAssociation) {
		redirect('/projects');
	}

	const {
		id: project_id,
		org_id,
		title,
		address,
		status,
		budget,
		details,
		due_date,
		start_date,
		completed_date,
		created_at,
	} = orgAndProjectAssociation as any; // FIXME: hello find me buddies

	// fetch the project members
	// TODO:  assign interface properly below
	const projectMembers: any[] = await getProjectMembers(org, project_id);

	// if not redirect to the projects page

	return (
		<div className={`project-details ${PoppinsSemiBold.className}`}>
			<div className="project-title">{title}</div>
			<div className="project-address">{address}</div>

			{/* Hashem's components for Project tasks */}
			<div className="project-tasks">
				<div className="title">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
						/>
					</svg>
					<span>Project Tasks</span>
				</div>
			</div>

			<div className="project-members">
				<div className="title">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
						/>
					</svg>
					<div className="flex justify-between items-center w-full">
						<span>Project Members</span>
						{role === 'admin' ? <SearchBar /> : null}
					</div>
					{/* client component to allow adding members to this project */}
				</div>
				<ProjectMemberPagination
					members={projectMembers}
					project_id={project_id}
					admin={role === 'admin' ? true : false}
				/>
			</div>

			<div className="project-activity">
				<div className="title">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
						/>
					</svg>

					<span>Project Activity</span>
				</div>
				<ProjectActivity className="activity-card" />
			</div>

			<div className="project-attachments">
				<div className="title">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
						/>
					</svg>
					<span>Project Attachments / References</span>
				</div>
				<ProjectAttachments />
			</div>

			<div className="project-expenses">
				<div className="title">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						/>
					</svg>
					<span>Project Expenses</span>
				</div>
			</div>
		</div>
	);
}
