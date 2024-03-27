import React from 'react'
import DynamicDataMapping from '../../shared/components/DynamicDataMapping/DynamicDataMapping'
import { useSelector } from 'react-redux'

const PrivacyPolicy = () => {
    const content = useSelector((state) => state.contentManagementReducer.homePageContent)
    return (
        <DynamicDataMapping pageData={content?.privacyPolicy} />
    )
}

export default PrivacyPolicy