import { CustomSlick } from "../../../../shared/components/CustomSlick";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { ICONS } from "../../../../assets";
import { useSelector } from "react-redux";
import "./style.scss";

const RoadMap = ({content = {}}) => {
  const blockChainData = useSelector((store) => store.contentManagementReducer.blockChainData)
  // console.log(blockChainData,"blockChainData")
  const{title, currentActiveLevel, roadMap} = content
  const responsiveConfig = [
    {
      breakpoint: 1620,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
      }
    },
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 4,
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
      breakpoint: 767,
      settings: {
        vertical: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        infinite: false,
        arrows: false,
        dots: true,
        swipe: false,
      }
    },
  ]

  const calculateHeight = () => {
    if(window.innerWidth > 767) return;
    const items = document.querySelectorAll('.timeline-item');
    let totalHeight = 0;
    items.forEach((item, index) => {
      if (index < 5) { // Assuming you want to show 4 items
        totalHeight += item.offsetHeight;
      }
    });
    document.querySelector('.roadmap_wrap .slick-list').style.height = `${totalHeight}px`;
    // console.log(document.querySelector('.roadmap_wrap .slick-list').style.height = `${totalHeight}px`, '-- > Box Height');
  };
  // Call this function on page load and window resize
  window.onload = calculateHeight;
  window.onresize = calculateHeight;

  const modifiedRoadMap = [...roadMap, {}];

  return (
    <section className="position-relative roadMap_sec">

      <div className="container">

        <div className="road_title text-md-start text-center">
          <h2 className="h2 mb-0"><SafeHTML html={title}/></h2>
        </div>
      </div>

      <div className="roadmap_wrap">
        <CustomSlick slidesToShow={6} responsive={responsiveConfig}>
          {modifiedRoadMap?.map((item, index)=>{
            return <div key={`${item?._id}-${index}`} className={`timeline-item ${item?.level <= currentActiveLevel ? "active" : ""}`}>
                <div className="timeline_block text-start text-md-center">
                  <h6 className="h6"><SafeHTML html={item?.title}/></h6>
                  <span className="text-white"><SafeHTML html={item?.completionTitle} /> <span className="text-success"><SafeHTML html={`${item?.completionTime} days`} /></span></span>
                  <SafeHTML html={item?.description} />
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
