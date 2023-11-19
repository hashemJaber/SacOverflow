import { createSupbaseServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

/**
 * Function to handling signing a user out. This will sign a user out of Supabase
 * account and redirect them to the login page.
 *
 * @returns Redirects to /login
 */
export async function GET() {
	const supabase = await createSupbaseServerClient();
	await supabase.auth.signOut();
	await supabase.auth.refreshSession();
	return redirect('/login');
}
