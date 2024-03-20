// componentsdiv
import { Header } from "./components/Header";
import { InformationSection } from "./components/InformationSection";
import { DataAggregator } from "./components/DataAggregator";
import { WinnerSection } from "./components/WinnerSection";
import { RoadMap } from "./components/RoadMap";
// styles
import styles from "./Home.module.css";
import { ConnectionCreator } from "./components/ConnectionCreator";
import { ConnectionMaker } from "./components/ConnectionMaker";
import { Featured } from "./components/Featured";
import { MarketPlace } from "./components/MarketPlace";
import { Tokeninformation } from "./components/Tokeninformation";
import { Partners } from "./components/Partners";
import { Footer } from "./components/Footer";
import { SocialMedia } from "./components/SocialMedia";
import VideoSection from "./components/VideoSection";
import { PremiumToken } from "./components/PremiumToken";
const Home = () => {
  return (
    <>
   
      {/* <div className={styles.wrapperBgBlur}>
        <img className={styles.bgBlurIcon} alt="" src="/bg-blur.svg" />
      </div> */}
      {/* <section className={styles.wrapperBgBlurParent}>
        <div className={styles.wrapperBgBlur1}>
          <img className={styles.bgBlurIcon1} alt="" src="/bg-blur-1.svg" />
        </div>
        <img className={styles.bgBlurIcon2} alt="" src="/bg-blur-2@2x.png" />
      </section>
      <img className={styles.bgBlurIcon3} alt="" src="/bg-blur-3@2x.png" /> */}
      <Header/>
      {/* <div className={styles.wrapperBgBlur2}>
        <img className={styles.bgBlurIcon4} alt="" src="/bg-blur-4.svg" />
      </div>
      <img className={styles.bgBlurIcon5} alt="" src="/bg-blur-5@2x.png" /> */}
      <VideoSection/>
      <InformationSection />
      <WinnerSection />
      <DataAggregator />
      <RoadMap />
      <PremiumToken/>
      <Featured />
      <ConnectionCreator />
      <ConnectionMaker />
      <section className={styles.dataJoiner}>
        <img className={styles.bgBlurIcon6} alt="" src="/bg-blur-12@2x.png" />
        <img className={styles.roadLineIcon} alt="" src="/road-line.svg" />
        <div className={styles.wrapperActiveDot}>
          <img className={styles.activeDotIcon} alt="" src="/active-dot.svg" />
        </div>
        <div className={styles.wrapperActiveDot1}>
          <img className={styles.activeDotIcon1} alt="" src="/active-dot.svg" />
        </div>
        <div className={styles.wrapperDisabledDots}>
          <img
            className={styles.disabledDotsIcon}
            alt=""
            src="/disabled-dots.svg"
          />
        </div>
      </section>
      <MarketPlace />
      <Tokeninformation />
      <Partners/>
      < SocialMedia/>
      <Footer />
    </>
  );
};

export default Home;
