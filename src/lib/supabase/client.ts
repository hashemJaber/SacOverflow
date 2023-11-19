import { createBrowserClient } from '@supabase/ssr';

/**
 * Method to return a supabase client (browser) based server for connection to our backend.
 *
 * @returns Supabase Browser Client
 */
export async function createSupbaseClient() {
	// return instance of browser client
	return await createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
	);
}

/**
 * Method to retrieve if a user is currently authenticated (session) or not.
 * May be of some use.
 *
 * @returns session object or null
 */
export async function checkSession() {
	// get client
	const supabase = await createSupbaseClient();

	// return session
	return supabase.auth.getSession();
	// return await supabase.auth.getUser();
}
