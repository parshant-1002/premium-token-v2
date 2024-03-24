import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getWinners } from '../../../../store/actions/contentManagement'
import { STATUS } from '../../../../shared/constants'
import { NUMBER_OF_ROWS_IN_PAGE, WINNER_HEADINGS } from './helpers/constants'
import { CustomSlick } from '../../../../shared/components/CustomSlick'
import { shortenString } from '../../../../shared/constants/utils'
import { transformRow } from './helpers/utils'
import { addBaseUrlToUrls } from '../../../../shared/utilities'

const WinnerTable = ({ socket, prize }) => {
    const [skip, setSkip] = useState(0)
    const [totalCount, setTotalCount] = useState(null)
    const [tableData, setTableData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        const payload = {
            skip,
            limit: NUMBER_OF_ROWS_IN_PAGE
        }
        dispatch(getWinners(payload, (data, responseType) => {
            if (responseType === STATUS.SUCCESS) {
                setTableData((prev) => ([...prev, data?.data]))
                setTotalCount(data.totalCount)
            }
        }))

    }, [skip])

    useEffect(() => {
        if (socket) {
            socket.on('latestWinner', (data) => {
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
                setTotalCount(data?.totalCount);
            });
        }
    }, [socket]);

    const handleNextClick = () => {
        if ((totalCount === null || totalCount > skip * NUMBER_OF_ROWS_IN_PAGE)) {
            setSkip((prev) => prev + NUMBER_OF_ROWS_IN_PAGE)
        }
    }
    const renderTableRow = (row = {}) => {
        const reformedRow = transformRow(row)
        const getImageUrl = (prizeType)=>{
            return addBaseUrlToUrls( prize?.find((item) => item.type == prizeType)?.imageUrl)
        }
        return (
            <tr>
                {WINNER_HEADINGS?.map((heading) => {
                    if(heading.apiKey === "prizetype"){
                        return <td data-label={heading.label} prizeType = {reformedRow[heading.apiKey]}>
                            <div className='td_img'>
                                <img src={getImageUrl(reformedRow[heading.apiKey])} />
                            </div>
                        </td>
                    }
                    return (
                        <td data-label={heading.label}>{reformedRow[heading.apiKey]}</td>
                    )
                })}
            </tr>
        )
    }

    const responsiveConfig = [    
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            dots: true
          }
        },
        {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              arrows: false,
              dots: true
            }
          },
      ]
    return (
        <CustomSlick slidesToShow={1} handleNextClick={handleNextClick} responsive = {responsiveConfig}>
            {tableData?.map((pageData, index) => (
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            {WINNER_HEADINGS.map((heading) => {
                                return <th scope="col">{heading.label}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pageData?.map((item, index) => {
                                return renderTableRow(item)
                            })
                        }
                    </tbody>
                </table>
            ))}

        </CustomSlick>
    )
}

export default WinnerTable