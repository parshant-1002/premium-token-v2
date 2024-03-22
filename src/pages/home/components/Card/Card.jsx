import { useMemo } from "react";
import "./Card.scss";
import lambo from '../../../../../public/lambo.png';
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import SafeHTML from "../../../../shared/components/SanitizeHtml";

const Card = ({ car }) => {
  const{imageUrl, title} = car
  return (
    <div className="slider-main">
    <div className="premium-slider-col" >
      <img
        className=""
        loading="lazy"
        alt=""
        src={addBaseUrlToUrls(imageUrl)}
      />
       </div>
      <div className="slider-text">
          <h3 className="h3"><SafeHTML html={title}/></h3>
      </div>
     
    </div>
  );
};

export default Card;
