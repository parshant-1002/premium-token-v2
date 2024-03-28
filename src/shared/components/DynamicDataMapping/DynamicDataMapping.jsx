import React, { useEffect, useState } from 'react';
//styles
import './style.scss';
import SafeHTML from '../SanitizeHtml';
import { ICONS } from '../../../assets';

const DynamicDataMapping = ({ pageData = {} }) => {
    return (
        <>
            <div className="static_banner position-relative">
                <div className="container">
                    <div className={`inner-Banse`}>
                        <div className="row align-items-center">
                            <div className="col-md-7">
                                <div className="banner_summary">
                                    <h1 className="h2"><SafeHTML html={pageData?.title}/></h1>
                                    <p><SafeHTML html={pageData?.header}/></p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="banner_pic">
                                    <img src="https://d25oiye2xrq4w3.cloudfront.net/upload_1711569755930.png" alt="Mr Cashback" width={500} height={500} className="img-fluid" />
                                    {/* <img src={ICONS.PremiumTokenBg} alt="Mr Cashback" width={500} height={500} className="img-fluid" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="video_banner_bg">
                    <img width={1300} height={978}
                        className="large-video-banner d-md-block d-none"
                        alt="desktop-banner"
                        src={ICONS.VideoBanner}
                    />
                    <img width={510} height={385}
                        className="mobile-video-banner d-block d-md-none"
                        alt="Mobile-banner"
                        src={ICONS.Mobile_banner}
                    />
                </div>
            </div>

            <div className="static_pages pt-120">
                <div className="container">

                    <div className="heading_title text-center mb-4">
                        <h2 className="h2 mb-0 text-capitalize"><SafeHTML html={pageData?.moreInformationTitle}/></h2>
                    </div>

                    <div className="static_wrapper">
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
        </>
    );
};

export default DynamicDataMapping;
