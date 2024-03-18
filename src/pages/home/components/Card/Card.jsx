import { useMemo } from "react";
import styles from "./Card.module.css";

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
    <div className={styles.card1} style={card1Style}>
      <img
        className={styles.carIcon}
        loading="lazy"
        alt=""
        src={car}
        style={carIconStyle}
      />
      <div className={styles.positionResolver}>
        <div className={styles.titleParent}>
          <div className={styles.title}>Lorem impum dolor sit amet</div>
          <div
            className={styles.description}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et `}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
