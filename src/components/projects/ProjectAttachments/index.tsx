'use client';

// CSS import
import './ProjectAttachments.css';

const TempAttachments: IProjectReference[] = [
	{
		id: '1',
		project_id: '1',
		uploaded_by: 'Joseph Luong',
		file_name: 'home depot.jpeg',
		file_type: 'RECEIPT',
		file_size: '1.2 MB',
		file_url: 'https://www.google.com',
		created_at: '2021-06-01 00:00:00',
	},
	{
		id: '2',
		project_id: '1',
		uploaded_by: 'Hashem Jaber',
		file_name: 'test.csv',
		file_type: 'EXCEL',
		file_size: '1.2 MB',
		file_url: 'https://www.google.com',
		created_at: '2021-06-01 00:00:00',
	},
	{
		id: '3',
		project_id: '1',
		uploaded_by: 'Dakota Conn',
		file_name: 'test.pdf',
		file_type: 'DEFAULT',
		file_size: '1.2 MB',
		file_url: 'https://www.google.com',
		created_at: '2021-06-01 00:00:00',
	},
	{
		id: '4',
		project_id: '1',
		uploaded_by: 'Jacob Correa',
		file_name: 'lowes.jpeg',
		file_type: 'RECEIPT',
		file_size: '1.2 MB',
		file_url: 'https://www.google.com',
		created_at: '2021-06-01 00:00:00',
	},
];

export default function ProjectAttachments() {
	return (
		<div className="all-attachments">
			{TempAttachments.map((attachment, idx) => {
				return (
					<SingleAttachment
						{...attachment}
						key={idx}
					/>
				);
			})}
		</div>
	);
}

