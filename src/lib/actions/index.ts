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
