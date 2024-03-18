import { DoughnutChart } from "../DoughnutChart";
import Info from "./Info";
import styles from "./Tokeninformation.module.css";
import { data, options } from "./config";

const Tokeninformation = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.titleParent}>
        <h1 className={styles.title}>Token information</h1>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.contentParent}>
          <div className={styles.content}>
            <div style={{ width: '400px', height: '400px' }}>
              <DoughnutChart data={data} options={options} />
            </div>
              {/* <div className={styles.contentInner}>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameContainer}>
                    <div className={styles.groupDiv}>
                      <div className={styles.frameParent1}>
                        <div className={styles.ellipseParent}>
                          <div className={styles.frameChild} />
                          <b className={styles.b}>10%</b>
                        </div>
                        <div className={styles.ellipseGroup}>
                          <div className={styles.frameItem} />
                          <b className={styles.b1}>5%</b>
                        </div>
                        <div className={styles.frameInner} />
                        <b className={styles.b2}>65%</b>
                      </div>
                      <div className={styles.ellipseContainer}>
                        <div className={styles.ellipseDiv} />
                        <b className={styles.b3}>4,5%</b>
                      </div>
                      <div className={styles.frameDiv}>
                        <div className={styles.frameParent2}>
                          <div className={styles.totalTokensWrapper}>
                            <div className={styles.totalTokens}>Total Tokens</div>
                          </div>
                          <div className={styles.div}>888,888,888,888,888</div>
                        </div>
                        <div className={styles.frameParent3}>
                          <div className={styles.ellipseParent1}>
                            <div className={styles.frameChild1} />
                            <b className={styles.b4}>4,5%</b>
                          </div>
                          <div className={styles.ellipseParent2}>
                            <div className={styles.frameChild2} />
                            <b className={styles.b5}>1%</b>
                          </div>
                        </div>
                      </div>
                      <div className={styles.ellipseParent3}>
                        <div className={styles.frameChild3} />
                        <b className={styles.b6}>10%</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            <div className={styles.cartInfo}>
              <div className={styles.div1}>
                <button className={styles.wrapperRectangle16Parent}>
                  <div className={styles.wrapperRectangle16}>
                    <img
                      className={styles.wrapperRectangle16Child}
                      alt=""
                      src="/rectangle-16-9.svg"
                    />
                  </div>
                  <div className={styles.div2}>1%</div>
                </button>
                <div className={styles.forAirdropParent}>
                  <div className={styles.forAirdrop}>For AirDrop</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </div>
                </div>
              </div>
              <div className={styles.div3}>
                <button className={styles.wrapperRectangle16Group}>
                  <div className={styles.wrapperRectangle161}>
                    <img
                      className={styles.wrapperRectangle16Item}
                      alt=""
                      src="/rectangle-16-10.svg"
                    />
                  </div>
                  <div className={styles.div4}>4.5 %</div>
                </button>
                <div className={styles.toDevelopmentParent}>
                  <div className={styles.toDevelopment}> To Development</div>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </div>
                </div>
              </div>
              <div className={styles.div5}>
                <button className={styles.wrapperRectangle16Container}>
                  <div className={styles.wrapperRectangle162}>
                    <img
                      className={styles.wrapperRectangle16Inner}
                      alt=""
                      src="/rectangle-16-11.svg"
                    />
                  </div>
                  <div className={styles.div6}>4.5%</div>
                </button>
                <div className={styles.marketingParent}>
                  <div className={styles.marketing}>Marketing</div>
                  <div className={styles.loremIpsumDolor2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </div>
                </div>
              </div>
              <div className={styles.div7}>
                <button className={styles.frameButton}>
                  <div className={styles.wrapperRectangle163}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="/rectangle-16-12.svg"
                    />
                  </div>
                  <div className={styles.div8}>5%</div>
                </button>
                <div className={styles.foundersParent}>
                  <div className={styles.founders}>Founders</div>
                  <div className={styles.loremIpsumDolor3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </div>
                </div>
              </div>
              <div className={styles.div9}>
                <button className={styles.wrapperRectangle16Parent1}>
                  <div className={styles.wrapperRectangle164}>
                    <img
                      className={styles.wrapperRectangle16Child1}
                      alt=""
                      src="/rectangle-16-13.svg"
                    />
                  </div>
                  <div className={styles.div10}>10%</div>
                </button>
                <div className={styles.prizesForWinnersParent}>
                  <div className={styles.prizesForWinners}>
                    Prizes for winners
                  </div>
                  <div className={styles.loremIpsumDolor4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </div>
                </div>
              </div>
              <div className={styles.div11}>
                <button className={styles.wrapperRectangle16Parent2}>
                  <div className={styles.wrapperRectangle165}>
                    <img
                      className={styles.wrapperRectangle16Child2}
                      alt=""
                      src="/rectangle-16-14.svg"
                    />
                  </div>
                  <div className={styles.div12}>10%</div>
                </button>
                <div className={styles.burningParent}>
                  <div className={styles.burning}>Burning</div>
                  <div className={styles.loremIpsumDolor5}>
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                </div>
              </div>
              <div className={styles.div13}>
                <button className={styles.wrapperRectangle16Parent3}>
                  <div className={styles.wrapperRectangle166}>
                    <img
                      className={styles.wrapperRectangle16Child3}
                      alt=""
                      src="/rectangle-16-15.svg"
                    />
                  </div>
                  <div className={styles.div14}>65%</div>
                </button>
                <div className={styles.toExchangesAndTokenHoldersParent}>
                  <div className={styles.toExchangesAnd}>
                    To Exchanges and token holders
                  </div>
                  <div className={styles.loremIpsumDolor6}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent4}>
              <div className={styles.frameWrapper2}>
                <div className={styles.titleGroup}>
                  <h1 className={styles.title1}>
                    How to join the PremiumToken AirDrops
                  </h1>
                  <div className={styles.description1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
              <div className={styles.formParent}>
                <form className={styles.form}>
                  <div className={styles.title2}>
                    <h3 className={styles.getWhitelistedFor}>
                      Get whitelisted for AirDrop
                    </h3>
                  </div>
                  <div className={styles.frameParent5}>
                    <button className={styles.heroiconsSolidParent}>
                      <img
                        className={styles.heroiconsSolid}
                        alt=""
                        src="/heroiconssolid.svg"
                      />
                      <div
                        className={styles.enterYourPremiumtokenWalletWrapper}
                      >
                        <div className={styles.enterYourPremiumtoken}>
                          Enter your PremiumToken wallet address
                        </div>
                      </div>
                    </button>
                    <div className={styles.socialIconsParent}>
                      <img
                        className={styles.socialIcons}
                        alt=""
                        src="/social-icons.svg"
                      />
                      <input
                        className={styles.frameInput}
                        placeholder="Enter URL to your Twitter profile"
                        type="text"
                      />
                    </div>
                    <div className={styles.socialIconsGroup}>
                      <img
                        className={styles.socialIcons1}
                        alt=""
                        src="/social-icons-2.svg"
                      />
                      <div className={styles.enterYourTelegramUsernameWrapper}>
                        <div className={styles.enterYourTelegram}>
                          Enter your Telegram username
                        </div>
                      </div>
                    </div>
                    <div className={styles.socialIconsContainer}>
                      <img
                        className={styles.socialIcons2}
                        alt=""
                        src="/social-icons-5.svg"
                      />
                      <input
                        className={styles.frameChild4}
                        placeholder="Enter URL to your Instagram profile"
                        type="text"
                      />
                    </div>
                    <div className={styles.socialIconsParent1}>
                      <img
                        className={styles.socialIcons3}
                        alt=""
                        src="/social-icons-6.svg"
                      />
                      <div className={styles.enterUrlToYourFacebookProWrapper}>
                        <div className={styles.enterUrlTo}>
                          Enter URL to your Facebook profile
                        </div>
                      </div>
                    </div>
                    <div className={styles.socialIconsParent2}>
                      <img
                        className={styles.socialIcons4}
                        alt=""
                        src="/social-icons-1.svg"
                      />
                      <div className={styles.enterYourUsernameOnDiscordWrapper}>
                        <div className={styles.enterYourUsername}>
                          Enter your username on Discord
                        </div>
                      </div>
                    </div>
                    <div className={styles.socialIconsParent3}>
                      <img
                        className={styles.socialIcons5}
                        alt=""
                        src="/social-icons-8.svg"
                      />
                      <div className={styles.enterUrlToYourTiktokProfiWrapper}>
                        <div className={styles.enterUrlTo1}>
                          Enter URL to your TikTok profile
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.btWrapper}>
                    <button className={styles.bt}>
                      <div className={styles.btChild} />
                      <b className={styles.submitAirdrop}>Submit airdrop</b>
                    </button>
                  </div>
                </form>
                <div className={styles.infoBlocksWrapper}>
                  <div className={styles.infoBlocks}>
                    <Info
                      frame89="/frame-89@2x.png"
                      followPremiumTokenOnOur6S="Follow PremiumToken on our 6 social media channels"
                    />
                    <Info
                      frame89="/frame-89-1.svg"
                      followPremiumTokenOnOur6S="Fill out the information, and make sure your wallet address is correct and click on Submit."
                      propPadding="var(--padding-28xl) 0px 0px"
                    />
                    <Info
                      frame89="/frame-89-2@2x.png"
                      followPremiumTokenOnOur6S="The AidDrop will be held on the 1st of May, be sure you join in before that to get your tokens!"
                      propPadding="var(--padding-28xl) 0px 0px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bgBlurWrapper}>
          <img className={styles.bgBlurIcon} alt="" src="/bg-blur-13@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default Tokeninformation;
