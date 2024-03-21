import "./Partners.scss";
import partner from '../../../../../public/partner.png';
import auto from '../../../../../public/auto.png';
import React, { useRef } from 'react';
import Team from './Team';
import { CustomSlick } from '../../../../shared/components/CustomSlick'
import { ICONS } from "../../../../assets";

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
  },
  {
    maskGroup: '/mask-group-5@2x.png',
    image39: '/image-39@2x.png',
    name: 'Mike Stoneberg',
    position: 'CEO & Product Manager',
  },
  // Add more objects for additional cards
];

const Partners = () => {
  const responsiveConfig = [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3.2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    }
  ]
  return (

    <section className="our-teams position-relative">
      <div className="container">
        <div className="heading_title text-left">
          <h2 className="h2 common_title d-inline-block">
            Partners
          </h2>

        </div>
        <div className="our_team-slider mt-5">
          <CustomSlick slidesToShow={5.2} responsive={responsiveConfig}>
            {cardDetails?.map((item) =>
              <div className="partner-slider">
                <div className="partner-column">
                  <div className="partner-image">
                    <img src={partner} />
                    <div className="overlay-logo">
                      <img src={auto} />
                    </div>
                  </div>
                  <h3 className="text-center">Mike Stoneberg</h3>
                  <p>CEO & Product Manager</p>
                </div>
              </div>
            )}
          </CustomSlick>
        </div>
      </div>
      <div className="teamSliderBg">
        <img width={542} height={700}
          className="img-fluid"
          alt="desktop-banner"
          src={ICONS.PartnersSliderBg}
        />
      </div>
    </section>


  );
};

export default Partners;
