export interface IOrganization {
	id: string;
	name: string;
	image: string;
	created_at: Date;
	created_by: string;
}

export enum Roles {
	ADMIN = 'admin',
	SUPERVISOR = 'supervisor',
	MEMBER = 'member',
}
export interface Iorganization_member {
	member_id: string;
	org_id: string;
	role: Roles;
	created_at: string | Date;
}

export enum Status {
	Complete = 'complete',
	InProgress = 'in progress',
	NeedsApproval = 'needs approval',
	ActionNeeded = 'action needed',
	ToDo = 'to do',
}

export interface IProjects {
	id: string;
	org_id: string;
	title: string;
	address: string;
	status: Status;
	budget: number;
	details: string;
	due_date: Date;
	start_date: Date;
	completed_date: Date;
	created_at: Date;
	current_spent: number;
}

export interface IProjects_member {
	user_id: string;
	project_id: string;
	created_at: Date;
}

export interface ITasks {
	id: string;
	project_id: string;
	title: string;
	status: Status;
	due_date: Date;
	completed_date: Date;
	created_at: Date;
}

export interface ITasks_member {
	user_id: string;
	task_id: string;
	project_id: string;
	created_at: Date;
}

export interface IUsers {
	id: string;
	email: string;
	username: string;
	name: string;
	image: string;
	created_at: Date;
}
export interface ITestimonial {
	id: number;
	created_at: string;
	review_content: string;
	user_id: number;
	userName: string;
	user_profile_link: string;
}
