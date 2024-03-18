import { useMemo } from "react";
import styles from "./Info.module.css";

const Info = ({ frame89, followPremiumTokenOnOur6S = "", propPadding }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.info1}>
      <img className={styles.info1Child} loading="lazy" alt="" src={frame89} />
      <div
        className={styles.followPremiumtokenOnOur6SWrapper}
        style={frameDivStyle}
      >
        <div className={styles.followPremiumtokenOn}>
          {followPremiumTokenOnOur6S}
        </div>
      </div>
    </div>
  );
};

export default Info;
