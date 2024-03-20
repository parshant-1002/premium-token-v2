import Card from "../Card";
import "./MarketPlace.scss";
import arrow from '../../../../../public/rightarrow.svg';

const MarketPlace = () => {
  return (
    <section className="marketplace">
      <div className="container">
        <div className="market-place-para">
          <h2 className="h2 text-center common_title">Premium marketplace</h2>
          <p className="text-center">In the near future we aim to launch a market place for luxury and premium cars from our partners, where our token holders can buy this cars for PremiumToken!</p>
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
    </section>
  );
};

export default MarketPlace;
