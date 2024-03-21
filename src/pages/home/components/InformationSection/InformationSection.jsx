import { Icons } from "react-toastify";
import { CustomSlick } from "../../../../shared/components/CustomSlick";
import { InformationCard } from "../InformationCard";
import "./InformationSection.scss";
import { ICONS } from "../../../../assets";

const InformationSection = () => {
  const responsiveConfig =  [
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
            How to win a 350,000€ prize
          </h2>
        </div>
        <div className="card-slider-row">
          <CustomSlick slidesToShow={1} responsive={responsiveConfig}>
          <InformationCard
            illustration="/card-image-1.png"
            title="Buy premiumtoken"
            prop="1"
          />
          <InformationCard
             illustration="/card-image-2.png"
             title="Hold minimum of 1000 tokens in you wallet and get a chance to win a $350,000 prize"
             prop="2"
          />
          <InformationCard
          
            illustration="/Investment.png"
               title="The smart contract draws a new winners automatic at each $10 million market cap"
               prop="3"
          />
           <InformationCard
                illustration="/time-interval.png"
               title="The longer you hold PremiumToken, and the more PremiumTokens you have, the bigger chance of winning."
               prop="4"
          />
          </CustomSlick>
          
        </div>
      </div>
     
    </section>
  );
};

export default InformationSection;
