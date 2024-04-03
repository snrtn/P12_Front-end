const Pagination = ({
	canPreviousPage,
	previousPage,
	canNextPage,
	nextPage,
	pageIndex,
	pageOptions,
	pageSize,
	dataLength,
}) => {
	const startRecord = pageIndex * pageSize + 1;
	const endRecord = startRecord + pageSize - 1;
	return (
		<div className='pagination'>
			<div>
				Showing {startRecord} to {endRecord > dataLength ? dataLength : endRecord} of {dataLength} entries
			</div>
			<div>
				<button onClick={() => previousPage()} disabled={!canPreviousPage}>
					{'<'}
				</button>{' '}
				<span>
					Page{' '}
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>
				</span>{' '}
				<button onClick={() => nextPage()} disabled={!canNextPage}>
					{'>'}
				</button>
			</div>
		</div>
	);
};
export default Pagination;
