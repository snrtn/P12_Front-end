import { createSlice } from '@reduxjs/toolkit';

export const employeesSlice = createSlice({
	name: 'employees',
	initialState: {
		list: [],
		error: null,
	},
	reducers: {
		addEmployee: (state, action) => {
			state.list.push(action.payload);
		},
		removeEmployee: (state, action) => {
			state.list = state.list.filter((employee) => employee.id !== action.payload);
		},
		addEmployeeFailure: (state, action) => {
			state.error = action.payload;
		},
	},
});

export const { addEmployee, removeEmployee, addEmployeeFailure } = employeesSlice.actions;
export default employeesSlice.reducer;
