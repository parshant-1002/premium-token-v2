import SmoothFlipCounter from "../../FlipNumbers";
import "./WinnerSection.scss";
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import WinnerTable from "../WinnerTableSlider/WinnerTable";
import ConnectButton from "../ConnectButton/ConnectButton";
import "./WinnerSection.scss";

const WinnerSection = ({content = {}, socket}) => {
  const { marketCap, latestWinnerDetails, connectWalletButtonText, prizeDescription, tokenHolderText }  = content;
  console.log(marketCap, latestWinnerDetails,"latestwinnerdetails")
  const counterSettings = {
    digits: 7,
    delay: 200,
    direction: 'rtl',
    arrows: true,
  };


  return (
    <section className="winner_counter">
      <div className="container">
        <div className="heading_title text-center">
          <h2 className="h2">
            <SafeHTML html={latestWinnerDetails?.title}/>
          </h2> 
          <p><SafeHTML html={latestWinnerDetails?.description}/></p>
          <span className="market-cap text-success"><SafeHTML html={marketCap?.title} /></span>
        </div>

        <SmoothFlipCounter initialValue={marketCap?.marketCapValue || 0} settings={counterSettings} socket = {socket}/>

        <div className="subtitle">
          <span className="process">
            <SafeHTML html={latestWinnerDetails?.description}/>
          </span>
        </div>
      </div>

      <div className="winner_list position-relative">
        <div className="container">
          <div className="table_wallet_secn">
            <div className="tableHeaderinfo d-flex flex-md-row flex-column justify-content-md-between align-items-md-center">
              <div className="loopControl">
                <div className="d-flex gap-1">
                        <span className="text-white"><SafeHTML html={tokenHolderText}/></span>
                  <span className="text-success text-value">4859</span>
                </div>
              </div>
              <div className="wallet-link align-items-center d-flex gap-3">
                <div className="output">
                  <span className="text-white">{prizeDescription}</span>
                </div>
                {/* <button type="button" className="btn btn-md btn-secondary"><span className="transform-none">Connect Wallet</span></button> */}
                  <ConnectButton connectWalletButtonText={connectWalletButtonText} />
              </div>
            </div>

            {/* table slider */}
            <div className="table_slider">
              <div className="prize_table">
                <WinnerTable socket={socket} />
              </div>
            </div>
          </div>
        </div>
        <div className="prize_secn_bg d-none d-lg-block">
          <img width={1920} height={1596} className="w-100" alt="" src={ICONS.PrizeBannerBg} /> 
        </div>
      </div>
    </section>

  );
};

export default WinnerSection;
