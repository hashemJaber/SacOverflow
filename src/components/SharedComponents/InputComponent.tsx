import { useState } from 'react';

// CSS imports
import './InputComponent.css';

interface InputComponentProps {
	label: string;
	labelText: string;
	type: string;
	id: string;
	pattern?: string;
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required: boolean;
	className?: string;
}

function InputComponent({
	label,
	labelText,
	type,
	id,
	pattern,
	placeholder,
	value,
	onChange,
	required,
	className,
}: InputComponentProps) {
	const [field, setField] = useState<string>('');

	return (
		<div>
			<label
				htmlFor={label}
				className="input-labels"
			>
				{labelText}
			</label>

			<input
				type={type}
				id={id}
				className={`input-forms ${className}`}
				pattern={pattern}
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e)}
				required={required}
			/>
		</div>
	);
}

export default InputComponent;
