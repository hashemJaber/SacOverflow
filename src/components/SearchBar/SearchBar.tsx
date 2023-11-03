'use client';

import { useState } from 'react';
import InputComponent from '@/components/SharedComponents/InputComponent';

function SearchBar() {
    const [selectpropertyManager, setSelectPropertyManager] = useState('');

    return (
        <form action="" method="post" id="login-form">
            <InputComponent
                label="email"
                labelText=""
                type="propertySelect"
                id="propertySelect"
                pattern="^(?=.{3,50}$)([a-zA-Z0-9_\.]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}|[a-zA-Z][a-zA-Z0-9_\.]{2,19})$"
                placeholder="Select Property Manager..."
                value={selectpropertyManager}
                onChange={(e) => setSelectPropertyManager(e.target.value)}
                required={true}
            />
        </form>
    );
}

export default SearchBar;