import { left } from "@popperjs/core";
import { ICONS } from "../../../../assets";
import { CustomSlick } from "../../../../shared/components/CustomSlick";
import "./style.scss";

const RoadMap = () => {
  const responsiveConfig = [
    {
      breakpoint: 468,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true, 
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
      }
    },
    {
      breakpoint: 1580,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
      }
    },    
  ]

  return (
    <section className="position-relative roadMap_sec">

      <div className="container">

        <div className="road_title text-md-start text-center">
          <h2 className="h2 mb-0">Roadmap of PremiumToken</h2>
        </div>
      </div>

      <div className="roadmap_wrap">
        <CustomSlick slidesToShow={6} responsive={responsiveConfig}>
          {/* <div className="timeline-item first-timeline">
            <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none">
              <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#A7D7CF" strokeWidth={8} />
            </svg>
          </div> */}

          <div className="timeline-item active">
            <div className="timeline_block text-start text-md-center">
              <h6 className="h6">Reach 1000 holders</h6>
              <span>Completed after: <span className="text-success">3 days</span></span>
              <p>We aim and hope we will reach this goal rather quickly.</p>
            </div>
            <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none">
              <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
            </svg>
          </div>

          <div className="timeline-item">
            <div className="timeline_block text-start text-md-center">
              <h6 className="h6">Reach $10 million market cap</h6>
              <span>Completed after: <span className="text-success">7 days</span></span>
              <p>We want to reach this goal as quicky as possible so we can give our first prize to a lucky winner, to show all individuals and holders that we are serious and here for the long run!.</p>
            </div>
            <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
            </svg>
          </div>

          <div className="timeline-item">
            <div className="timeline_block text-start text-md-center">
              <h6 className="h6">Reach 5000 holders</h6>
              <span>Completed after: <span className="text-success">9 days</span></span>
              <p>Hopefully after new individuals and holders have seen that we are serious and force to be recoon with, this goal will be completed rather fast.</p>
            </div>
            <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
            </svg>
          </div>

          <div className="timeline-item">
            <div className="timeline_block text-start text-md-center">
              <h6 className="h6">Reach $50 million market cap</h6>
              <span>Completed after: <span className="text-success">18 days</span></span>
              <p>This is a big but still small milestone of the plans we have in store for Premiumtoken. With ou r growing community, we are hoping to reach this the first month of launch.</p>
            </div>
            <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
            </svg>
          </div>
          <div className="timeline-item">
            <div className="timeline_block text-start text-md-center">
              <h6 className="h6">Reach 1000 holders</h6>
              <span>Completed after: <span className="text-success">3 days</span></span>
              <p>We aim and hope we will reach this goal rather quickly.</p>
            </div>
            <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
            </svg>
          </div>
          <div className="timeline-item">
            <div className="timeline_block text-start text-md-center">
              <h6 className="h6">Reach 1000 holders</h6>
              <span>Completed after: <span className="text-success">3 days</span></span>
              <p>We aim and hope we will reach this goal rather quickly.</p>
            </div>
            <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
            </svg>
          </div>
          <div className="timeline-item">
            <div className="timeline_block text-start text-md-center">
              <h6 className="h6">Reach 1000 holders</h6>
              <span>Completed after: <span className="text-success">3 days</span></span>
              <p>We aim and hope we will reach this goal rather quickly.</p>
            </div>
            <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
            </svg>
          </div>
          <div className="timeline-item">
            <div className="timeline_block text-start text-md-center">
              <h6 className="h6">Reach 1000 holders</h6>
              <span>Completed after: <span className="text-success">3 days</span></span>
              <p>We aim and hope we will reach this goal rather quickly.</p>
            </div>
            <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
            </svg>
          </div>

          <div className="timeline-item">
            <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none">
              <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
            </svg>
          </div>

        </CustomSlick>
      </div>

      <div className="roadmap_bg">
        <img width={749} height={882} className="img-fluid d-none d-md-block" alt="background" src={ICONS.RoadMapBG} />
        <img width={375} height={858} className="img-fluid d-block d-md-none" alt="background" src={ICONS.RoadMapMobileBG} />
      </div>
    </section>
  );
};

export default RoadMap;
