import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
	let response = NextResponse.next({
		request: {
			headers: request.headers,
		},
	});

	// Provided by the `@supabase/ssr` package; Handling of cookies client
	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				get(name: string) {
					return request.cookies.get(name)?.value;
				},
				set(name: string, value: string, options: CookieOptions) {
					request.cookies.set({
						name,
						value,
						...options,
					});
					response = NextResponse.next({
						request: {
							headers: request.headers,
						},
					});
					response.cookies.set({
						name,
						value,
						...options,
					});
				},
				remove(name: string, options: CookieOptions) {
					request.cookies.set({
						name,
						value: '',
						...options,
					});
					response = NextResponse.next({
						request: {
							headers: request.headers,
						},
					});
					response.cookies.set({
						name,
						value: '',
						...options,
					});
				},
			},
		},
	);

	// SSR Lib says to do this
	const resp = await supabase.auth.getSession();
	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();
	const authenticatedRoutes = [
		'/dashboard',
		'/dashboard/*',
		'/projects',
		'/projects/*',
		'/account',
		'/account/*',
		'/settings',
		'/settings/*',
		'/organization',
		'/organization/*',
	];
	const unauthenticatedRoutes = [
		'/login',
		'/login/*',
		'/signup',
		'/signup/*',
	];
	const currentRoute = request.nextUrl.pathname;
	// if the user is not auth'd and the current route is an auth'd route
	if (user === null && authenticatedRoutes.includes(currentRoute)) {
		const signInPage = '/login';
		const signInUrl = new URL(signInPage, request.nextUrl.origin);
		return NextResponse.redirect(signInUrl);
	}
	// if the user is auth'd and the current route is an unauth'd route
	if (user !== null && unauthenticatedRoutes.includes(currentRoute)) {
		const dashboardPage = '/dashboard';
		const dashboardUrl = new URL(dashboardPage, request.nextUrl.origin);
		return NextResponse.redirect(dashboardUrl);
	}

	return response;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};
