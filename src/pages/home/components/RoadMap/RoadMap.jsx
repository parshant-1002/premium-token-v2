import { ICONS } from "../../../../assets";
import { CustomSlick } from "../../../../shared/components/CustomSlick";
import "./style.scss";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { useSelector } from "react-redux";

const RoadMap = ({content = {}}) => {
  const blockChainData = useSelector((store) => store.contentManagementReducer.blockChainData)
  console.log(blockChainData,"blockChainData")
  const{title, roadMap} = content
  const responsiveConfig = [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: false,
      }
    },
  ]

  return (
    <section className="position-relative roadMap_sec">

      <div className="container">

        <div className="road_title text-md-start text-center">
          <h2 className="h2 mb-0"><SafeHTML html={title}/></h2>
        </div>
      </div>

      <div className="roadmap_wrap">
        <CustomSlick slidesToShow={6} responsive={responsiveConfig}>
          {roadMap?.map((item, index)=>{
            return <div key={item?._id} className={`timeline-item ${item?.level <= blockChainData?.roadMapLevel ? "active" : ""}`}>
                <div className="timeline_block text-start text-md-center">
                  <h6 className="h6"><SafeHTML html={item?.title}/></h6>
                <span><SafeHTML html={item?.completionTitle} /> <span className="text-success"><SafeHTML html={`${item?.completionTime} days`} /></span></span>
                <p><SafeHTML html={item?.description} /></p>
                </div>
                <svg className="line" width="221" height="31" viewBox="0 0 221 31" fill="none">
                  <path d="M221 1.0081C181 1.0081 152.5 30 110 30C68.5 30 40 1 0 1" stroke="#10312D" strokeWidth={8} />
                </svg>

            </div>
          })}
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
