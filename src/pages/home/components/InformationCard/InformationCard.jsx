import { useMemo } from "react";
import "./InformationCard.scss";

const InformationCard = ({
  illustration,
  title,
  prop,
  propPadding,
  propHeight,
  propFlex,
  propWidth,
  propOverflow,
}) => {
  const cardStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const contentStyle = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
    };
  }, [propHeight, propFlex]);

  const illustrationIconStyle = useMemo(() => {
    return {
      width: propWidth,
      overflow: propOverflow,
    };
  }, [propWidth, propOverflow]);

  return (
    <div className="card-box-green position-relative">
      <div className="card-img">
        <img
          className=""
          width={225}
          height={188}
          loading="lazy"
          alt="CoinImage"
          src={illustration}
        />

      </div>
      <p className="">{title}</p>
      <div className="card-counter">
        <span className="card-counter-no">
          {prop}
        </span>
      </div>

    </div>
  );
};

export default InformationCard;
