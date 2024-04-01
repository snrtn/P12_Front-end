import React from 'react';
import EmployeeForm from './components/employee/employeeForm';
import EmployeeList from './components/employee/employeeList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<>
				<Routes>
					<Route path='/' element={<EmployeeForm />} />
					<Route path='/employees' element={<EmployeeList />} />
				</Routes>
			</>
		</Router>
	);
}

export default App;
