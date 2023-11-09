import './Card.css';

import { Lexend_Giga } from 'next/font/google';
const inter = Lexend_Giga({ subsets: ['latin'] });

interface CardProps {
	title: string;
	// content can be a string or another react component
	content: string | React.ReactNode;
	imageUrl?: string;
	subText?: string;
}

export default function Card({ title, content, imageUrl, subText }: CardProps) {
	return (
		<div id="home-card">
			<div className={`h-1/4 w-full ${inter.className}`}>
				<h3 id="card-title">{title}</h3>
			</div>

			<div className="card-content">{content}</div>
		</div>
	);
}
