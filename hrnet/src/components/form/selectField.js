import React from 'react';
import Select from 'react-select';

const SelectField = ({ id, label, value, options, onChange, error }) => {
	const customStyles = {
		control: (provided, state) => ({
			...provided,
			borderColor: error ? '#ff0000' : provided.borderColor,
			'&:hover': { borderColor: error ? '#ff0000' : provided.borderColor },
		}),
	};

	return (
		<div className='form-group'>
			<label htmlFor={id} className='form-label'>
				{label}
			</label>
			<Select
				id={id}
				value={options.find((option) => option.value === value)}
				onChange={onChange}
				options={options}
				className='form-select'
				styles={customStyles}
			/>
			{error && <div className='error-message'>{error}</div>}
		</div>
	);
};

export default SelectField;
