import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import { readUser } from '@/lib/actions';

import { Suspense } from 'react';
import Loader from './loading';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
	title: 'CAMEL - Cloud Asset Management Enhanced Launcher',
	description:
		'A project management tool for organziaiton structure pertaining to property management.',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// get supabase client
	const {
		data: { user },
	} = await readUser();

	return (
		<html lang="en">
			<body className={poppins.className}>
				<Navbar session={user || undefined} />
				<Suspense fallback={<Loader />}>{children}</Suspense>
			</body>
		</html>
	);
}
