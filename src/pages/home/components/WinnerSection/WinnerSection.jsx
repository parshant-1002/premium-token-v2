import SmoothFlipCounter from "../../FlipNumbers";
import { ConnectButton } from "../ConnectButton";
import { InformationCard } from "../InformationCard";
import Row from "./Row";
import premiumtoken  from '../../../../../public/premium-token.png';
import cartoken  from '../../../../../public/car-token.png';
import "./WinnerSection.scss";

const WinnerSection = () => {
  const counterSettings = {
    digits: 7,
    delay: 200,
    direction: 'rtl',
  };

  return (
    <section className="winner_counter">
      <div className="container">
        <div className="heading_title text-center">
          <h2 className="h2 common_title">
            Latest winners
          </h2>
          <div className="winner_counter_content">
            <p className="">
              In the list below can you see all latest winners that the smart contract has drawn for each increase of $10 million market cap. The contract draws the winners automatic and all holders that hold minimum 1000 tokens have a chance of winning, the winners can choose a prize between $350,000 worth of PremiumToken or a premium car from our partners worth $350,000.
            </p>
          </div>
          <div className="market-cap text-success text-center">MARKET CAP</div>
        </div>

        <SmoothFlipCounter initialValue={123456} settings={counterSettings} />

        <div className="subtitle">
          <span className="process">
          The smart contract will draw the next winner at $60 million market cap!
          </span>
        </div>
        {/* table secn */}
        <div className="table_wallet_secn mw-928">
          

        <div className="tableHeaderinfo d-flex flex-md-row flex-column justify-content-md-between align-items-md-center">
          <div className="loopControl">
            <div className="d-flex gap-1">
              <span className="text-white">{`Token holders that joined automatic: `}</span>
              <span className="text-success">4859</span>
            </div>
          </div>
          <div className="wallet-link align-items-center d-flex gap-3">
            <div className="output">
              <span className="text-white">Did you win a prize?</span>
            </div>
            <button type="button" className="btn btn-md btn-secondary"><span>Connect Wallet</span></button>
            {/* <ConnectButton/> */}
          </div>
        </div>
        {/* table slider */}
        <div className="table_slider my-32">
          <div className="table-responsive prize_table">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Prize selected</th>
                  <th scope="col">MARKET CAP</th>
                  <th scope="col">Date</th>
                  <th scope="col">wallet address</th>
                  <th scope="col">Chance of winning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="td_img">
                       <img src={premiumtoken} alt="premium" />
                    </div>
                  </td>
                  <td>$50M</td>
                  <td>05-01-2024</td>
                  <td>xfsde3eedsd1e12wdsadasd</td>
                  <td>0.001%</td>
                </tr>
                <tr>
                  <td>
                  <div className="td_img">
                       <img src={cartoken} alt="premium" />
                    </div>
                </td>
                
                <td>$50M</td>
                  <td>05-01-2024</td>
                  <td>xfsde3eedsd1e12wdsadasd</td>
                  <td>0.001%</td>
                </tr>
                <tr>
                  <td>
                  <div className="td_img">
                       <img src={cartoken} alt="premium" />
                    </div>
                </td>
                
                <td>$50M</td>
                  <td>05-01-2024</td>
                  <td>xfsde3eedsd1e12wdsadasd</td>
                  <td>0.001%</td>
                </tr>
                <tr>
                  <td>
                  <div className="td_img">
                       <img src={cartoken} alt="premium" />
                    </div>
                </td>
                
                <td>$50M</td>
                  <td>05-01-2024</td>
                  <td>xfsde3eedsd1e12wdsadasd</td>
                  <td>0.001%</td>
                </tr>
                <tr>
                  <td>
                  <div className="td_img">
                       <img src={cartoken} alt="premium" />
                    </div>
                </td>
                
                <td>$50M</td>
                  <td>05-01-2024</td>
                  <td>xfsde3eedsd1e12wdsadasd</td>
                  <td>0.001%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </section>
    // <section className="">
    //   <div className="container">
    //     <div className="frameWrapper">
    //       <div className={styles.frameGroup}>
    //         <div className={styles.countdownSectionWrapper}>
    //           <div className={styles.countdownSection}>
    //             <h2 className="h2">Latest winners</h2>
    //             <div className={styles.title1}>
    //               <div className={styles.description}>
    //               In the list below can you see all latest winners that the smart contract has drawn for each increase of $10 million market cap. The contract draws the winners automatic and all holders that hold minimum 1000 tokens have a chance of winning, the winners can choose a prize between $350,000 worth of PremiumToken or a premium car from our partners worth $350,000.
    //               </div>
    //             </div>
    //             <div className={styles.marketCap}>MARKET CAP</div>
    //             <SmoothFlipCounter initialValue={123456} settings={counterSettings} />
    //             <div className={styles.content}>

    //               <div className={styles.subtitle}>
    //                 <div className={styles.process}>
    //                   X $ more in market cap until the smart contract draws the
    //                   next winner!
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className={styles.function}>
    //           <div className={styles.tableHeader}>
    //             <div className={styles.loopControl}>
    //               <div className={styles.title2}>
    //                 <span>{`Token holders that joined automatic: `}</span>
    //                 <span className={styles.span}>4859</span>
    //               </div>
    //             </div>
    //             <div className={styles.input}>
    //               <div className={styles.output}>
    //                 <div className={styles.combine}>Did you win a prize?</div>
    //               </div>
    //               <ConnectButton/>
    //               {/* <button className={styles.bt}>
    //                 <div className={styles.btChild} />
    //                 <b className={styles.connectWallet}>Connect wallet</b>
    //               </button> */}
    //             </div>
    //           </div>
    //           <div className={styles.store}>
    //             <div className={styles.imageContainerParent}>
    //               <div className={styles.imageContainer}>
    //                 <div className={styles.dropdownMenu}>
    //                   <div className={styles.prizeSelected}>Prize selected</div>
    //                   <div className={styles.marketCap1}>MARKET CAP</div>
    //                   <div className={styles.dateWrapper}>
    //                     <div className={styles.date}>date</div>
    //                   </div>
    //                   <div className={styles.walletAddressWrapper}>
    //                     <div className={styles.walletAddress}>
    //                       wallet address
    //                     </div>
    //                   </div>
    //                   <div className={styles.chanceOfWinning}>
    //                     Chance of winning
    //                   </div>
    //                 </div>
    //               </div>
    //               <Row pieChart="50" prop="05-01-2024" prop1="0.001%" />
    //             </div>
    //             <div className={styles.transform}>
    //               <div className={styles.wrapperBgBlur}>
    //                 <img
    //                   className={styles.bgBlurIcon}
    //                   alt=""
    //                   src="/bg-blur-6.svg"
    //                 />
    //               </div>
    //               <Row
    //                 pieChart="40"
    //                 prop="04-24-2024"
    //                 prop1="0.4%"
    //                 propAlignSelf="unset"
    //                 propPadding="var(--padding-10xs) var(--padding-114xl) var(--padding-10xs) var(--padding-160xl)"
    //                 propWidth="928px"
    //                 propMinWidth="36px"
    //               />
    //             </div>
    //             <Row
    //               pieChart="30"
    //               prop="04-16-2024"
    //               prop1="0.0024%"
    //               propAlignSelf="unset"
    //               propPadding="var(--padding-10xs) var(--padding-86xl) var(--padding-10xs) var(--padding-160xl)"
    //               propWidth="928px"
    //               propMinWidth="64px"
    //             />
    //             <div className={styles.row4}>
    //               <div className={styles.frameContainer}>
    //                 <button className={styles.image35Wrapper}>
    //                   <img
    //                     className={styles.image35Icon}
    //                     alt=""
    //                     src="/image-35@2x.png"
    //                   />
    //                 </button>
    //                 <div className={styles.constant}>
    //                   <div className={styles.matrix}>20</div>
    //                 </div>
    //               </div>
    //               <div className={styles.wrapper}>
    //                 <div className={styles.div7}>03-08-2024</div>
    //               </div>
    //               <div className={styles.row4Inner}>
    //                 <div className={styles.xfsde3eedsd1e12wdsadasdParent}>
    //                   <div className={styles.xfsde3eedsd1e12wdsadasd}>
    //                     xfsde3eedsd1e12wdsadasd
    //                   </div>
    //                   <div className={styles.dequeue}>0,158%</div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className={styles.row5}>
    //               <div className={styles.frameDiv}>
    //                 <button className={styles.image35Container}>
    //                   <img
    //                     className={styles.image35Icon1}
    //                     alt=""
    //                     src="/image-35@2x.png"
    //                   />
    //                 </button>
    //                 <div className={styles.container}>
    //                   <div className={styles.div8}>10</div>
    //                 </div>
    //               </div>
    //               <div className={styles.row5Inner}>
    //                 <div className={styles.frameParent1}>
    //                   <div className={styles.frame}>
    //                     <div className={styles.div9}>03-01-2024</div>
    //                   </div>
    //                   <div className={styles.xfsde3eedsd1e12wdsadasd1}>
    //                     xfsde3eedsd1e12wdsadasd
    //                   </div>
    //                   <div className={styles.forEach}>0.45 %</div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className={styles.wrapperArrows}>
    //           <img
    //             className={styles.arrowsIcon}
    //             loading="lazy"
    //             alt=""
    //             src="/arrows.svg"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default WinnerSection;
