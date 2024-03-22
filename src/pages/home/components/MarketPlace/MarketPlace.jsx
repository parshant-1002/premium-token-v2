import Card from "../Card";
import "./MarketPlace.scss";
import arrow from '../../../../../public/rightarrow.svg';
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { Each } from "../../../../shared/components/Each";

const MarketPlace = ({content = {}}) => {
  const{cars, description, title} = content
  console.log(content,"marketplace")
  return (
    <section className="marketplace position-relative">
      <div className="container">
        <div class="heading_title market-place-para text-center">
          <h2 className="h2 common_title"><SafeHTML html={title}/></h2>
          <div class="description">
            <p class="mb-0"><SafeHTML html={description} /></p>
          </div>
        </div>        
        <div className="market-row">
          <Each of={cars} render={(item, index) => (
            <div className="market-col">
              <Card car={item} />
            </div>
          )}/>

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
