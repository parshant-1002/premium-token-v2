import { CustomSlick } from "../../../../shared/components/CustomSlick";
import { InformationCard } from "../InformationCard";
import "./InformationSection.scss";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { Each } from "../../../../shared/components/Each";
import { addBaseUrlToUrls } from "../../../../shared/utilities";

const InformationSection = ({ content = {} }) => {
  const { rulesToWin, title } = content;
    const responsiveConfig = [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024000,
        settings: "unslick"
      }
    ]
    return (
      <section className="prize_secn position-relative">
        <div className="container">
          <div className="heading_title text-center">
            <h2 className="h2 common_title">
              <SafeHTML html={title} />
            </h2>
          </div>
          <div className="card-slider-row">
            <CustomSlick slidesToShow={1} responsive={responsiveConfig}>
              <Each of={rulesToWin} render={(item, index) =>
                <InformationCard
                  illustration={addBaseUrlToUrls(item.imageUrl)}
                  title={item.description}
                  prop={index}
                  item={item}
                />
              } />
            </CustomSlick>

          </div>
        </div>

      </section>
    );
  };

  export default InformationSection;
