import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWinners } from '../../../../store/actions/contentManagement';
import { STATUS } from '../../../../shared/constants';
import { NUMBER_OF_ROWS_IN_PAGE, WINNER_HEADINGS } from './helpers/constants';
import { CustomSlick } from '../../../../shared/components/CustomSlick';
import { addBaseUrlToUrls } from '../../../../shared/utilities';
import { ICONS } from '../../../../assets';
import { transformRow } from './helpers/utils';
import SafeHTML from '../../../../shared/components/SanitizeHtml';

const WinnerTable = ({ socket, prize, content }) => {
  const [skip, setSkip] = useState(0);
  const [totalCount, setTotalCount] = useState(null);
  const [tableData, setTableData] = useState([]);
  const limitRef = useRef(NUMBER_OF_ROWS_IN_PAGE * 2);
  const dispatch = useDispatch();
  useEffect(() => {
    const payload = {
      skip,
      limit: limitRef.current,
    };
    dispatch(
      getWinners(payload, (data, responseType) => {
        if (responseType === STATUS.SUCCESS) {
          if (data?.data?.length) {
            const firstPageData = data?.data?.slice(0, NUMBER_OF_ROWS_IN_PAGE);
            const secondPageData = data?.data?.slice(NUMBER_OF_ROWS_IN_PAGE);
            const dataToAppend = [firstPageData];
            if (secondPageData?.length) {
              dataToAppend.push(secondPageData);
            }
            setTableData((prev) => [...prev, ...dataToAppend]);
            setTotalCount(data.totalCount);
            setSkip(skip + NUMBER_OF_ROWS_IN_PAGE * 2);
            limitRef.current = NUMBER_OF_ROWS_IN_PAGE;
          }
        }
      })
    );
  }, []);

  function getWinnersData(skip) {
    const payload = {
      skip,
      limit: limitRef.current,
    };
    dispatch(
      getWinners(payload, (data, responseType) => {
        if (responseType === STATUS.SUCCESS) {
          if (data?.data?.length) {
            setTableData((prev) => [...prev, data?.data]);
            setTotalCount(data.totalCount);
          }
        }
      })
    );
  }

  useEffect(() => {
    if (socket) {
      socket.on('latestWinner', (data) => {
        if (data) {
          setTableData((prevPages) => {
            const firstPage = [data?.data, ...prevPages[0]];
            let updatedPages = [firstPage.slice(0, NUMBER_OF_ROWS_IN_PAGE)];
            let remainingRows = firstPage.slice(NUMBER_OF_ROWS_IN_PAGE);
            for (let i = 1; i < prevPages.length; i++) {
              const page = [...remainingRows, ...prevPages[i]];
              updatedPages.push(page.slice(0, NUMBER_OF_ROWS_IN_PAGE));
              remainingRows = page.slice(NUMBER_OF_ROWS_IN_PAGE);
            }
            if (remainingRows.length > 0) {
              updatedPages.push(remainingRows);
            }

            return updatedPages;
          });
          setTotalCount(totalCount + 1);
        }
      });
    }
  }, [socket]);

  const handleNextClick = () => {
    if (totalCount === null || totalCount > skip) {
      getWinnersData(skip);
      setSkip((prev) => prev + NUMBER_OF_ROWS_IN_PAGE);
    }
  };
  const renderTableRow = (row = {}, index) => {
    const reformedRow = transformRow(row, true);
    const getImageUrl = (prizeType) => {
      return addBaseUrlToUrls(
        prize?.find((item) => item.type == prizeType)?.imageUrl
      );
    };
    return (
      <tr key={`row-${index}`}>
        {WINNER_HEADINGS?.map((heading, index) => {
          if (heading.apiKey === 'prizetype') {
            return (
              <td
                key={`${heading.label}-${index}`}
                data-label={heading.label}
                prizeType={reformedRow[heading.apiKey]}
              >
                <div className="td_img">
                  <img src={getImageUrl(reformedRow[heading.apiKey])} />
                </div>
              </td>
            );
          }
          return (
            <td key={`${heading.label}-${index}`} data-label={heading.label}>
              {reformedRow[heading.apiKey]}
            </td>
          );
        })}
      </tr>
    );
  };

  const responsiveConfig = [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
      },
    },
  ];
  return tableData?.length ? (
    <CustomSlick
      slidesToShow={1}
      handleNextClick={handleNextClick}
      responsive={responsiveConfig}
    >
      {tableData?.map((pageData, index) => (
        <table key={`slick-${index}`} className="table table-borderless">
          <thead>
            <tr>
              {WINNER_HEADINGS.map((heading) => {
                return (
                  <th scope="col" key={heading.label}>
                    {heading.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {pageData?.map((item, index) => {
              return renderTableRow(item, index);
            })}
          </tbody>
        </table>
      ))}
    </CustomSlick>
  ) : (
    <div className="d-flex justify-content-center flex-md-row flex-column align-items-center no-data-found">
      <figure className="mb-0">
        <img
          src={content?.noWinnerImageUrl}
          width={302}
          height={202}
          alt="No Data"
        />
      </figure>
      <p>
        <SafeHTML html={content?.noWinnerText} />
      </p>
    </div>
  );
};

export default WinnerTable;
