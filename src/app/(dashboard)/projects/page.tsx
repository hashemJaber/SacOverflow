import SearchBar from '@/components/SearchBar/SearchBar';
import StatusBar from '@/components/StatusBar/StatusBar';
import AddCard from '@/components/projects/AddCard';
import TicketCard from '@/components/projects/TicketCard';
import React from 'react';

const page = () => {
	return (
		<div className="w-full">
			<div className="flex flex-col justify-between md:flex-row m-1">
				<div className="flex flex-row grow">
					<div className="text-primary-green-600 text-4xl mt-1 font-bold px-2 py-1">
						Projects
					</div>
					<div className="mx-2 w-1/3">
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
									<TicketCard />
									<TicketCard />
									<TicketCard />
									<TicketCard />
									<TicketCard />
									<TicketCard />
									<TicketCard />
									<TicketCard />
									<TicketCard />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
