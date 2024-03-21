import SmoothFlipCounter from "../../FlipNumbers";
import { ConnectButton } from "../ConnectButton";
import { InformationCard } from "../InformationCard";
import Row from "./Row";
import premiumtoken  from '../../../../../public/premium-token.png';
import cartoken  from '../../../../../public/car-token.png';
import "./WinnerSection.scss";
import { ICONS } from "../../../../assets";

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
              <span className="text-success text-value">4859</span>
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
      <div className="prize_secn_bg">
        <img width={1920} height={1596 }
                        className="prize-banner"
                        alt="desktop-banner"
                        src={ICONS.PrizeBannerBg}
                />
      </div>
    </section>
    
  );
};

export default WinnerSection;
