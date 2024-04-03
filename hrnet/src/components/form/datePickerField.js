import DateTimePicker from '../common/dateTimePicker';

const DatePickerField = ({ id, label, selected, onChange, error }) => {
	return (
		<div className='form-group'>
			<label htmlFor={id} className='form-label'>
				{label}
			</label>
			<div>
				<DateTimePicker selected={selected} onChange={onChange} />
				{error && <div className='error-message'>{error}</div>}
			</div>
		</div>
	);
};

export default DatePickerField;
