import AddCard from '@/components/projects/AddCard';
import SearchBar from '@/components/projects/SearchBar/SearchBar';
import StatusBar from '@/components/projects/StatusBar/StatusBar';
import TicketCard from '@/components/projects/TicketCard';
import { ITicketCardProps } from '@/types/componentTypes';
import React from 'react';

const ticketOne: ITicketCardProps = {
	id: 1,
	title: 'Leaky Faucet',
	status: 'In-Progress',
	createdDate: new Date('2023-10-31T05:48:33.124+00:00'),
	address: {
		street: '1234 Main St',
		city: 'Anytown',
		state: 'CA',
		zipCode: '12345',
	},
};

const ticketTwo: ITicketCardProps = {
	id: 2,
	title: 'Light Replacement',
	status: 'Completed',
	createdDate: new Date('2023-10-31T05:48:33.124+00:00'),
	address: {
		street: '1111 Main St',
		city: 'Anytown',
		state: 'CA',
		zipCode: '12345',
	},
};

const ticketThree: ITicketCardProps = {
	id: 3,
	title: 'Clean HVAC',
	status: 'Action-Needed',
	createdDate: new Date('2023-10-31T05:48:33.124+00:00'),
	address: {
		street: '0001 Main Street',
		city: 'Anytown',
		state: 'CA',
		zipCode: '12345',
	},
};

const page = () => {
	return (
		<div className="w-full">
			<div className="flex flex-col justify-between md:flex-row m-1">
				<div className="flex flex-row grow">
					<div className="text-primary-green-600 text-4xl mt-1 font-bold px-2 py-1">
						Projects
					</div>
					<div className="mx-2 my-1">
						<SearchBar />
					</div>
				</div>
				<div className="flex flex-row justify-between text-white">
					<StatusBar status="In-Progress" />
					<StatusBar status="Completed" />
					<StatusBar status="Needs-Approval" />
					<StatusBar status="Action-Needed" />
				</div>
			</div>
			<div className="flex flex-col h-screen max-h-screen">
				<div>
					<div className="flex-grow overflow-y-auto bg-white text-default-text">
						<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 m-4">
							<AddCard />
							<TicketCard {...ticketOne} />
							<TicketCard {...ticketTwo} />
							<TicketCard {...ticketThree} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
