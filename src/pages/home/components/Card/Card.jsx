import { useMemo } from "react";
import "./Card.scss";
import lambo from '../../../../../public/lambo.png';

const Card = ({ car, propGap, propDebugCommit, propWidth }) => {
  const card1Style = useMemo(() => {
    return {
      gap: propGap,
      debugCommit: propDebugCommit,
    };
  }, [propGap, propDebugCommit]);

  const carIconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="slider-main">
    <div className="premium-slider-col" >
      <img
        className=""
        loading="lazy"
        alt=""
        src={lambo}
        style={carIconStyle}
      />
       </div>
      <div className="slider-text">
          <h3>Lamborghini Urus</h3>
      </div>
     
    </div>
  );
};

export default Card;
