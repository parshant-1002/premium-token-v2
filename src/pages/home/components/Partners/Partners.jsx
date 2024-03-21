import React, { useRef } from 'react';
import Team from './Team';
import styles from './Partners.module.css';
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
    <section className={styles.shapeTransformer}>
      <div className={styles.pathCombiner}>
        <h1 className={styles.title}>Partners</h1>
        <div className={styles.wrapperArrows}>
          <img className={styles.arrowsIcon} onClick={()=>{
            console.log(sliderRef,"sliderREf<><><><>")
          }} alt="" src="/arrows.svg" />
        </div>
      </div>
      <CustomSlick ref = {sliderRef}>
        {cardDetails.map((card, index) => (
          <div key={index} className={styles.cards}>
            <Team
              maskGroup={card.maskGroup}
              image39={card.image39}
              name={card.name}
              position={card.position}
            />
          </div>
        ))}
      </CustomSlick>
    </section>
  );
};

export default Partners;
