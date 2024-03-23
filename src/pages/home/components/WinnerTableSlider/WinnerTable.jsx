import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getWinners } from '../../../../store/actions/contentManagement'
import { STATUS } from '../../../../shared/constants'
import { NUMBER_OF_ROWS_IN_PAGE, WINNER_HEADINGS } from './helpers/constants'
import { CustomSlick } from '../../../../shared/components/CustomSlick'
import { shortenString } from '../../../../shared/constants/utils'

const WinnerTable = ({ socket }) => {
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

    }, [skip, totalCount])

    useEffect(() => {
        if (socket) {
            socket.on('latestWinner', (data) => {
                setTableData((prevPages) => {
                    const firstPage = [data?.data, ...prevPages[0]];
                    let updatedPages = [firstPage.slice(0, 4)];
                    let remainingRows = firstPage.slice(4);
                    for (let i = 1; i < prevPages.length; i++) {
                        const page = [...remainingRows, ...prevPages[i]];
                        updatedPages.push(page.slice(0, 4));
                        remainingRows = page.slice(4);
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
        if ((totalCount === null || totalCount > skip * 4)) {
            setSkip((prev) => prev + NUMBER_OF_ROWS_IN_PAGE)
        }
    }
    const renderTableRow = (row = {}) => {

        // heading.apiKey = "prizeType" ? <div className="td_img">
        //     <img src={row[heading["apiKey"]]} alt="premium" width={138} className="w-100" />
        // </div> : 
        row["walletAddress"] = shortenString(row["walletAddress"])
        return (
            <tr>
                {WINNER_HEADINGS?.map((heading) => {
                    return <td data-label={""}>{row[heading.apiKey]}</td>
                })}
            </tr>
        )
    }
    return (
        <CustomSlick slidesToShow={1} handleNextClick={handleNextClick}>
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