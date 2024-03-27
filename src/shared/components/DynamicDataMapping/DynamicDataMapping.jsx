import React, { useEffect, useState } from 'react';
//styles
import './style.scss';
import SafeHTML from '../SanitizeHtml';
import { ICONS } from '../../../assets';

const DynamicDataMapping = ({ pageData = {} }) => {
    return (
        <>
            <div className="static_banner">
                <div className="container">
                    <div className={`inner-Banse `}>
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <div className="banner_summary">
                                    <h1 className="h2"><SafeHTML html={pageData?.title}/></h1>
                                    <p ><SafeHTML html={pageData?.header}/></p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="banner_pic">
                                    <img src={ICONS.PremiumTokenBg} alt="Mr Cashback" width={953} height={725} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="static_pages static-bg pt-120">
                <div className="container">
                    <div className="static_wrapper">
                        <div className="static_wrapper_column">
                            <div className="title-Betse">
                                <div className="d-flex justify-content-between flex-column my-2 align-items-center">
                                    <h2 className="h2 mb-0 text-capitalize"><SafeHTML html={pageData?.moreInformationTitle}/></h2>
                                </div>
                            </div>
                            < div className="static_wrapper_in">
                                {pageData?.moreInformation?.map((item, index) => {
                                    return (
                                        <div className="static_card">
                                            <div
                                                key={index}
                                                className="static_card_content"
                                            ><SafeHTML html={item?.section}/></div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DynamicDataMapping;
