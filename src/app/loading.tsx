// export default function Loader() {
// 	return (
// 		<div className="loader w-full min-h-screen flex flex-col items-center justify-center bg-inherit">
// 			<svg
// 				xmlns="http://www.w3.org/2000/svg"
// 				height="150"
// 				fill="#black"
// 				className="bi bi-arrow-repeat animate-spin"
// 				viewBox="0 0 16 16"
// 			>
// 				<path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
// 				<path
// 					fillRule="evenodd"
// 					d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
// 				/>
// 			</svg>

// 			{/* import svg from local */}

// 			<span className="font-bold text-black">CAMEL Loading</span>
// 		</div>
// 	);
// }
'use client';
import React from 'react';
import './Loader.css';

export default function Loader() {
	const images = Array.from(
		{ length: 11 },
		(_, i) => `/images/camel_outline_00/camel_outline_${i * 10}.svg`,
	);

	const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
		e.currentTarget.style.display = 'none';
	};

	return (
		<div className="loader">
			{images.map((src, index) => (
				<img
					key={index}
					src={src}
					alt={`${index * 10}%`}
					className={`loader-image image-${index}`}
					onError={handleImageError}
				/>
			))}
			<span className="loader-text">CAMEL Loading</span>
		</div>
	);
}
