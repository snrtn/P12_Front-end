import DateTimePicker from '../common/dateTimePicker';

const DatePickerField = ({ id, label, selected, onChange }) => {
	return (
		<div className='form-group'>
			<label htmlFor={id} className='form-label'>
				{label}
			</label>
			<div>
				<DateTimePicker selected={selected} onChange={onChange} />
			</div>
		</div>
	);
};

export default DatePickerField;
