import { useMemo } from "react";
import "./Card.scss";
import lambo from '../../../../../public/lambo.png';
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import SafeHTML from "../../../../shared/components/SanitizeHtml";

const Card = ({ car }) => {
  const{imageUrl, title} = car
  return (
    <>
      <figure className="slider_thumb mb-0">
        <img
        className=""
        loading="lazy"
        alt=""
        src={addBaseUrlToUrls(imageUrl)}
      />
      </figure>
      <h4 className="h3"><SafeHTML html={title}/></h4>
    </>
  );
};

export default Card;
