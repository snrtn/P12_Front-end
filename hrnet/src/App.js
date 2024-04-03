import React from 'react';
import EmployeeForm from './views/employeeFormView';
import EmployeeList from './views/employeeListView';
import NotFoundPage from './components/common/notFoundPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<EmployeeForm />} />
				<Route path='/employees' element={<EmployeeList />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
}

export default App;
