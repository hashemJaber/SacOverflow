'use client';

import { useState } from 'react';
import { Listbox } from '@headlessui/react';

const languages = [
	{ id: 1, name: 'English', unavailable: false },
	{ id: 2, name: 'Vietnamese', unavailable: false },
	{ id: 3, name: 'Spanish', unavailable: false },
];

function Dropdown() {
	const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

	return (
		<Listbox
			value={selectedLanguage}
			onChange={setSelectedLanguage}
		>
			<Listbox.Button className="flex flex-row gap-2 items-center">
				{selectedLanguage.name}
				<svg
					width="7"
					height="5"
					viewBox="0 0 7 5"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.72115 4.04033L0.718734 2.03791C0.474849 1.79403 0.420425 1.51497 0.55546 1.20075C0.690495 0.886521 0.931042 0.729151 1.2771 0.728638H5.24343C5.59 0.728638 5.83081 0.886007 5.96584 1.20075C6.10088 1.51549 6.0462 1.79454 5.8018 2.03791L3.79938 4.04033C3.72236 4.11735 3.63893 4.17511 3.54908 4.21362C3.45922 4.25213 3.36295 4.27138 3.26027 4.27138C3.15758 4.27138 3.06131 4.25213 2.97146 4.21362C2.8816 4.17511 2.79817 4.11735 2.72115 4.04033Z"
						fill="black"
						fillOpacity="0.87"
					/>
				</svg>
			</Listbox.Button>
			<Listbox.Options>
				{languages.map(language => (
					<Listbox.Option
						key={language.id}
						value={language}
						disabled={language.unavailable}
					>
						{language.name}
					</Listbox.Option>
				))}
			</Listbox.Options>
		</Listbox>
	);
}

export default Dropdown;
