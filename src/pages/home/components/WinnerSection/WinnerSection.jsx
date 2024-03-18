import { ConnectButton } from "../ConnectButton";
import { InformationCard } from "../InformationCard";
import Row from "./Row";
import styles from "./WinnerSection.module.css";

const WinnerSection = () => {
  return (
    <section className={styles.homeInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.countdownSectionWrapper}>
              <div className={styles.countdownSection}>
                <h1 className={styles.title}>Latest winners</h1>
                <div className={styles.title1}>
                  <div className={styles.description}>
                    Crypto ipsum bitcoin ethereum dogecoin litecoin. Klaytn
                    golem terraUSD kava amp maker velas. Velas serum harmony XRP
                    algorand aave klaytn.
                  </div>
                </div>
                <div className={styles.marketCap}>MARKET CAP</div>
                <div className={styles.content}>
                  <div className={styles.countdown}>
                    <div className={styles.branching}>
                      <div className={styles.condition}>5</div>
                    </div>
                    <div className={styles.branching1}>
                      <div className={styles.div}>7</div>
                    </div>
                    <div className={styles.branching2}>
                      <h1 className={styles.h1}>,</h1>
                    </div>
                    <div className={styles.branching3}>
                      <div className={styles.div1}>3</div>
                    </div>
                    <div className={styles.branching4}>
                      <div className={styles.div2}>0</div>
                    </div>
                    <div className={styles.branching5}>
                      <div className={styles.div3}>4</div>
                    </div>
                    <div className={styles.branching6}>
                      <h1 className={styles.h11}>,</h1>
                    </div>
                    <div className={styles.branching7}>
                      <div className={styles.div4}>2</div>
                    </div>
                    <div className={styles.branching8}>
                      <div className={styles.div5}>0</div>
                    </div>
                    <div className={styles.branching9}>
                      <div className={styles.div6}>3</div>
                    </div>
                    <div className={styles.branching10}>
                      <h1 className={styles.h12}>$</h1>
                    </div>
                  </div>
                  <div className={styles.subtitle}>
                    <div className={styles.process}>
                      X $ more in market cap until the smart contract draws the
                      next winner!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.function}>
              <div className={styles.tableHeader}>
                <div className={styles.loopControl}>
                  <div className={styles.title2}>
                    <span>{`Token holders that joined automatic: `}</span>
                    <span className={styles.span}>4859</span>
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.output}>
                    <div className={styles.combine}>Did you win a prize?</div>
                  </div>
                  <ConnectButton/>
                  {/* <button className={styles.bt}>
                    <div className={styles.btChild} />
                    <b className={styles.connectWallet}>Connect wallet</b>
                  </button> */}
                </div>
              </div>
              <div className={styles.store}>
                <div className={styles.imageContainerParent}>
                  <div className={styles.imageContainer}>
                    <div className={styles.dropdownMenu}>
                      <div className={styles.prizeSelected}>Prize selected</div>
                      <div className={styles.marketCap1}>MARKET CAP</div>
                      <div className={styles.dateWrapper}>
                        <div className={styles.date}>date</div>
                      </div>
                      <div className={styles.walletAddressWrapper}>
                        <div className={styles.walletAddress}>
                          wallet address
                        </div>
                      </div>
                      <div className={styles.chanceOfWinning}>
                        Chance of winning
                      </div>
                    </div>
                  </div>
                  <Row pieChart="50" prop="05-01-2024" prop1="0.001%" />
                </div>
                <div className={styles.transform}>
                  <div className={styles.wrapperBgBlur}>
                    <img
                      className={styles.bgBlurIcon}
                      alt=""
                      src="/bg-blur-6.svg"
                    />
                  </div>
                  <Row
                    pieChart="40"
                    prop="04-24-2024"
                    prop1="0.4%"
                    propAlignSelf="unset"
                    propPadding="var(--padding-10xs) var(--padding-114xl) var(--padding-10xs) var(--padding-160xl)"
                    propWidth="928px"
                    propMinWidth="36px"
                  />
                </div>
                <Row
                  pieChart="30"
                  prop="04-16-2024"
                  prop1="0.0024%"
                  propAlignSelf="unset"
                  propPadding="var(--padding-10xs) var(--padding-86xl) var(--padding-10xs) var(--padding-160xl)"
                  propWidth="928px"
                  propMinWidth="64px"
                />
                <div className={styles.row4}>
                  <div className={styles.frameContainer}>
                    <button className={styles.image35Wrapper}>
                      <img
                        className={styles.image35Icon}
                        alt=""
                        src="/image-35@2x.png"
                      />
                    </button>
                    <div className={styles.constant}>
                      <div className={styles.matrix}>20</div>
                    </div>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.div7}>03-08-2024</div>
                  </div>
                  <div className={styles.row4Inner}>
                    <div className={styles.xfsde3eedsd1e12wdsadasdParent}>
                      <div className={styles.xfsde3eedsd1e12wdsadasd}>
                        xfsde3eedsd1e12wdsadasd
                      </div>
                      <div className={styles.dequeue}>0,158%</div>
                    </div>
                  </div>
                </div>
                <div className={styles.row5}>
                  <div className={styles.frameDiv}>
                    <button className={styles.image35Container}>
                      <img
                        className={styles.image35Icon1}
                        alt=""
                        src="/image-35@2x.png"
                      />
                    </button>
                    <div className={styles.container}>
                      <div className={styles.div8}>10</div>
                    </div>
                  </div>
                  <div className={styles.row5Inner}>
                    <div className={styles.frameParent1}>
                      <div className={styles.frame}>
                        <div className={styles.div9}>03-01-2024</div>
                      </div>
                      <div className={styles.xfsde3eedsd1e12wdsadasd1}>
                        xfsde3eedsd1e12wdsadasd
                      </div>
                      <div className={styles.forEach}>0.45 %</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.wrapperArrows}>
              <img
                className={styles.arrowsIcon}
                loading="lazy"
                alt=""
                src="/arrows.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title3}>Did you win?</h1>
        </div>
        <div className={styles.cardParent}>
          <div className={styles.card}>
            <div className={styles.illustrationWrapper}>
              <img
                className={styles.illustrationIcon}
                alt=""
                src="/illustration-3@2x.png"
              />
            </div>
            <div className={styles.titleParent}>
              <div className={styles.title4}>Connect your wallet</div>
              <div className={styles.description1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </div>
            </div>
            <div className={styles.btWrapper}>
              <ConnectButton/>
              {/* <button className={styles.bt1}>
                <div className={styles.btItem} />
                <b className={styles.connectWallet1}>Connect wallet</b>
              </button> */}
            </div>
            <div className={styles.layoutConstraints}>
              <img
                className={styles.bgBlurIcon1}
                alt=""
                src="/bg-blur-7@2x.png"
              />
              <div className={styles.wrapperRectangle16Parent}>
                <div className={styles.wrapperRectangle16}>
                  <img
                    className={styles.wrapperRectangle16Child}
                    alt=""
                    src="/rectangle-16-4.svg"
                  />
                </div>
                <div className={styles.div10}>1</div>
              </div>
            </div>
          </div>
          <InformationCard
            illustration="/illustration-4.svg"
            title="Enter your email address"
            prop="2"
          />
          <InformationCard
            illustration="/illustration-5@2x.png"
            title="Choose the prize"
            prop="3"
            propWidth="173.1px"
            propOverflow="hidden"
          />
          <div className={styles.cardGroup}>
            <div className={styles.card1}>
              <div className={styles.illustrationContainer}>
                <div className={styles.illustration}>
                  <img className={styles.vectorIcon} alt="" />
                  <div className={styles.illustrationInner}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/group-9567-1@2x.png"
                    />
                  </div>
                  <img className={styles.vectorIcon1} alt="" />
                </div>
              </div>
              <div className={styles.saturationFilter}>
                <div className={styles.title5}>
                   Wait to be contacted on email.
                </div>
                <div className={styles.description2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </div>
              </div>
            </div>
            <div className={styles.wrapperRectangle16Group}>
              <div className={styles.wrapperRectangle161}>
                <img
                  className={styles.wrapperRectangle16Item}
                  alt=""
                  src="/rectangle-16-5.svg"
                />
              </div>
              <div className={styles.div11}>4</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinnerSection;
