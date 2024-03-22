import "./InformationCard.scss";
import { RenderIconWithHover } from "../../../../shared/components/RenderIconWithHover";
import SafeHTML from "../../../../shared/components/SanitizeHtml";

const InformationCard = ({
  illustration,
  title,
  prop,
  item
}) => {
console.log(item,"item<><><><><")
  return (
    <div className="card-box-green position-relative">
      <div className="card-img">
        <RenderIconWithHover iconUrl={illustration}/>
        {/* <img
          className=""
          width={225}
          height={188}
          loading="lazy"
          alt="CoinImage"
          src={illustration}
        /> */}

      </div>
      <p className=""><SafeHTML html={title} /></p>
      <div className="card-counter">
        <span className="card-counter-no">
          {prop}
        </span>
      </div>

    </div>
  );
};

export default InformationCard;
