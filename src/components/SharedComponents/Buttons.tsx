'use client';

import './buttons.css';

interface ButtonProps {
	variant: 'primary' | 'secondary';
	content: string;
	size: 'small' | 'medium' | 'large';
	className?: string;
	href?: string;
}
/**
 * Component for buttons
 *
 * @param param0 props for the button with variant, content, size, and className?
 * @returns a button with styling applied from tailwind based on the props
 */
function Buttons({ variant, content, size, className, href }: ButtonProps) {
	// onClick functionality
	const handleClick = () => {
		if (href) {
			window.location.href = href;
		}
	};

	return (
		<button
			type="button"
			className={`btn btn-${variant} btn-${size} ${className}`}
			// optional href on click
			onClick={handleClick}
		>
			{content}
		</button>
	);
}

export default Buttons;
