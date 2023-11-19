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
