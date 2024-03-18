import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { getContentValue } from "../../helpers/constants";

const Header = ({content}) => {
  const section = "HEADER"
  console.log(getContentValue(content, section, "TWITTER"), "getContentValue")
  return (
    <section className={styles.homeInner}>
      <div className={styles.headerParent}>
        <header className={styles.header}>
          <h1 className={styles.premiumtoken}>
            <span className={styles.premium}>Premium</span>
            <span className={styles.token}>Token</span>
          </h1>
          <div className={styles.btParent}>
            <Link className={styles.bt} to={getContentValue(content, section, "TWITTER")?.url}>
              <div className={styles.btChild} />
              <img
                className={styles.socialIcons}
                alt=""
                src={getContentValue(content, section, "TWITTER")?.image || "/social-icons.svg"}
              />
            </Link>
            <Link className={styles.bt1} to={getContentValue(content, section, "DISCORD")?.url}>
              <div className={styles.btItem} />
              <img
                className={styles.socialIcons1}
                alt=""
                src={getContentValue(content, section, "TWITTER")?.image || "/social-icons-1.svg"}
              />
            </Link>
            <Link className={styles.bt2} to={getContentValue(content, section, "TELEGRAM")?.url}>
              <div className={styles.btInner} />
              <img
                className={styles.socialIcons2}
                alt=""
                src={getContentValue(content, section, "TWITTER")?.image || "/social-icons-2.svg"}
              />
            </Link>
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
