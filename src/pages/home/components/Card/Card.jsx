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
    <>
      <figure className="slider_thumb mb-0">
        <img
          className=""
          loading="lazy"
          alt=""
          src={lambo}
          style={carIconStyle}
        />
      </figure>
      <h4 className="h3">Lamborghini Urus</h4>      
    </>
  );
};

export default Card;
