const InputField = ({ id, label, value, onChange, error }) => {
	return (
		<div className='form-group'>
			<label htmlFor={id} className='form-label'>
				{label}
			</label>
			<input
				id={id}
				name={id}
				type='text'
				value={value}
				onChange={onChange}
				className={`form-input ${error ? 'input-error' : ''}`}
			/>
			{error && <div className='error-message'>{error}</div>}
		</div>
	);
};

export default InputField;
