'use client';

import React, { useState } from 'react';

const ProjectActivity = ({ className }: { className?: string }) => {
	const [currentMonth, setCurrentMonth] = useState('Mar'); // Default month

	const monthlyActivities = {
		Jan: [
			{
				status: 'Completed',
				color: 'bg-green-300',
				member: '@Jane Doe',
				lastUpdated: '01-15 10:30',
				notes: 'Lorem ipsum dolor sit amet...',
				age: '15d ago',
			},
			{
				status: 'Delayed',
				color: 'bg-red-500',
				member: '@Jim Beam',
				lastUpdated: '01-20 11:00',
				notes: 'Consectetur adipiscing elit...',
				age: '10d ago',
			},
			{
				status: 'Delayed',
				color: 'bg-red-500',
				member: '@Jim Beam',
				lastUpdated: '01-20 11:00',
				notes: 'Consectetur adipiscing elit...',
				age: '10d ago',
			},
		],
		Feb: [
			{
				status: 'Completed',
				color: 'bg-green-300',
				member: '@Jane Doe',
				lastUpdated: '01-15 10:30',
				notes: 'Lorem ipsum dolor sit amet...',
				age: '15d ago',
			},
			{
				status: 'Delayed',
				color: 'bg-red-500',
				member: '@Jim Beam',
				lastUpdated: '01-20 11:00',
				notes: 'Consectetur adipiscing elit...',
				age: '10d ago',
			},
			{
				status: 'In Review',
				color: 'bg-orange-500',
				member: '@Jack Daniels',
				lastUpdated: '02-05 09:20',
				notes: 'Sed do eiusmod tempor...',
				age: '28d ago',
			},
			//   { status: 'Waiting for Feedback', color: 'bg-yellow-400', member: '@Johnnie Walker', lastUpdated: '02-10 15:45', notes: 'Incididunt ut labore...', age: '23d ago' },
			{
				status: 'Delayed',
				color: 'bg-red-500',
				member: '@Jim Beam',
				lastUpdated: '01-20 11:00',
				notes: 'Consectetur adipiscing elit...',
				age: '10d ago',
			},
		],
		Mar: [
			{
				status: 'Completed',
				color: 'bg-green-300',
				member: '@Jane Doe',
				lastUpdated: '01-15 10:30',
				notes: 'Lorem ipsum dolor sit amet...',
				age: '15d ago',
			},
			{
				status: 'Delayed',
				color: 'bg-red-500',
				member: '@Jim Beam',
				lastUpdated: '01-20 11:00',
				notes: 'Consectetur adipiscing elit...',
				age: '10d ago',
			},
			{
				status: 'Delayed',
				color: 'bg-red-500',
				member: '@Jim Beam',
				lastUpdated: '01-20 11:00',
				notes: 'Consectetur adipiscing elit...',
				age: '10d ago',
			},
			{
				status: 'Completed',
				color: 'bg-green-300',
				member: '@Jane Doe',
				lastUpdated: '01-15 10:30',
				notes: 'Lorem ipsum dolor sit amet...',
				age: '15d ago',
			},
			{
				status: 'Delayed',
				color: 'bg-red-500',
				member: '@Jim Beam',
				lastUpdated: '01-20 11:00',
				notes: 'Consectetur adipiscing elit...',
				age: '10d ago',
			},
			{
				status: 'Delayed',
				color: 'bg-red-500',
				member: '@Jim Beam',
				lastUpdated: '01-20 11:00',
				notes: 'Consectetur adipiscing elit...',
				age: '10d ago',
			},
		],
		Apr: [
			{
				status: 'Deployed',
				color: 'bg-purple-600',
				member: '@Chita Rivera',
				lastUpdated: '04-12 14:30',
				notes: 'Ut enim ad minim veniam...',
				age: '22d ago',
			},
			{
				status: 'In Progress',
				color: 'bg-blue-500',
				member: '@Dewars White',
				lastUpdated: '04-18 16:00',
				notes: 'Quis nostrud exercitation...',
				age: '16d ago',
			},
			{
				status: 'Completed',
				color: 'bg-green-300',
				member: '@Jane Doe',
				lastUpdated: '01-15 10:30',
				notes: 'Lorem ipsum dolor sit amet...',
				age: '15d ago',
			},
			{
				status: 'Delayed',
				color: 'bg-red-500',
				member: '@Jim Beam',
				lastUpdated: '01-20 11:00',
				notes: 'Consectetur adipiscing elit...',
				age: '10d ago',
			},
			{
				status: 'Delayed',
				color: 'bg-red-500',
				member: '@Jim Beam',
				lastUpdated: '01-20 11:00',
				notes: 'Consectetur adipiscing elit...',
				age: '10d ago',
			},
		],
		May: [
			{
				status: 'On Hold',
				color: 'bg-yellow-500',
				member: '@Glen Fiddich',
				lastUpdated: '05-01 12:15',
				notes: 'Ullamco laboris nisi...',
				age: '3d ago',
			},
			{
				status: 'New',
				color: 'bg-green-500',
				member: '@Balvenie Scotch',
				lastUpdated: '05-03 10:50',
				notes: 'Ut aliquip ex ea commodo...',
				age: '1d ago',
			},
			{
				status: 'Completed',
				color: 'bg-green-300',
				member: '@Jane Doe',
				lastUpdated: '01-15 10:30',
				notes: 'Lorem ipsum dolor sit amet...',
				age: '15d ago',
			},
			{
				status: 'Delayed',
				color: 'bg-red-500',
				member: '@Jim Beam',
				lastUpdated: '01-20 11:00',
				notes: 'Consectetur adipiscing elit...',
				age: '10d ago',
			},
			{
				status: 'Delayed',
				color: 'bg-red-500',
				member: '@Jim Beam',
				lastUpdated: '01-20 11:00',
				notes: 'Consectetur adipiscing elit...',
				age: '10d ago',
			},
		],
	};

	const handleMonthClick = (month: string) => {
		setCurrentMonth(month);
	};

	return (
		<div
			className={`max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg ${
				className ? ` ${className}` : ''
			}`}
		>
			<div className="overflow-x-auto">
				<table className="min-w-full table-auto rounded-lg">
					<thead className="bg-gray-200 rounded-t-lg">
						<tr>
							<th className="px-4 py-2 text-left rounded-tl-lg">
								Status
							</th>
							<th className="px-4 py-2 text-left">Member</th>
							<th className="px-4 py-2 text-left">
								Last Updated
							</th>
							<th className="px-4 py-2 text-left">Notes</th>
							<th className="px-4 py-2 text-left rounded-tr-lg">
								Select
							</th>
						</tr>
					</thead>
					<tbody>
						{monthlyActivities[
							currentMonth as keyof typeof monthlyActivities
						].map((activity: any, index: any) => (
							<tr
								key={index}
								className={`border-b ${
									index ===
									monthlyActivities[
										currentMonth as keyof typeof monthlyActivities
									].length -
										1
										? 'rounded-bl-lg rounded-br-lg'
										: ''
								}`}
							>
								<td className="px-4 py-2 flex items-center">
									<span
										className={`inline-block w-3 h-3 mr-2 rounded-full ${activity.color}`}
									></span>
									{activity.status}
								</td>
								<td className="px-4 py-2">{activity.member}</td>
								<td className="px-4 py-2">
									{activity.lastUpdated}
								</td>
								<td className="px-4 py-2 truncate">
									{activity.notes}
								</td>
								<td className="px-4 py-2">
									<input type="checkbox" />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="flex justify-between text-sm mt-4">
				{Object.keys(monthlyActivities).map(month => (
					<span
						key={month}
						onClick={() => handleMonthClick(month)}
						className={`cursor-pointer py-1 px-3 rounded-full ${
							currentMonth === month
								? 'bg-blue-500 text-white'
								: 'hover:bg-gray-100'
						}`}
					>
						{month}
					</span>
				))}
			</div>
		</div>
	);
};

export default ProjectActivity;
