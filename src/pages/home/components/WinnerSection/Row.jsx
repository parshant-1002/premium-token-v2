import { useMemo } from "react";
import styles from "./Row.module.css";

const Row = ({
  pieChart,
  prop,
  prop1,
  propAlignSelf,
  propPadding,
  propWidth,
  propMinWidth,
}) => {
  const row1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.row1} style={row1Style}>
      <div className={styles.table}>
        <div className={styles.ifStatementWrapper}>
          <div className={styles.ifStatement}>
            <img className={styles.image37Icon} alt="" src="/image-37@2x.png" />
            <div className={styles.image38} />
            <img
              className={styles.image36Icon}
              loading="lazy"
              alt=""
              src="/image-36@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.barChart}>
        <div className={styles.pieChart}>{pieChart}</div>
      </div>
      <div className={styles.barChart1}>
        <div className={styles.div}>{prop}</div>
      </div>
      <div className={styles.barChart2}>
        <div className={styles.xfsde3eedsd1e12wdsadasd}>
          xfsde3eedsd1e12wdsadasd
        </div>
      </div>
      <div className={styles.barChart3}>
        <div className={styles.div1} style={divStyle}>
          {prop1}
        </div>
      </div>
    </div>
  );
};

export default Row;
