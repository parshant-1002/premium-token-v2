import { CustomSlick } from "../../../../shared/components/CustomSlick";
import { InformationCard } from "../InformationCard";
import "./InformationSection.scss";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { Each } from "../../../../shared/components/Each";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import { ICONS } from "../../../../assets";

const InformationSection = ({ content = {} }) => {
  const { rulesToWin, title } = content;
  const responsiveConfig = [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
				dots: true,
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
				dots: true,
      }
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
                  prop={index}
                  item={item}
                />)}
            </CustomSlick>
          </div>
        </div>
        <div className="win_bg">
          <img src={ICONS.WinBg} width={500} height={400} alt="" className="d-none d-md-block" /> 
        </div>
      </section>
    );
  };

  export default InformationSection;
