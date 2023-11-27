import { createSupbaseServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

/**
 * Function to handling signing a user out. This will sign a user out of Supabase
 * account and redirect them to the login page.
 *
 * @returns Redirects to /login
 */
export async function GET(req: NextRequest) {
	const supabase = await createSupbaseServerClient();
	await supabase.auth.signOut();
	// get users last location
	const location = req.headers.get('referer') || '/login';

	// FIXME: It is not properly deleting the cookie session.
	// NOTE: 1 fix to this is inside the other routes, assure that theuser does in fact have association with organization id.
	// clear the cookie org
	const cookieStore = cookies();
	cookieStore.delete('org');
	// response.headers.set('Set-Cookie', 'org=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT')
	cookieStore.set('org', '', {
		path: '/',
		expires: new Date(0),
	});

	await supabase.auth.refreshSession();
	// revalidate the /me page
	return redirect(location);
}
