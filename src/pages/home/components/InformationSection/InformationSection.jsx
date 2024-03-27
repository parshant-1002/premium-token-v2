import { CustomSlick } from "../../../../shared/components/CustomSlick";
import { InformationCard } from "../InformationCard";
import "./InformationSection.scss";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { Each } from "../../../../shared/components/Each";
import { addBaseUrlToUrls, redirectToUrlInNewTab } from "../../../../shared/utilities";
import { ICONS } from "../../../../assets";

const InformationSection = ({ content = {} }) => {
  const { rulesToWin, title, buyTokenButton} = content;
  const responsiveConfig = [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
				dots: true,
      }
    },
    {
      breakpoint: 120000000,
      settings: "unslick"
    }
  ]
    return (
      <section className="prize_secn position-relative">
        <div className="container">
          <div className="heading_title text-center">
            <h2 className="h2">
              <SafeHTML html={title} />
            </h2>
          </div>
          <div className="card-slider-row">
            <CustomSlick responsive={responsiveConfig}>
              {rulesToWin?.map((item, index)=><InformationCard
                  illustration={addBaseUrlToUrls(item.imageUrl)}
                  title={item.description}
                  prop={index + 1}
                  item={item}
                  buyTokenButton={index === 0 && buyTokenButton}
                />)}
            </CustomSlick>
          </div>
          {buyTokenButton &&
          <div className="w-100 text-center btn_contain mt-4 pt-2">
            <button type="button" className="btn btn-md btn-secondary text-capitalize" onClick={() => redirectToUrlInNewTab(buyTokenButton?.url)}><span className="text-white transform-none"><SafeHTML html={buyTokenButton?.text} /></span></button>
          </div>}
        </div>
        <div className="win_bg">
          <img src={ICONS.WinBg} width={500} height={400} alt="" className="d-none d-md-block" />
        </div>
      </section>
    );
  };

  export default InformationSection;
