import React from 'react'
import DynamicDataMapping from '../../shared/components/DynamicDataMapping/DynamicDataMapping'
import { useSelector } from 'react-redux'
import { WithHeaderFooter } from '../../shared/components/layouts/hoc/withHeaderFooter'

const TermsAndConditions = () => {
    const content = useSelector((state) => state.contentManagementReducer.homePageContent)
  return (
    <WithHeaderFooter>
      <DynamicDataMapping pageData={content["termAndCondition"]} />
    </WithHeaderFooter>
  )
}

export default TermsAndConditions