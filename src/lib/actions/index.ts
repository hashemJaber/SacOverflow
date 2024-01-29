import { createSupbaseServerClientReadOnly } from '../supabase/server';

export async function readUserSession() {
	const supabase = await createSupbaseServerClientReadOnly();

	return supabase.auth.getSession();
}

export async function readUser() {
	const supabase = await createSupbaseServerClientReadOnly();

	return supabase.auth.getUser();
}

export async function getUserInformation() {
	const supabase = await createSupbaseServerClientReadOnly();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	// get database information
	const { data: resp, error } = await supabase
		.from('user')
		.select('id, username, email, name, image')
		.eq('id', user?.id)
		.single();
	return resp;
}

export async function getOrganizationInformation(id: string) {
	const supabase = await createSupbaseServerClientReadOnly();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	// get database information
	const { data: resp, error } = await supabase
		.from('organization')
		.select('*')
		.eq('id', id)
		.single();
	return resp;
}

export async function getOrganizationMemberRole(org_id: string) {
	const supabase = await createSupbaseServerClientReadOnly();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	// get database information
	const { data: resp, error } = await supabase
		.from('organization_member')
		.select('role')
		.eq('org_id', org_id)
		.eq('member_id', user?.id)
		.single();
	return resp;
}

export async function checkProjectMember(
	org_id: string,
	project_id: string,
): Promise<boolean> {
	const supabase = await createSupbaseServerClientReadOnly();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	// check if the user is the adminstrator of the organization
	const { role } = (await getOrganizationMemberRole(org_id)) || {};

	// if this role is an admin of the current org, they have access to this project
	if (role === 'admin') {
		const { data: resp, error } = await supabase
			.from('projects')
			.select('*')
			.eq('id', project_id)
			.eq('org_id', org_id)
			.single();

		if (error) {
			console.error('Error getting project', error);
			return false;
		}

		// retrun the values of the project; for admin
		return resp;
	}

	// if here, then this user is not admin of org, so check association with project and org
	// check if this user has assocation with this project
	const { data: resp1, error: error1 } = await supabase
		.from('projects_member')
		.select('user_id')
		.eq('project_id', project_id)
		.eq('user_id', user?.id)
		.single();

	if (error1) {
		console.error('Error getting project member', error1);
		return false;
	}

	if (!resp1) {
		console.log('You are not a member of this project');
		return false;
	}

	// if this user isnt caught with no assocation above return true
	return true;
}

export async function getProjectInformation(org_id: string, proj_id: string) {
	const supabase = await createSupbaseServerClientReadOnly();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	// get database information
	const { data: resp, error } = await supabase
		.from('projects')
		.select('*')
		.eq('id', proj_id)
		.eq('org_id', org_id)
		.single();

	// TODO: Handle error
	return resp;
}

export async function getProjectMembers(org_id: string, proj_id: string) {
	const supabase = await createSupbaseServerClientReadOnly();

	// retrieve user ids from projects_member table associated with this project
	const { data: resp, error } = await supabase
		.from('projects_member')
		.select('user_id')
		.eq('project_id', proj_id);

	if (error) {
		// TODO: handle errors
		console.error('Error getting project members', error);
		return [];
	}

	// if have response, utilize array from returned data to fetch user profile
	const usersData = await Promise.all(
		resp?.map(userID => {
			return supabase
				.from('user')
				.select('email, username, name, image, id')
				.eq('id', userID.user_id)
				.single()
				.then(({ data }) => data);
		}),
	);

	// append the user role to usersData
	// TODO: add interface types & store in types file
	const usersDataWithRole = await Promise.all(
		usersData.map(async (user: any) => {
			const { data, error } = await supabase
				.from('organization_member')
				.select('role')
				.eq('org_id', org_id)
				.eq('member_id', user?.id)
				.single();

			const role = data?.role;

			return {
				...user,
				role,
			};
		}),
	);

	return usersDataWithRole;
}

export async function removeProjectMember(proj_id: string, user_id: string) {
	const supabase = await createSupbaseServerClientReadOnly();

	// remove user from projects_member table
	const { data: resp, error } = await supabase
		.from('projects_member')
		.delete()
		.eq('project_id', proj_id)
		.eq('user_id', user_id);

	if (error) {
		console.error('Error removing project member', error);
		return false;
	}

	return true;
}
