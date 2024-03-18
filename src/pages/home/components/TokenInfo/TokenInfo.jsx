import styles from "./FrameComponent3.module.css";

const TokenInfo = () => {
  return (
    <section className={styles.inputValidatorWrapper}>
      <div className={styles.inputValidator}>
        <div className={styles.frameParent}>
          <div className={styles.outputFormatterWrapper}>
            <div className={styles.outputFormatter}>
              <div className={styles.databaseInteraction}>
                <h1 className={styles.title}>Token Info</h1>
              </div>
              <div
                className={styles.description}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
            </div>
          </div>
          <button className={styles.input}>
            <b className={styles.xfsde3eedsd1e12wdsadasd}>
              xfsde3eedsd1e12wdsadasd
            </b>
            <div className={styles.iconsWrapper}>
              <img className={styles.icons} alt="" src="/icons-1.svg" />
            </div>
          </button>
        </div>
        <div className={styles.btParent}>
          <button className={styles.bt1}>
            <div className={styles.btChild} />
            <b className={styles.premiumtokenOnSolscanio}>
              PremiumToken on Solscan.io
            </b>
          </button>
          <button className={styles.bt1}>
            <div className={styles.btItem} />
            <b className={styles.viewTheExternal}>View the External Audit</b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
