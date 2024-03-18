import styles from "./ConnectionCreator.module.css";

const ConnectionCreator = () => {
  return (
    <section className={styles.connectionCreator}>
      <div className={styles.wrapperBgBlur}>
        <img className={styles.bgBlurIcon} alt="" src="/bg-blur.svg" />
      </div>
      <div className={styles.errorReporting}>
        <img className={styles.bgBlurIcon1} alt="" src="/bg-blur-9@2x.png" />
        <img className={styles.bgBlurIcon2} alt="" src="/bg-blur-10@2x.png" />
        <img
          className={styles.imgIcon}
          loading="lazy"
          alt=""
          src="/img@2x.png"
        />
        <img className={styles.bgBlurIcon3} alt="" src="/bg-blur-11@2x.png" />
        <div className={styles.img}>
          <div className={styles.wrapperRectangle2}>
            <img
              className={styles.wrapperRectangle2Child}
              loading="lazy"
              alt=""
              src="/rectangle-2.svg"
            />
          </div>
          <img
            className={styles.onlinePaymentMockup111}
            alt=""
            src="/online-payment-mockup11-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectionCreator;
