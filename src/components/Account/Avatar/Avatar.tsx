import React from 'react';
import './Avatar.css';

interface AvatarProps {
	name: string;
}
//Splits name into intials
const Avatar = ({ name }: AvatarProps) => {
	const nameParts = name.split(' ');
	const fnameInit = nameParts[0] ? nameParts[0][0] : '';
	const lnameInit = nameParts[1] ? nameParts[1][0] : '';

	return (
		// TODO: Reference backend for username or name intials for profile initials
		<>
			<div className="font profilecontainer">
				{fnameInit}
				{lnameInit}
			</div>
		</>
	);
};

export default Avatar;
