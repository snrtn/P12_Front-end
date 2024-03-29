import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DateTimePicker from '../common/dateTimePicker';
import Select from 'react-select';

// data
import { states } from '../../utils/states';
import { departments } from '../../utils/departments';

// styles
import './employeeForm.css';
import 'react-datepicker/dist/react-datepicker.css';

const EmployeeForm = () => {
	const [employeeData, setEmployeeData] = useState({
		firstName: '',
		lastName: '',
		dateOfBirth: new Date(),
		startDate: new Date(),
		department: '',
		street: '',
		city: '',
		state: '',
		zipCode: '',
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setEmployeeData({ ...employeeData, [name]: value });
	};

	const handleDateChange = (name, date) => {
		setEmployeeData({ ...employeeData, [name]: date });
	};

	const handleSelectChange = (name, selectedOption) => {
		setEmployeeData({ ...employeeData, [name]: selectedOption.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setEmployeeData({
			firstName: '',
			lastName: '',
			dateOfBirth: new Date(),
			startDate: new Date(),
			department: '',
			street: '',
			city: '',
			state: '',
			zipCode: '',
		});
	};

	return (
		<div className='form-container'>
			<form onSubmit={handleSubmit} className='employee-form'>
				<div className='form-header'>
					<h1>HRnet</h1>
					<Link>View Current Employees</Link>
					<h2>Create Employee</h2>
				</div>
				<div className='form-group'>
					<label htmlFor='firstName' className='form-label'>
						First Name
					</label>
					<input
						id='firstName'
						name='firstName'
						type='text'
						value={employeeData.firstName}
						onChange={handleInputChange}
						className='form-input'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='lastName' className='form-label'>
						Last Name
					</label>
					<input
						id='lastName'
						name='lastName'
						type='text'
						value={employeeData.lastName}
						onChange={handleInputChange}
						className='form-input'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='dateOfBirth' className='form-label'>
						Date of Birth
					</label>
					<div>
						<DateTimePicker
							selected={employeeData.dateOfBirth}
							onChange={(date) => handleDateChange('dateOfBirth', date)}
						/>
					</div>
				</div>

				<div className='form-group'>
					<label htmlFor='startDate' className='form-label'>
						Start Date
					</label>
					<div>
						<DateTimePicker
							selected={employeeData.startDate}
							onChange={(date) => handleDateChange('startDate', date)}
						/>
					</div>
				</div>
				<div className='form-group address-group'>
					<p className='form-section-title'>Address</p>
					<div className='form-group'>
						<label htmlFor='street' className='form-label'>
							Street
						</label>
						<input
							id='street'
							name='street'
							type='text'
							value={employeeData.street}
							onChange={handleInputChange}
							className='form-input'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='city' className='form-label'>
							City
						</label>
						<input
							id='city'
							name='city'
							type='text'
							value={employeeData.city}
							onChange={handleInputChange}
							className='form-input'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='state' className='form-label'>
							State
						</label>
						<Select
							id='state'
							options={states}
							onChange={(option) => handleSelectChange('state', option)}
							className='form-select'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='zipCode' className='form-label'>
							Zip Code
						</label>
						<input
							id='zipCode'
							name='zipCode'
							type='text'
							value={employeeData.zipCode}
							onChange={handleInputChange}
							className='form-input'
						/>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='department' className='form-label'>
						Department
					</label>
					<Select
						id='department'
						options={departments}
						onChange={(option) => handleSelectChange('department', option)}
						className='form-select'
					/>
				</div>
				<div className='form-group btn'>
					<button type='submit' className='form-button'>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default EmployeeForm;
