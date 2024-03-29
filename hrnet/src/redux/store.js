import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './slice/employeesSlice'; // 경로는 실제 구조에 맞게 조정

export const store = configureStore({
	reducer: {
		employees: employeesReducer,
	},
});
