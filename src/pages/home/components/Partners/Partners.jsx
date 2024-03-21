import "./Partners.scss";
import partner from '../../../../../public/partner.png';
import auto from '../../../../../public/auto.png';
import React, { useRef } from 'react';
import Team from './Team';

import { CustomSlick } from '../../../../shared/components/CustomSlick'

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
  const sliderRef = useRef()
  return (
    <section className="our-teams">
      <div className="container">
        <div class="airdrop-info-para">
          <h2 class="h2 text-center">Partners</h2>
        </div>
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

      </div>
    </section>
  );
};

export default Partners;
