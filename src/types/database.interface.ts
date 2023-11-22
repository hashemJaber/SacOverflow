export interface IOrganization_table {
	id: string;
	name: string;
	image: string;
	created_at: string | Date;
	created_by: string;
}

enum Roles {
	ADMIN = 'admin',
	SUPERVISOR = 'supervisor',
	MEMBER = 'member',
}
export interface Iorganization_member_table {
	member_id: string;
	org_id: string;
	// role is some sort of enum of Roles
	role: Roles;
	created_at: string | Date;
}

enum Status {
	Complete = 'complete',
	InProgress = 'in progress',
	NeedsApproval = 'needs approval',
	ActionNeeded = 'action needed',
	ToDo = 'to do',
}

export interface IProjects_table {
	id: string;
	org_id: string;
	title: string;
	status: Status;
	address: string;
	budget: number;
	details: string;
	due_date: string | Date;
	start_date: string | Date;
	completed_date: string | Date;
	created_at: string | Date;
}

export interface IProjects_member_table {
	user_id: string;
	project_id: string;
	created_at: string | Date;
}

export interface ITasks_table {
	id: string;
	project_id: string;
	title: string;
	status: Status;
	due_date: string | Date;
	completed_date: string | Date;
	created_at: string | Date;
}

export interface ITasks_member_table {
	user_id: string;
	task_id: string;
	project_id: string;
	created_at: string | Date;
}

export interface IUsers_table {
	id: string;
	email: string;
	username: string;
	name: string;
	image: string;
	created_at: string | Date;
}
