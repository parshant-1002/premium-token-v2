import styles from "./Featured.module.css";

const Featured = () => {
  return (
    <section className={styles.sequenceControl}>
      <div className={styles.userInterface}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Featured on</h1>
        </div>
        <div className={styles.logos}>
          <div className={styles.wrapperRectangle16Parent}>
            <div className={styles.wrapperRectangle16}>
              <img
                className={styles.wrapperRectangle16Child}
                alt=""
                src="/rectangle-16-8.svg"
              />
            </div>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group@2x.png"
            />
            <img
              className={styles.maskGroupIcon1}
              alt=""
              src="/mask-group-1@2x.png"
            />
            <img
              className={styles.maskGroupIcon2}
              alt=""
              src="/mask-group-2@2x.png"
            />
            <img
              className={styles.maskGroupIcon3}
              alt=""
              src="/mask-group-3@2x.png"
            />
            <img
              className={styles.maskGroupIcon4}
              alt=""
              src="/mask-group-4@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
