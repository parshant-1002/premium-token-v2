import Card from "../Card";
import "./MarketPlace.scss";
import arrow from '../../../../../public/rightarrow.svg';
import { ICONS } from "../../../../assets";
import { CustomSlick } from "../../../../shared/components/CustomSlick";

const MarketPlace = () => {
  const responsiveConfig = [
    { 
      breakpoint: 55000,
      settings: "unslick"
    },
    { 
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
      }
    },
    { 
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
      }
    },
  ]
  return (
    <section className="marketplace_sec position-relative">
      <div className="container">
        <div className="heading_title text-left text-lg-center">
          <h2 className="h2">Premium marketplace</h2>
          <p>In the near future we aim to launch a market place for luxury and premium cars from our partners, where our token holders can buy this cars for PremiumToken!</p>
        </div>
        <div className="market-row">
          <CustomSlick slidesToShow={3} responsive={responsiveConfig}>
            <div className="market-col">
              <Card car="/car@2x.png" />
            </div>
            <div className="market-col">
              <Card car="/car@2x.png" />
            </div>
            <div className="market-col">
              <Card car="/car@2x.png" />
            </div> 
          </CustomSlick>
        </div>

        <div className="text-center">
          <button type="button" className="btn btn-md btn-secondary mw-240">
            <span className="transform-none">
              Coming soon
              <em className="ms-3"><img src={arrow} alt="premium" width={14} height={8} /></em>
            </span>
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
