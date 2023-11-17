import React from 'react';
import Image from 'next/image';
import './PopUp.css';

const PopUp = ({ isOpen, onClose, type, imageSrc }) => {
	if (!isOpen) {return null;}

	const getPopupClassName = () => {
		if (type === 'error') {
			return 'popup-error';
		} else if (type === 'success') {
			return 'popup-success';
		}
		return 'popup-default';
	};

	const getTitle = () => {
		return type === 'error' ? 'Invalid input.' : 'Success!';
	};

	const getDetails = () => {
		return type === 'error' ? 'Please try again.' : 'Welcome aboard!';
	};

	return (
		<div className={`popup-overlay ${getPopupClassName()}`}>
			<div className="popup-content">
				<button
					className="popup-close"
					onClick={onClose}
				>
					X
				</button>
				<div className="popup-content-inner">
					<Image
						src={imageSrc} // Use the image source passed as a prop
						alt={type === 'error' ? 'Error Icon' : 'Success Icon'}
						width={100} // Set the width as needed
						height={100} // Set the height as needed
						className="popup-image"
					/>
					<p>
						<h1>
							<strong>{getTitle()}</strong>
						</h1>
						{getDetails()}
					</p>
				</div>
			</div>
		</div>
	);
};

export default PopUp;
