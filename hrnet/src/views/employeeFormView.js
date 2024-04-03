import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'simple-library-modal-ocr-snrtn';
import { states } from '../utils/states';
import { departments } from '../utils/departments';
import './employeeFormView.styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import { addEmployee } from '../redux/slice/employeesSlice';
import InputField from '../components/form/inputField';
import SelectField from '../components/form/selectField';
import DatePickerField from '../components/form/datePickerField';
import { format, parse } from 'date-fns';

const EmployeeForm = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		dateOfBirth: '',
		startDate: '',
		department: '',
		street: '',
		city: '',
		state: '',
		zipCode: '',
	});
	const [errors, setErrors] = useState({});
	const [isModalOpen, setIsModalOpen] = useState(false);

	const validateForm = () => {
		const newErrors = {};
		if (!formData.firstName) newErrors.firstName = 'First Name is required';
		if (!formData.lastName) newErrors.lastName = 'Last Name is required';
		if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
		if (!formData.startDate) newErrors.startDate = 'Start Date is required';
		if (!formData.street) newErrors.street = 'Street is required';
		if (!formData.city) newErrors.city = 'City is required';
		if (!formData.state) newErrors.state = 'State is required';
		if (!formData.zipCode) newErrors.zipCode = 'Zip Code is required';
		if (!formData.zipCode || formData.zipCode < 10000 || formData.zipCode > 99999) {
			newErrors.zipCode = 'Zip Code must be between 10000 and 99999';
		}
		if (!formData.department) newErrors.department = 'Department is required';

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleDateChange = (name, date) => {
		const formattedDate = format(date, 'MM/dd/yyyy');
		setFormData({ ...formData, [name]: formattedDate });
	};

	const handleSelectChange = (name, selectedOption) => {
		setFormData({ ...formData, [name]: selectedOption.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!validateForm()) {
			return;
		}
		dispatch(addEmployee(formData));
		setIsModalOpen(true);
		setFormData({
			firstName: '',
			lastName: '',
			dateOfBirth: '',
			startDate: '',
			department: '',
			street: '',
			city: '',
			state: '',
			zipCode: '',
		});
	};

	const closeModal = () => setIsModalOpen(false);

	return (
		<div className='form-container'>
			<form onSubmit={handleSubmit} className='employee-form'>
				<div className='form-header'>
					<h1>HRnet</h1>
					<Link to='/employees'>View Current Employees</Link>
					<h2>Create Employee</h2>
				</div>
				<InputField
					id='firstName'
					label='First Name'
					value={formData.firstName}
					onChange={handleInputChange}
					error={errors.firstName}
				/>
				<InputField
					id='lastName'
					label='Last Name'
					value={formData.lastName}
					onChange={handleInputChange}
					error={errors.lastName}
				/>
				<DatePickerField
					id='dateOfBirth'
					label='Date of Birth'
					selected={formData.dateOfBirth ? parse(formData.dateOfBirth, 'MM/dd/yyyy', new Date()) : null}
					onChange={(date) => handleDateChange('dateOfBirth', date)}
					error={errors.dateOfBirth}
				/>
				<DatePickerField
					id='startDate'
					label='Start Date'
					selected={formData.startDate ? parse(formData.startDate, 'MM/dd/yyyy', new Date()) : null}
					onChange={(date) => handleDateChange('startDate', date)}
					error={errors.startDate}
				/>
				<div className='address-group'>
					<p className='form-section-title'>Address</p>
					<InputField
						id='street'
						label='Street'
						value={formData.street}
						onChange={handleInputChange}
						error={errors.street}
					/>
					<InputField id='city' label='City' value={formData.city} onChange={handleInputChange} error={errors.city} />
					<SelectField
						id='state'
						label='State'
						value={formData.state}
						options={states}
						onChange={(selectedOption) => handleSelectChange('state', selectedOption)}
						error={errors.state}
					/>
					<InputField
						id='zipCode'
						label='Zip Code'
						value={formData.zipCode}
						onChange={handleInputChange}
						error={errors.zipCode}
					/>
				</div>
				<SelectField
					id='department'
					label='Department'
					value={formData.department}
					options={departments}
					onChange={(selectedOption) => handleSelectChange('department', selectedOption)}
					error={errors.department}
				/>
				<div className='form-group btn'>
					<button type='submit' className='form-button'>
						Save
					</button>
				</div>
			</form>
			{isModalOpen && (
				<Modal isOpen={isModalOpen} onClose={closeModal}>
					<p>Employee Created!</p>
				</Modal>
			)}
		</div>
	);
};

export default EmployeeForm;
