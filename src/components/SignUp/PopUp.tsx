import React from 'react';
import './PopUp.css';

const PopUp = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="popup-overlay">
			<div className="popup-content">
				<button
					className="popup-close"
					onClick={onClose}
				>
					X
				</button>
				<p>
					<h1>
						<strong>Something went wrong</strong>
					</h1>
					Please ensure that all inputs have been typed in correctly.
				</p>
			</div>
		</div>
	);
};

export default PopUp;
