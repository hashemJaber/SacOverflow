import '@fortawesome/fontawesome-svg-core/styles.css';
import { faCheck, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import './status.css';
import { ITicketCardProps } from '@/types/componentTypes';

const TicketCard = ({ ...ticketCard }: ITicketCardProps) => {
	const formatTimeStamp = (timestamp: Date) => {
		const options = {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour12: true,
		};

		const date = new Date(timestamp);
		const formattedDate = date.toLocaleString('en-US', options);

		return formattedDate;
	};

	let iconColor = '';
	switch (ticketCard.status.toLowerCase()) {
		case 'in-progress':
			iconColor = '#FACC14';
			break;
		case 'completed':
			iconColor = '#166434';
			break;
		case 'action-needed':
			iconColor = '#B91C1B';
			break;
		case 'needs-approval':
			iconColor = '#3B81F6';
			break;
		default:
			iconColor = '';
			break;
	}

	return (
		<div className="flex flex-col bg-gray-100 hover:bg-gray-300 rounded-md shadow-lg p-3 m-2">
			<Link href={`/projects/${ticketCard.id}`}>
				<div className="flex justify-between place-items-center space-x-2">
					{/* <FontAwesomeIcon
						icon={faCheck}
						size="2x"
						className="flex-1"
					/> */}
					<div className="font-medium flex-1">
						{formatTimeStamp(ticketCard.createdDate)}
					</div>
					<div
						className={`status-bar status-${ticketCard.status} py-1 px-2 rounded-full text-gray-100 flex-1 text-center`}
					>
						{ticketCard.status}
					</div>
				</div>
				<div className="font-bold flex justify-center text-lg">
					{ticketCard.title}
				</div>
				<div>
					<div className="flex justify-center text-md">
						<FontAwesomeIcon
							icon={faWarehouse}
							size="4x"
							className={` status-${ticketCard.status} ${iconColor} mt-2 mb-2`}
							color={iconColor}
						/>
					</div>
					<div className="flex flex-col place-items-center text-md">
						<div>{ticketCard.address.street}</div>
						<div>
							{ticketCard.address.city} {', '}
							{ticketCard.address.state}{' '}
							{ticketCard.address.zipCode}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default TicketCard;
