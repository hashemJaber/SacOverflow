import './PopUp.css';

interface PopUpProps {
	isOpen: boolean;
	onClose: () => void;
	type: 'error' | 'success' | string;
	msg: string;
}

const PopUp = ({ isOpen, onClose, type, msg }: PopUpProps) => {
	// if popup shouldnt be open then return null
	let imgSrc;

	switch (type) {
		case 'error':
			imgSrc = (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-7 h-7"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
					/>
				</svg>
			);
			break;
		case 'success':
			imgSrc = (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-7 h-7"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			);
			break;

		default:
			imgSrc = (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
					/>
				</svg>
			);
			type = 'info';
			break;
	}

	const getTitle = () => {
		switch (type) {
			case 'error':
				return 'Something went wrong.';
			case 'success':
				return 'Success!';
			default:
				return 'Info';
		}
	};

	return (
		<div className={`popup-container ${type} ${isOpen ? '' : 'hide'}`}>
			<button
				className="popup-close"
				onClick={onClose}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="2.5"
					stroke="currentColor"
					className="w-4 h-4"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
			<div className="flex gap-x-4">
				<div className="popup-icon self-center">{imgSrc}</div>
				<div className="popup-content">
					<p className="popup-title">{getTitle()}</p>
					<p className="popup-details">{msg}</p>
				</div>
			</div>
		</div>
	);
};

export default PopUp;
