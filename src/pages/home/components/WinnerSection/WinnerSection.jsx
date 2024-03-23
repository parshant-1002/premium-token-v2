import SmoothFlipCounter from "../../FlipNumbers";
import premiumtoken from '../../../../../public/premium-token.png';
import cartoken from '../../../../../public/car-token.png';
import { ICONS } from "../../../../assets";
import { CustomSlick } from "../../../../shared/components/CustomSlick";
import "./WinnerSection.scss";

const WinnerSection = () => {
  const counterSettings = {
    digits: 7,
    delay: 200,
    direction: 'rtl',
    arrows: true,
  };
  const responsiveConfig = [    
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true
      }
    }
  ]

  return (
    <section className="winner_counter">
      <div className="container">
        <div className="heading_title text-center">
          <h2 className="h2 mb-0">
            Latest winners
          </h2>
          <div className="winner_counter_content">
            <p className="">
              In the list below can you see all latest winners that the smart contract has drawn for each increase of $10 million market cap. The contract draws the winners automatic and all holders that hold minimum 1000 tokens have a chance of winning, the winners can choose a prize between $350,000 worth of PremiumToken or a premium car from our partners worth $350,000.
            </p>
          </div>
          <span className="market-cap text-success text-center">MARKET CAP</span>
        </div>

        <SmoothFlipCounter initialValue={123456} settings={counterSettings} />

        <div className="subtitle">
          <span className="process">
            The smart contract will draw the next winner at $60 million market cap!
          </span>
        </div>
      </div>

      <div className="winner_list position-relative">
        <div className="container">
          <div className="table_wallet_secn">
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
                <button type="button" className="btn btn-md btn-secondary"><span className="transform-none">Connect Wallet</span></button>
                {/* <ConnectButton/> */}
              </div>
            </div>

            {/* table slider */}
            <div className="table_slider my-32">
              <div className="prize_table">
                <CustomSlick slidesToShow={1} responsive={responsiveConfig}>
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
                        <td data-label="Prize Selected">
                          <div className="td_img">
                            <img src={premiumtoken} alt="premium" width={138} className="w-100"/>
                          </div>
                        </td>
                        <td data-label="Market Cap">$50M</td>
                        <td data-label="date">05-01-2024</td>
                        <td data-label="Wallet address">xfsde3eedsd1e12wdsadasd</td>
                        <td data-label="Chance of winning">0.001%</td>
                      </tr>
                      <tr>
                        <td data-label="Prize Selected">
                          <div className="td_img">
                            <img src={cartoken} alt="premium" />
                          </div>
                        </td>
                        <td data-label="Market Cap">$50M</td>
                        <td data-label="date">05-01-2024</td>
                        <td data-label="Wallet address">xfsde3eedsd1e12wdsadasd</td>
                        <td data-label="Chance of winning">0.001%</td>
                      </tr>
                      <tr>
                        <td data-label="Prize Selected">
                          <div className="td_img">
                            <img src={cartoken} alt="premium" />
                          </div>
                        </td>
                        <td data-label="Market Cap">$50M</td>
                        <td data-label="date">05-01-2024</td>
                        <td data-label="Wallet address">xfsde3eedsd1e12wdsadasd</td>
                        <td data-label="Chance of winning">0.001%</td>
                      </tr>
                      <tr>
                        <td data-label="Prize Selected">
                          <div className="td_img">
                            <img src={cartoken} alt="premium" />
                          </div>
                        </td> 
                        <td data-label="Market Cap">$50M</td>
                        <td data-label="date">05-01-2024</td>
                        <td data-label="Wallet address">xfsde3eedsd1e12wdsadasd</td>
                        <td data-label="Chance of winning">0.001%</td>
                      </tr>
                      <tr>
                        <td data-label="Prize Selected">
                          <div className="td_img">
                            <img src={cartoken} alt="premium" />
                          </div>
                        </td>
                        <td data-label="Market Cap">$50M</td>
                        <td data-label="date">05-01-2024</td>
                        <td data-label="Wallet address">xfsde3eedsd1e12wdsadasd</td>
                        <td data-label="Chance of winning">0.001%</td>
                      </tr>
                    </tbody>
                  </table>

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
                        <td data-label="Prize Selected">
                          <div className="td_img">
                            <img src={premiumtoken} alt="premium" />
                          </div>
                        </td>
                       <td data-label="Market Cap">$50M</td>
                        <td data-label="date">05-01-2024</td>
                        <td data-label="Wallet address">xfsde3eedsd1e12wdsadasd</td>
                        <td data-label="Chance of winning">0.001%</td>
                      </tr>
                      <tr>
                        <td data-label="Prize Selected">
                          <div className="td_img">
                            <img src={cartoken} alt="premium" />
                          </div>
                        </td>
                        <td data-label="Market Cap">$50M</td>
                        <td data-label="date">05-01-2024</td>
                        <td data-label="Wallet address">xfsde3eedsd1e12wdsadasd</td>
                        <td data-label="Chance of winning">0.001%</td>
                      </tr>
                      <tr>
                        <td data-label="Prize Selected">
                          <div className="td_img">
                            <img src={cartoken} alt="premium" />
                          </div>
                        </td>
                        <td data-label="Market Cap">$50M</td>
                        <td data-label="date">05-01-2024</td>
                        <td data-label="Wallet address">xfsde3eedsd1e12wdsadasd</td>
                        <td data-label="Chance of winning">0.001%</td>
                      </tr>
                      <tr>
                        <td data-label="Prize Selected">
                          <div className="td_img">
                            <img src={cartoken} alt="premium" />
                          </div>
                        </td>
                        <td data-label="Market Cap">$50M</td>
                        <td data-label="date">05-01-2024</td>
                        <td data-label="Wallet address">xfsde3eedsd1e12wdsadasd</td>
                        <td data-label="Chance of winning">0.001%</td>
                      </tr>
                      <tr>
                        <td data-label="Prize Selected">
                          <div className="td_img">
                            <img src={cartoken} alt="premium" />
                          </div>
                        </td>
                        <td data-label="Market Cap">$50M</td>
                        <td data-label="date">05-01-2024</td>
                        <td data-label="Wallet address">xfsde3eedsd1e12wdsadasd</td>
                        <td data-label="Chance of winning">0.001%</td>
                      </tr>
                    </tbody>
                  </table>
                </CustomSlick>
              </div>
            </div>
          </div>
        </div>
        <div className="prize_secn_bg">
          <img width={1920} height={1596} className="w-100" alt="" src={ICONS.PrizeBannerBg} />
          <img src={ICONS.PrizeBgMobile} width={500} height={400} alt="" className="d-block d-md-none" />
        </div>
      </div>
    </section>

  );
};

export default WinnerSection;
