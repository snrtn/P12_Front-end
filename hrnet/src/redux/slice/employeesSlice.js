import { createSlice } from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
	name: 'employee',
	initialState: {
		employeesList: JSON.parse(localStorage.getItem('employees')) || [],
	},
	reducers: {
		addEmployee: (state, action) => {
			state.employeesList.push(action.payload);
			localStorage.setItem('employees', JSON.stringify(state.employeesList));
		},
	},
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
