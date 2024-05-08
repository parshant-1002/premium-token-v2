//lib
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//components
import { getLanguageOptions, setLanguageId } from '../../../../store/actions/contentManagement'
import CustomSelect from '../../../../shared/components/form/Select/Select'

//constants
import { STATUS } from '../../../../shared/constants'
import { transformLanguageOptions } from './helpers/utils'
import LanguageOption from './components/LanguageOption'
import CustomSingleValue from './components/CustomSingleValue'
import './style.scss';

const MultiLanguageSelect = ({ getData = ()=>{}}) => {
    const [languageOptions, setLanguageOptions] = useState([])
    const [selectedLanguage, setSelectedLanguage] = useState({})
    const languageId = useSelector((store) => store.contentManagementReducer.languageId);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLanguageOptions((data, status) => {
            if (status === STATUS.SUCCESS) {
                const transformedData = transformLanguageOptions(data)
                const defaultOption = transformedData?.find((item) => item?.value === languageId)
                setSelectedLanguage(defaultOption)
                setLanguageOptions(transformedData)
            }
        }))
    }, [])
    const handleInputChange = (item) => {
        dispatch(setLanguageId(item?.value))
        setSelectedLanguage(item)
        // const payload = {
        //     languageId: item?.value
        // }
        // getData(payload)
    }

    return (
        languageOptions?.length ? <div className="lang_btn">
            <CustomSelect
                components={{ Option: LanguageOption, SingleValue: CustomSingleValue}}
                // id={id}
                key={selectedLanguage?.value}
                value={selectedLanguage}
                options={languageOptions}
                onChange={(item) => handleInputChange(item)}
                isSearchable = {false}
            />
        </div>: null
    )
}

export default MultiLanguageSelect