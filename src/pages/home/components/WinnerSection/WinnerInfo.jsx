const WinnerInfo = () => {
    return (<>
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
    </>)    
}

export default WinnerInfo 