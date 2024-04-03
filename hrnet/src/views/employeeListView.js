/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';
import { Link } from 'react-router-dom';
import './employeeListView.styles.css';
import SearchBox from '../components/list/searchBox';
import Table from '../components/list/table';
import Pagination from '../components/list/pagination';
// import testEmployees from '../../utils/testEmployees';ㄴ

const EmployeeList = () => {
	const employees = useSelector((state) => state.employee.employeesList);
	// const [employees, setEmployees] = useState(testEmployees);

	const columns = useMemo(
		() => [
			{ Header: 'First Name', accessor: 'firstName' },
			{ Header: 'Last Name', accessor: 'lastName' },
			{ Header: 'Start Date', accessor: 'startDate' },
			{ Header: 'Department', accessor: 'department' },
			{ Header: 'Date of Birth', accessor: 'dateOfBirth' },
			{ Header: 'Street', accessor: 'street' },
			{ Header: 'City', accessor: 'city' },
			{ Header: 'State', accessor: 'state' },
			{ Header: 'Zip Code', accessor: 'zipCode' },
		],
		[],
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		setGlobalFilter,
		state: { globalFilter, pageIndex, pageSize },
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		nextPage,
		previousPage,
		setPageSize,
	} = useTable(
		{
			columns,
			data: employees,
			initialState: { pageIndex: 0, pageSize: 10 },
		},
		useGlobalFilter,
		useSortBy,
		usePagination,
	);

	return (
		<div className='employee-list-container'>
			<h1 className='title'>Current Employees</h1>
			<SearchBox
				pageSize={pageSize}
				setPageSize={setPageSize}
				globalFilter={globalFilter}
				setGlobalFilter={setGlobalFilter}
			/>
			<Table
				getTableProps={getTableProps}
				getTableBodyProps={getTableBodyProps}
				headerGroups={headerGroups}
				page={page}
				prepareRow={prepareRow}
			/>
			<Pagination
				canPreviousPage={canPreviousPage}
				previousPage={previousPage}
				canNextPage={canNextPage}
				nextPage={nextPage}
				pageIndex={pageIndex}
				pageOptions={pageOptions}
				pageSize={pageSize}
				dataLength={employees.length}
			/>
			<Link to='/' className='home-button'>
				Home
			</Link>
		</div>
	);
};

export default EmployeeList;
