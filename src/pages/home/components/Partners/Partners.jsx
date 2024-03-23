import partner from '../../../../../public/mike_logo.png';
import React, { useRef } from 'react';
import Team from './Team';
import { CustomSlick } from '../../../../shared/components/CustomSlick'
import { ICONS } from "../../../../assets";
import "./Partners.scss";

const cardDetails = [
  {
    maskGroup: '/mask-group-5@2x.png',
    image39: '/image-39@2x.png',
    name: 'Mike Stoneberg',
    position: 'CEO & Product Manager',
  },
  {
    maskGroup: '/mask-group-5@2x.png',
    image39: '/image-39@2x.png',
    name: 'Mike Stoneberg',
    position: 'CEO & Product Manager',
  },
  {
    maskGroup: '/mask-group-5@2x.png',
    image39: '/image-39@2x.png',
    name: 'Mike Stoneberg',
    position: 'CEO & Product Manager',
  },
  {
    maskGroup: '/mask-group-5@2x.png',
    image39: '/image-39@2x.png',
    name: 'Mike Stoneberg',
    position: 'CEO & Product Manager',
  },
  {
    maskGroup: '/mask-group-5@2x.png',
    image39: '/image-39@2x.png',
    name: 'Mike Stoneberg',
    position: 'CEO & Product Manager',
  },
  {
    maskGroup: '/mask-group-5@2x.png',
    image39: '/image-39@2x.png',
    name: 'Mike Stoneberg',
    position: 'CEO & Product Manager',
  }
  // Add more objects for additional cards
];

const Partners = () => {
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
  return (

    <section className="our-teams position-relative">
      <div className="container">

        <div className="heading_title text-center">
          <h2 className="h2">Partners</h2>
          <p>Crypto ipsum bitcoin ethereum dogecoin litecoin. Klaytn golem terraUSD kava amp maker velas. Velas serum harmony XRP algorand aave klaytn.</p>
        </div>

        <div className="our_team-slider">
          <CustomSlick slidesToShow={5.2} responsive={responsiveConfig}>
            {cardDetails?.map((item) =>
              <div className="col-md-4">
                <div className="partner-column">
                  <div className="partner-image">
                    <img src={partner} width={249} height={59} alt="Partner Logo" />
                  </div>
                  <div className="text-center text-captialize partner_info">
                    <h3 className="h6">Mike Stoneberg</h3>
                    <span>CEO & Product Manager</span>
                  </div>
                </div>
              </div>
            )}
          </CustomSlick>
        </div>
      </div>
      <div className="teamSliderBg">
        <img width={542} height={900}
          className="img-fluid d-md-block d-none"
          alt="desktop-banner"
          src={ICONS.PartnersSliderBg}
        />
      </div>
    </section>


  );
};

export default Partners;
