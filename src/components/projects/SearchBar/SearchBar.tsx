'use client';

import { useState } from 'react';
import InputComponent from '@/components/SharedComponents/InputComponent';

function SearchBar() {
	const [selectpropertyManager, setSelectPropertyManager] = useState('');

	return (
		<InputComponent
			label="propertySelect"
			labelText=""
			type="text"
			id="propertySelect"
			pattern=""
			placeholder="Select for a Project Here"
			value={selectpropertyManager}
			onChange={e => setSelectPropertyManager(e.target.value)}
			required={false}
		/>
	);
}

export default SearchBar;
