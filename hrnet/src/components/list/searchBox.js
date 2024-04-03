const SearchBox = ({ pageSize, setPageSize, globalFilter, setGlobalFilter }) => {
	return (
		<div className='controls'>
			<div className='entries-select'>
				Show{' '}
				<select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
					{[10, 20, 30, 40, 50].map((size) => (
						<option key={size} value={size}>
							{size}
						</option>
					))}
				</select>{' '}
				entries
			</div>
			<div className='search-box'>
				Search:{' '}
				<input
					type='text'
					value={globalFilter || ''}
					onChange={(e) => setGlobalFilter(e.target.value)}
					placeholder='Search...'
				/>
			</div>
		</div>
	);
};

export default SearchBox;
