'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface MemberContextInterface {
	members: any[];
	setMembers: (members: any[]) => void;

	// pagination
	currentPage: number;
	setCurrentPage: (currentPage: number) => void;
}

export const MemberContext = createContext<MemberContextInterface>({
	members: [],
	setMembers: (members: any[]) => {},

	// pagination
	currentPage: 1,
	setCurrentPage: (currentPage: number) => {},
});

export const MemberContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [members, setMembers] = useState<any[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);

	return (
		<MemberContext.Provider
			value={{
				members,
				setMembers,

				// pagination
				currentPage,
				setCurrentPage,
			}}
		>
			{children}
		</MemberContext.Provider>
	);
};
