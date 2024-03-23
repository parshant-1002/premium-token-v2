import Card from "../Card";
import "./MarketPlace.scss";
import arrow from '../../../../../public/rightarrow.svg';
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { CustomSlick } from "../../../../shared/components/CustomSlick";

const MarketPlace = ({ content = {} }) => {
  const { cars, description, title } = content

  const responsiveConfig = [
    {
      breakpoint: 55000,
      settings: "unslick"
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
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
          <h2 className="h2"><SafeHTML html={title} /></h2>
          <p><SafeHTML html={description} /></p>
        </div>
        <div className="market-row">
          <CustomSlick slidesToShow={3} responsive={responsiveConfig}>
            {
              cars?.map((item) =>
                <div className="market-col">
                  <Card car={item} />
                </div>
              )
            }
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
