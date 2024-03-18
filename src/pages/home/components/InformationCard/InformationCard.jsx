import { useMemo } from "react";
import styles from "./InformationCard.module.css";

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
    <div className={styles.cardParent}>
      <div className={styles.card} style={cardStyle}>
        <div className={styles.content} style={contentStyle}>
          <img
            className={styles.illustrationIcon}
            loading="lazy"
            alt=""
            src={illustration}
            style={illustrationIconStyle}
          />
          <div className={styles.text}>
            <div className={styles.title}>{title}</div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperRectangle16Parent}>
        <div className={styles.wrapperRectangle16}>
          <img
            className={styles.wrapperRectangle16Child}
            alt=""
            src="/rectangle-16.svg"
          />
        </div>
        <div className={styles.div}>{prop}</div>
      </div>
    </div>
  );
};

export default InformationCard;
