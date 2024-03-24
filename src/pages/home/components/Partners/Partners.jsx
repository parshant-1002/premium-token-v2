import partner from '../../../../../public/mike_logo.png';
import React, { useRef } from 'react';
import Team from './Team';
import { CustomSlick } from '../../../../shared/components/CustomSlick'
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { RenderIconWithHover } from "../../../../shared/components/RenderIconWithHover";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import "./Partners.scss";

const Partners = ({content = {}}) => {
  const { title, partnersData } = content
  const responsiveConfig = [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 120000000,
      settings: "unslick"
    }
  ]

  const renderPartner = (data = {})=>{
    const{name, position, companyLogo} = data
    return <div className="col-md-4">
        <div className="partner-column">
          <div className="partner-image">
            <img src={addBaseUrlToUrls(companyLogo)} width={249} height={59} alt="Partner Logo" />
          </div>
          <div className="text-center text-captialize partner_info">
            <h3 className="h6"><SafeHTML html={name} /></h3>
            <span><SafeHTML html={position} /></span>
          </div>
        </div>
      </div>
  }
  return (

    <section className="our-teams position-relative">
      <div className="container">

        <div className="heading_title text-center">
            <h2 className="h2"><SafeHTML html={title} /></h2>
          <p>Crypto ipsum bitcoin ethereum dogecoin litecoin. Klaytn golem terraUSD kava amp maker velas. Velas serum harmony XRP algorand aave klaytn.</p>
        </div>
        
        <div className="our_team-slider">
          <CustomSlick slidesToShow={1} responsive={responsiveConfig}>
            {partnersData?.map((item) =>
              renderPartner(item)
            )}
          </CustomSlick>
        </div>
      </div>
      <div className="teamSliderBg">
        <img width={542} height={900}
          className="img-fluid d-none d-lg-block"
          alt="desktop-banner"
          src={ICONS.PartnersSliderBg}
        />
      </div>
    </section>


  );
};

export default Partners;
