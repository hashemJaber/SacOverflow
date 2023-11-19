import { createSupbaseServerClientReadOnly } from '../supabase/server';

export async function readUserSession() {
	const supabase = await createSupbaseServerClientReadOnly();

	return supabase.auth.getSession();
}

export async function readUser() {
	const supabase = await createSupbaseServerClientReadOnly();

	return supabase.auth.getUser();
}
