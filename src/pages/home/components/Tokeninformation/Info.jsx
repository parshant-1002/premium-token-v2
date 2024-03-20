import { useMemo } from "react";
import  "./Info.scss";

const Info = ({ frame89, followPremiumTokenOnOur6S = "", propPadding }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="airdrop-list">
      <div className="airdrop-image">
      <img loading="lazy" alt="" src={frame89} />
      </div>
      <div className="airdrop-list-text" >
        <p> {followPremiumTokenOnOur6S} </p>
      </div>
    </div>
  );
};

export default Info;
