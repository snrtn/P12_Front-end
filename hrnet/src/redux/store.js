import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './slice/employeesSlice';

export const store = configureStore({
	reducer: {
		employee: employeeReducer,
	},
});
