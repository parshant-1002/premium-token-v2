// componentsdiv
import { Header } from "./components/Header";
import { InformationSection } from "./components/InformationSection";
import { DataAggregator } from "./components/DataAggregator";
import { WinnerSection } from "./components/WinnerSection";
import { RoadMap } from "./components/RoadMap";
import { ConnectionCreator } from "./components/ConnectionCreator";
import { ConnectionMaker } from "./components/ConnectionMaker";
import { Featured } from "./components/Featured";
import { MarketPlace } from "./components/MarketPlace";
import { Tokeninformation } from "./components/Tokeninformation";
import { Partners } from "./components/Partners";
import { Footer } from "./components/Footer";
import { SocialMedia } from "./components/SocialMedia";
import VideoSection from "./components/VideoSection";
import { PremiumToken } from "./components/PremiumToken";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getContent } from "../../store/actions/contentManagement";
import { DidYouWin } from "./components/DidYouWin";
import Airdrop from "./components/Tokeninformation/Airdrop";
import useSocket from "../../shared/hooks/useSocket";
import { STATUS } from "../../shared/constants";
import { DEFAULT_CONTENT, SectionTypes } from "./helpers/contentManagement";
import { merge } from "lodash";
const Home = () => {
  const[content, setContent] = useState(DEFAULT_CONTENT)
  const dispatch = useDispatch()
  const socket = useSocket();

  useEffect(()=>{ 
    dispatch(getContent({},(data, status)=>{
      if(status === STATUS.SUCCESS){
        const mergedContent = merge({}, DEFAULT_CONTENT, data);
        setContent(mergedContent)
      }
    }))
  },[])

  const getContentData = ((sectionType)=>{
    return content?.[sectionType]
  })
  
  return (
    <>
      <Header content={getContentData(SectionTypes.HEADERS)} partnersContent={getContentData(SectionTypes.PARTNERS)}/>
      <VideoSection content={getContentData(SectionTypes.VIDEO_SECTION)} />
      <div className="mobile_bg">
        <InformationSection content={getContentData(SectionTypes.PRIZE_SECTION)} buyTokenButton={getContentData(SectionTypes.HEADERS)?.buyTokenButton}/>
        <WinnerSection content={{ ...getContentData(SectionTypes.PRIZE_SECTION), ...getContentData(SectionTypes.WINNER_LIST_SECTION) }} socket={socket} />
      </div>
      <DidYouWin content={getContentData(SectionTypes.WINNER_RULES_SECTION)} />
      <DataAggregator content={getContentData(SectionTypes.CONTRACT_DETAILS)} />
      <RoadMap content={getContentData(SectionTypes.ROADMAP_SECTION)} />
      <PremiumToken content={getContentData(SectionTypes.PREMIUM_TOKEN_WALLET)} />
      <Featured content={getContentData(SectionTypes.FEATURE_SECTION)} />
      <ConnectionCreator content={getContentData(SectionTypes.TOKEN_INFO)} />
      <ConnectionMaker content={getContentData(SectionTypes.EXTERNAL_AUDIT)} />
      <MarketPlace content={getContentData(SectionTypes.PREMIUM_MARKET_PLACE)} />
      <Tokeninformation content={getContentData(SectionTypes.TOKEN_SUPPLY)} />
      <Airdrop content={getContentData(SectionTypes.JOIN_AIRDROP)} />
      <Partners content={getContentData(SectionTypes.PARTNERS)} />
      < SocialMedia content={getContentData(SectionTypes.FOOTERS)} />
      <Footer content={{ ...getContentData(SectionTypes.FOOTERS), ...getContentData(SectionTypes.HEADERS) }} partnersContent={getContentData(SectionTypes.PARTNERS)} />
      </>
  );
};

export default Home;
