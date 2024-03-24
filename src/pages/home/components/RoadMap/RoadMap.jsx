import { CustomSlick } from "../../../../shared/components/CustomSlick";
import "./style.scss";

const RoadMap = () => {
  const responsiveConfig = [ 
    {
      breakpoint: 120000000,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
				dots: false,
      }
    },
  ]

  return (
    <>
      {/* <section className={styles.homeInner}>
      <div className={styles.frameParent}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>PremiumToken Roadmap</h1>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.loremIpsumDolorParent}>
            <div className={styles.loremIpsumDolor}>Lorem ipsum dolor</div>
            <div className={styles.loremIpsumDolor1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.txtWrapper}>
              <div className={styles.txt}>
                <div className={styles.loremIpsumDolor2}>Lorem ipsum dolor</div>
                <div className={styles.loremIpsumDolor3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.loremIpsumDolorGroup}>
                <div className={styles.loremIpsumDolor4}>Lorem ipsum dolor</div>
                <div className={styles.loremIpsumDolor5}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div className={styles.txt1}>
                <div className={styles.loremIpsumDolor6}>Lorem ipsum dolor</div>
                <div className={styles.loremIpsumDolor7}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.txtParent}>
            <div className={styles.txt2}>
              <div className={styles.loremIpsumDolor8}>Lorem ipsum dolor</div>
              <div className={styles.loremIpsumDolor9}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            <div className={styles.imageTransformer}>
              <div className={styles.txt3}>
                <div className={styles.loremIpsumDolor10}>
                  Lorem ipsum dolor
                </div>
                <div className={styles.loremIpsumDolor11}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        <section className={styles.homeInner}>
      <div className={styles.logicOperatorParent}>
        <div className={styles.logicOperator}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
          <div className={styles.description}>
            <p
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</p>
            <p className={styles.utEnimAd}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aliqui
            </p>
            <p className={styles.exEaCommodo}>
              ex ea commodo consequat aliquip ex aliquip.
            </p>
          </div>
        </div>
        <div className={styles.btWrapper}>
          <button className={styles.bt}>
            <div className={styles.btChild} />
            <b className={styles.comingSoon}>Coming soon</b>
            <div className={styles.path9413Wrapper}>
              <img className={styles.path9413Icon} alt="" src="/path9413.svg" />
            </div>
          </button>
        </div>
      </div>
    </section> */}

      <section className="roadMap_sec">
        <div className="container">
          <div className="roadmap_wrap">
            <CustomSlick slidesToShow={6} responsive={responsiveConfig}>
              <div className="timeline-item active">
                <div className="timeline_block text-center">
                  <h6 className="h6">Reach 1000 holders</h6>
                  <span>Completed after: <span className="text-success">3 days</span></span>
                  <p>We aim and hope we will reach this goal rather quickly.</p>
                </div>
                <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
                </svg>
              </div>
             <div className="timeline-item">
                <div className="pos_bottom timeline_block text-center">
                  <h6 className="h6">Reach 1000 holders</h6>
                  <span>Completed after: <span className="text-success">3 days</span></span>
                  <p>We aim and hope we will reach this goal rather quickly.</p>
                </div>
                <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
                </svg>

              </div>
             <div className="timeline-item">
                <div className="timedivne_block text-center">
                  <h6 className="h6">Reach 1000 holders</h6>
                  <span>Completed after: <span className="text-success">3 days</span></span>
                  <p>We aim and hope we will reach this goal rather quickly.</p>
                </div>
                <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
                </svg>

              </div>
             <div className="timeline-item">
                <div className="pos_bottom timeline_block text-center">
                  <h6 className="h6">Reach 1000 holders</h6>
                  <span>Completed after: <span className="text-success">3 days</span></span>
                  <p>We aim and hope we will reach this goal rather quickly.</p>
                </div>
                <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
                </svg>

              </div>
              <div className="timeline-item">
                <div className="pos_bottom timeline_block text-center">
                  <h6 className="h6">Reach 1000 holders</h6>
                  <span>Completed after: <span className="text-success">3 days</span></span>
                  <p>We aim and hope we will reach this goal rather quickly.</p>
                </div>
                <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
                </svg>

              </div>
              <div className="timeline-item">
                <div className="pos_bottom timeline_block text-center">
                  <h6 className="h6">Reach 1000 holders</h6>
                  <span>Completed after: <span className="text-success">3 days</span></span>
                  <p>We aim and hope we will reach this goal rather quickly.</p>
                </div>
                <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
                </svg>

              </div>
              <div className="timeline-item">
                <div className="pos_bottom timeline_block text-center">
                  <h6 className="h6">Reach 1000 holders</h6>
                  <span>Completed after: <span className="text-success">3 days</span></span>
                  <p>We aim and hope we will reach this goal rather quickly.</p>
                </div>
                <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
                </svg>

              </div>
               <div className="timeline-item">
                  <div className="pos_bottom timeline_block text-center">
                    <h6 className="h6">Reach 1000 holders</h6>
                    <span>Completed after: <span className="text-success">3 days</span></span>
                    <p>We aim and hope we will reach this goal rather quickly.</p>
                  </div>
                  <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
                  </svg>

                </div>
            </CustomSlick>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoadMap;
