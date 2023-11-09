import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const AddCard = () => {
	return (
		<div className="bg-gray-100 hover:bg-gray-300 rounded-md shadow-lg p-3 m-2">
			<Link
				href={'/projects/new'}
				className="flex flex-col h-full justify-center items-center"
			>
				<div>
					<div className="flex flex-col items-center ">
						<FontAwesomeIcon
							icon={faPlus}
							size="6x"
						/>
						<div className="text-gray-500 font-semibold">
							Add New Project Here...
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default AddCard;
