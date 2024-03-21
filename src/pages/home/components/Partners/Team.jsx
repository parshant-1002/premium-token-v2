import { useMemo } from "react";
import styles from "./Team.module.css";

const Team = ({ maskGroup, image39, propWidth }) => {
  const image39IconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.team}>
      <div className={styles.wrapperMaskGroup}>
        <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
      </div>
      <img
        className={styles.pinpng2Icon}
        loading="lazy"
        alt=""
        src="/pinpng-2@2x.png"
      />
      <div className={styles.component1Parent}>
        <div className={styles.shapeCombinerX}>
          <div className={styles.mikeStoneberg}>Mike Stoneberg</div>
          <div className={styles.ceoProduct}>{`CEO & Product Manager`}</div>
        </div>
      </div>
    </div>
  );
};

export default Team;
