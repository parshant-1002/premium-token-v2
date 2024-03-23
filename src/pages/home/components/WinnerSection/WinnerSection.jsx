import SmoothFlipCounter from "../../FlipNumbers";
import "./WinnerSection.scss";
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import WinnerTable from "../WinnerTableSlider/WinnerTable";
import ConnectButton from "../ConnectButton/ConnectButton";

const WinnerSection = ({content = {}, socket}) => {
  const { marketCap, latestWinnerDetails, connectWalletButtonText, prizeDescription, tokenHolderText }  = content;
  console.log(marketCap, latestWinnerDetails,"latestwinnerdetails")
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
            <SafeHTML html={latestWinnerDetails?.title}/>
          </h2>
          <div className="winner_counter_content">
            <p className="">
              <SafeHTML html={latestWinnerDetails?.description}/>
            </p>
          </div>
          <div className="market-cap text-success text-center"><SafeHTML html={marketCap?.title} /></div>
        </div>

        <SmoothFlipCounter initialValue={marketCap?.marketCapValue || 0} settings={counterSettings} socket = {socket}/>

        <div className="subtitle">
          <span className="process">
            <SafeHTML html={latestWinnerDetails?.description}/>
          </span>
        </div>
        {/* table secn */}
        <div className="table_wallet_secn mw-928">
          

        <div className="tableHeaderinfo d-flex flex-md-row flex-column justify-content-md-between align-items-md-center">
          <div className="loopControl">
            <div className="d-flex gap-1">
              <span className="text-white"><SafeHTML html={tokenHolderText} /></span>
              <span className="text-success text-value">4859</span>
            </div>
          </div>
          <div className="wallet-link align-items-center d-flex gap-3">
            <div className="output">
              <span className="text-white">{prizeDescription}</span>
            </div>
            {/* <button type="button" className="btn btn-md btn-secondary"><SafeHTML html={connectWalletButtonText}/></button> */}
            <ConnectButton connectWalletButtonText={connectWalletButtonText}/>
          </div>
        </div>
        {/* table slider */}
        <div className="table_slider my-32">
          <div className="prize_table">
              <WinnerTable socket = {socket}/>
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