interface IProjectReference {
	id: string;
	project_id: string;
	uploaded_by: string;
	file_name: string;
	file_type: string;
	file_size: string;
	file_url: string;
	created_at: string;
}
export const SingleAttachment = (reference: IProjectReference) => {
	const icons: any = {
		RECEIPT: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				className="icon image"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
				/>
			</svg>
		),
		EXCEL: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				className="icon csv"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
				/>
			</svg>

			// <svg
			// 	width="25"
			// 	height="38"
			// 	viewBox="0 0 25 38"
			// 	fill="none"
			// 	xmlns="http://www.w3.org/2000/svg"
			// >
			// 	<g clipPath="url(#clip0_382_6255)">
			// 		<path
			// 			d="M24.5125 13.6453V33.1417C24.5125 34.2835 24.1252 35.3785 23.4356 36.1859C22.7461 36.9933 21.8108 37.4469 20.8357 37.4469H3.67688C2.70171 37.4469 1.76648 36.9933 1.07693 36.1859C0.387385 35.3785 0 34.2835 0 33.1417V4.44018C0 3.29837 0.387385 2.20332 1.07693 1.39593C1.76648 0.588545 2.70171 0.13496 3.67688 0.13496H12.6393C13.2892 0.135075 12.5144 0.437366 12.974 0.975375L23.7948 13.6453C24.2543 14.1834 24.5124 12.8843 24.5125 13.6453Z"
			// 			fill="#219653"
			// 			stroke="#219653"
			// 			strokeWidth="2"
			// 			strokeLinejoin="round"
			// 		/>
			// 		<path
			// 			d="M13.0223 0.13496C13.0223 4.24338 13.0223 10.6552 13.0223 10.6552C13.0223 11.3993 13.2771 12.1128 13.7308 12.639C14.1844 13.1651 14.7997 13.4606 15.4413 13.4606H24.5125"
			// 			fill="#6FCF97"
			// 		/>
			// 		<path
			// 			d="M13.0223 0.13496C13.0223 4.24338 13.0223 10.6552 13.0223 10.6552C13.0223 11.3993 13.2771 12.1128 13.7308 12.639C14.1844 13.1651 14.7997 13.4606 15.4413 13.4606H24.5125L13.0223 0.13496Z"
			// 			stroke="#6FCF97"
			// 			strokeWidth="2"
			// 			strokeLinecap="round"
			// 			strokeLinejoin="round"
			// 		/>
			// 		<path
			// 			d="M15.6391 34.4036L14.1291 32.0536L12.7591 34.4036H11.1791L13.3791 30.8836L11.1491 27.4236H12.7591L14.2691 29.7636L15.6291 27.4236H17.2091L15.0191 30.9336L17.2491 34.4036H15.6391ZM19.7146 33.2936H22.0146V34.4036H18.3146V27.4236H19.7146V33.2936ZM19.2207 49.4736C18.734 49.4736 18.294 49.3903 17.9007 49.2236C17.514 49.057 17.2074 48.817 16.9807 48.5036C16.754 48.1903 16.6374 47.8203 16.6307 47.3936H18.1307C18.1507 47.6803 18.2507 47.907 18.4307 48.0736C18.6174 48.2403 18.8707 48.3236 19.1907 48.3236C19.5174 48.3236 19.774 48.247 19.9607 48.0936C20.1474 47.9336 20.2407 47.727 20.2407 47.4736C20.2407 47.267 20.1774 47.097 20.0507 46.9636C19.924 46.8303 19.764 46.727 19.5707 46.6536C19.384 46.5736 19.124 46.487 18.7907 46.3936C18.3374 46.2603 17.9674 46.1303 17.6807 46.0036C17.4007 45.8703 17.1574 45.6736 16.9507 45.4136C16.7507 45.147 16.6507 44.7936 16.6507 44.3536C16.6507 43.9403 16.754 43.5803 16.9607 43.2736C17.1674 42.967 17.4574 42.7336 17.8307 42.5736C18.204 42.407 18.6307 42.3236 19.1107 42.3236C19.8307 42.3236 20.414 42.5003 20.8607 42.8536C21.314 43.2003 21.564 43.687 21.6107 44.3136H20.0707C20.0574 44.0736 19.954 43.877 19.7607 43.7236C19.574 43.5636 19.324 43.4836 19.0107 43.4836C18.7374 43.4836 18.5174 43.5536 18.3507 43.6936C18.1907 43.8336 18.1107 44.037 18.1107 44.3036C18.1107 44.4903 18.1707 44.647 18.2907 44.7736C18.4174 44.8936 18.5707 44.9936 18.7507 45.0736C18.9374 45.147 19.1974 45.2336 19.5307 45.3336C19.984 45.467 20.354 45.6003 20.6407 45.7336C20.9274 45.867 21.174 46.067 21.3807 46.3336C21.5874 46.6003 21.6907 46.9503 21.6907 47.3836C21.6907 47.757 21.594 48.1036 21.4007 48.4236C21.2074 48.7436 20.924 49.0003 20.5507 49.1936C20.1774 49.3803 19.734 49.4736 19.2207 49.4736Z"
			// 			fill="#F2F2F2"
			// 		/>
			// 	</g>
			// 	<defs>
			// 		<clipPath id="clip0_382_6255">
			// 			<rect
			// 				width="24.5125"
			// 				height="37.3119"
			// 				fill="white"
			// 				transform="translate(0 0.13496)"
			// 			/>
			// 		</clipPath>
			// 	</defs>
			// </svg>
		),
		DEFAULT: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				className="icon default"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
				/>
			</svg>
		),
	};

	return (
		<div className="single-attachment">
			<div className="attachment-icon">{icons[reference.file_type]}</div>
			<div className="attachment-name">
				<span className="title">{reference.file_name}</span>
				<span className="uploader">{reference.uploaded_by}</span>
			</div>
			<div className="attachment-size">{reference.file_size}</div>
			<DownloadFile
				url={reference.file_url}
				filename={reference.file_name}
			/>
		</div>
	);
};

const DownloadFile = ({ url, filename }: { url: string; filename: string }) => {
	const downloadFile = async () => {
		const response = await fetch(url);
		const blob = await response.blob();
		const blobUrl = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = blobUrl;
		a.download = filename;
		a.click();
	};

	return (
		<div className="attachment-download">
			<button onClick={downloadFile}>Download</button>
		</div>
	);
};
