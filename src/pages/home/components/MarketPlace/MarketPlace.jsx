import Card from "../Card";
import styles from "./MarketPlace.module.css";

const MarketPlace = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.headerParent}>
        <div className={styles.header}>
          <div className={styles.transformMatrix}>
            <h1 className={styles.title}>Premium marketplace</h1>
          </div>
          <div className={styles.wrapperArrows}>
            <img className={styles.arrowsIcon} alt="" src="/arrows.svg" />
          </div>
        </div>
        <div className={styles.pathInterpreter}>
          <div className={styles.pathInterpreterInner}>
            <div className={styles.card1Parent}>
              <Card car="/car@2x.png" />
              <button className={styles.bt}>
                <div className={styles.btChild} />
                <b className={styles.comingSoon}>Coming soon</b>
                <div className={styles.dataSeparate}>
                  <img
                    className={styles.path9413Icon}
                    alt=""
                    src="/path9413.svg"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.loremImpumDolor}>
              Lorem impum dolor sit amet
            </div>
            <div className={styles.descroption}>
              Crypto ipsum bitcoin ethereum dogecoin litecoin. Polkadot chiliz
              kava ethereum filecoin IOTA dai BitTorrent dai kadena.
            </div>
            <img className={styles.carIcon} alt="" src="/car-1@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.card3Wrapper}>
        <Card
          car="/car-2@2x.png"
          propGap="unset"
          propDebugCommit="unset"
          propWidth="268.8px"
        />
      </div>
    </section>
  );
};

export default MarketPlace;
