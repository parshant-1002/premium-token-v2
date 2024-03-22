import "./Partners.scss";
import partner from '../../../../../public/partner.png';
import auto from '../../../../../public/auto.png';
import React, { useRef } from 'react';
import Team from './Team';
import { CustomSlick } from '../../../../shared/components/CustomSlick'
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { RenderIconWithHover } from "../../../../shared/components/RenderIconWithHover";
import { addBaseUrlToUrls } from "../../../../shared/utilities";

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

const Partners = ({content = {}}) => {
  const{title, personData} = content
  console.log(content,"content<><><><><")
  const responsiveConfig = [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 10000000,
      settings: "unslick"
    }
  ]

  const renderPartner = (data = {})=>{
    const{name, position, companyLogo} = data
    return <div className="partner-slider">
      <div className="partner-column">
        <div className="partner-image">
          <div className="overlay-logo">
            <RenderIconWithHover iconUrl={addBaseUrlToUrls(companyLogo)}/>
          </div>
        </div>
        <h3 className="text-center"><SafeHTML html={name}/></h3>
        <p><SafeHTML html={position}/></p>
      </div>
    </div>
  }
  return (

    <section className="our-teams position-relative">
      <div className="container">
        <div className="heading_title text-left">
          <h2 className="h2 common_title d-inline-block">
            <SafeHTML html={title}/>
          </h2>

        </div>
        <div className="our_team-slider mt-5">
          <CustomSlick responsive={responsiveConfig}>
            {personData?.map((item) =>
              renderPartner(item)
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
