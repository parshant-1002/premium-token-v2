import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.homeInner}>
      <div className={styles.headerParent}>
        <header className={styles.header}>
          <h1 className={styles.premiumtoken}>
            <span className={styles.premium}>Premium</span>
            <span className={styles.token}>Token</span>
          </h1>
          <div className={styles.btParent}>
            <div className={styles.bt}>
              <div className={styles.btChild} />
              <img
                className={styles.socialIcons}
                alt=""
                src="/social-icons.svg"
              />
            </div>
            <div className={styles.bt1}>
              <div className={styles.btItem} />
              <img
                className={styles.socialIcons1}
                alt=""
                src="/social-icons-1.svg"
              />
            </div>
            <div className={styles.bt2}>
              <div className={styles.btInner} />
              <img
                className={styles.socialIcons2}
                alt=""
                src="/social-icons-2.svg"
              />
            </div>
            <div className={styles.bt3}>
              <div className={styles.rectangleDiv} />
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
              <b className={styles.joinAirdrop}>Join Airdrop</b>
            </div>
            <div className={styles.bt4}>
              <div className={styles.btChild1} />
              <b className={styles.liveChart}>View chart</b>
            </div>
            <button className={styles.bt5}>
              <div className={styles.btChild2} />
              <b className={styles.connectToA}>Buy token</b>
            </button>
          </div>
        </header>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.titleParent}>
              <h1 className={styles.title}>Crypto ipsum bitcoin ethereum .</h1>
              <div className={styles.description}>
                Crypto ipsum bitcoin ethereum dogecoin litecoin. Klaytn golem
                terraUSD kava amp maker velas. Velas serum harmony XRP algorand
                aave klaytn. Solana crypto zcash bancor.
              </div>
            </div>
          </div>
          <div className={styles.video}>
            <div className={styles.wrapperVideo}>
              <img className={styles.videoIcon} alt="" src="/video@2x.png" />
            </div>
            <img
              className={styles.playButtonIcon}
              alt=""
              src="/play-button.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
