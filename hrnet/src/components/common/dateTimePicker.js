/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import './dateTimePicker.css';
import { getYear, getMonth } from 'date-fns';

const range = (start, end) => {
	let years = [];
	for (let i = start; i <= end; i++) {
		years.push(i);
	}
	return years;
};

const DateTimePicker = ({ selected, onChange }) => {
	const [startDate, setStartDate] = useState(new Date(selected || Date.now()));
	const years = range(1924, getYear(new Date()) + 50, 1);
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	return (
		<DatePicker
			selected={selected ? new Date(selected) : null}
			onChange={(date) => {
				setStartDate(date);
				onChange(date);
			}}
			dateFormat='MM/dd/yyyy'
			renderCustomHeader={({
				date,
				changeYear,
				changeMonth,
				decreaseMonth,
				increaseMonth,
				prevMonthButtonDisabled,
				nextMonthButtonDisabled,
			}) => (
				<div
					style={{
						margin: 10,
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
						{'<'}
					</button>
					<select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)}>
						{years.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>

					<select
						value={months[getMonth(date)]}
						onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
					>
						{months.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>

					<button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
						{'>'}
					</button>
				</div>
			)}
		/>
	);
};

export default DateTimePicker;
