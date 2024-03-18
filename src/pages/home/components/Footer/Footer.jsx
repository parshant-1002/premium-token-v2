import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.premiumtokenParent}>
        <h1 className={styles.premiumtoken}>
          <span className={styles.premium}>Premium</span>
          <span className={styles.token}>Token</span>
        </h1>
        <div className={styles.iconAssemblerXXX}>
          <div className={styles.frameParent}>
            <img className={styles.frameChild} alt="" src="/frame-9264.svg" />
            <div className={styles.supportbeaverswapcomWrapper}>
              <div className={styles.supportbeaverswapcom}>
                support@beaverswap.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
