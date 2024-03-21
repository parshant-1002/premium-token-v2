import Card from "../Card";
import "./MarketPlace.scss";
import arrow from '../../../../../public/rightarrow.svg';
import { ICONS } from "../../../../assets";

const MarketPlace = () => {
  return (
    <section className="marketplace position-relative">
      <div className="container">
        <div class="heading_title market-place-para text-center">
          <h2 className="h2 common_title">Premium marketplace</h2>
          <div class="description">
            <p class="mb-0">In the near future we aim to launch a market place for luxury and premium cars from our partners, where our token holders can buy this cars for PremiumToken!</p>
          </div>
        </div>        
        <div className="market-row">
          <div className="market-col">
            <Card car="/car@2x.png" />
          </div>
          <div className="market-col">
            <Card car="/car@2x.png" />
          </div>
          <div className="market-col">
            <Card car="/car@2x.png" />
          </div>
 


        </div>
        <div className="text-center">
          <button type="button" className="btn btn-md btn-secondary comming-soon">
            <span>Coming soon</span>
            <img src={arrow} alt="premium" />
          </button>
        </div>
      </div>
      <div className="car_slider_bg">
        <img width={1005} height={1720}
                        className="img-fluid "
                        alt="desktop-banner"
                        src={ICONS.CarSliderBG}
                />
      </div>	
    </section>
  );
};

export default MarketPlace;
