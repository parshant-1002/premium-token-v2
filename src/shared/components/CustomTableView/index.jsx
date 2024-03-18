// libs
import { useState, Fragment } from 'react';
import './style.scss';
import { FILTER_ORDER } from '../../constants';

const CustomTableView = ({
  columns = [],
  rows = [],
  currentPage = 0,
  pageSize = 10,
  noDataFound = '',
  quickEditRowId = '',
  isServerPagination = false,
  handleSortingClick = () => {},
  order,
  selectedFilter,
  isLoading = false,
}) => {
  const [selectedSortType, setSelectedSortType] = useState(
    FILTER_ORDER.ASCENDING
  );

  const rowsToBeRendered = isServerPagination
    ? rows
    : rows.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  return (
    <>
      <div
        className={`table-responsive`}
      >
        <table className="text-white custom-table">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  scope="col"
                  key={`${column.title}`}
                  width={column?.width || ''}
                  className={column?.sortable ? 'cursor-pointer' : ''}
                  onClick={() => {
                    if (!column?.sortable) return;
                    const sortKey = column.sortType;
                    const sortOrder =
                      selectedSortType === FILTER_ORDER.ASCENDING
                        ? FILTER_ORDER.DESCENDING
                        : FILTER_ORDER.ASCENDING;

                    handleSortingClick(sortOrder, sortKey);
                    setSelectedSortType(sortOrder);
                  }}
                >
                  {column.title}
                  {column?.sortable && (
                    <div className="sorting">
                      <span
                        className={`up_sort ${
                          order === FILTER_ORDER.ASCENDING &&
                          selectedFilter === column.sortType
                            ? 'activeOrder'
                            : ''
                        }`}
                        onClick={() => {
                          handleSortingClick(
                            FILTER_ORDER.ASCENDING,
                            column.sortType
                          );
                        }}
                      >
                        <img src={"images.iconUp"} width="16" alt="" />
                      </span>
                      <span
                        className={`down_sort ${
                          order === FILTER_ORDER.DESCENDING &&
                          selectedFilter === column.sortType
                            ? 'activeOrder'
                            : ''
                        }`}
                        onClick={() => {
                          handleSortingClick(
                            FILTER_ORDER.DESCENDING,
                            column.sortType
                          );
                        }}
                      >
                        <img src={"images.iconDown"} width="16" alt="" />
                      </span>
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={columns.length}>
                 <h1>{"Loading..."}</h1>
                </td>
              </tr>
            )}
            {!rows.length ? (
              <tr>
                <td colSpan="12" className="no-data">
                  <p className="no-media d-flex justify-content-center align-items-center">
                    {noDataFound}
                  </p>
                </td>
              </tr>
            ) : (
              rowsToBeRendered.map((row, index) =>
                quickEditRowId === row._id ? (
                  <tr key={row._id}>
                    <td colSpan="10">
                     <h1>"Edit"</h1>
                    </td>
                  </tr>
                ) : (
                  <tr
                    key={row._id}
                    className={`tr-item`}
                  >
                    {columns.map((column, idx) => (
                      <Fragment key={`${row._id}`}>
                        <td data-label={column.title}>
                            <button
                              className="btn btn-secondary btn34 rounded-circle accordin-btn"
                              onClick={()=>{}}
                            >
                              <img src={"images.iconDown"} alt="" width={12} />
                            </button>
                          {column.render
                            ? column.render(row)
                            : row[column.fieldName]}
                        </td>
                      </Fragment>
                    ))}
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomTableView;
