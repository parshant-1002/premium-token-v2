import styles from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <section className={styles.homeInner}>
      <div className={styles.textContentParent}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Follow us on social networks</h1>
          <div
            className={styles.description}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et `}</div>
        </div>
        <div className={styles.shapeTransformerXX}>
          <button className={styles.pathCombinerXX}>
            <img
              className={styles.socialIcons}
              alt=""
              src="/social-icons-9.svg"
            />
            <b className={styles.joinX}>Join X</b>
          </button>
          <button className={styles.pathCombinerXX1}>
            <img
              className={styles.socialIcons1}
              alt=""
              src="/social-icons-10.svg"
            />
            <b className={styles.joinDiscord}>Join Discord</b>
          </button>
          <button className={styles.pathCombinerXX2}>
            <img
              className={styles.socialIcons2}
              alt=""
              src="/social-icons-11.svg"
            />
            <b className={styles.joinTelegram}>{`Join Telegram `}</b>
          </button>
          <button className={styles.pathCombinerXX3}>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
            <b className={styles.joinAirdrop}>Join Airdrop</b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
