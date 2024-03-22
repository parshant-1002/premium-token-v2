// componentsdiv
import { Header } from "./components/Header";
import { InformationSection } from "./components/InformationSection";
import { DataAggregator } from "./components/DataAggregator";
import { WinnerSection } from "./components/WinnerSection";
import { RoadMap } from "./components/RoadMap";
// styles
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
import { SectionTypes } from "./helpers/constants";
const Home = () => {
  const[content, setContent] = useState({})
  const dispatch = useDispatch()

  useEffect(()=>{ 
    dispatch(getContent({},(data)=>{
      setContent(data)
    }))
  },[])

  const getContentData = ((sectionType)=>{
    return content?.[sectionType]
  })
  return (
    <>
      <Header content={getContentData(SectionTypes.HEADERS)} partnersContent={getContentData(SectionTypes.PARTNERS)}/>
      <VideoSection content={getContentData(SectionTypes.VIDEO_SECTION)} />
      <InformationSection content={getContentData(SectionTypes.PRIZE_SECTION)} />
      <WinnerSection content={getContentData(SectionTypes.WINNER_LIST_SECTION)} />
      <DidYouWin content={getContentData(SectionTypes.WINNER_RULES_SECTION)} />
      <DataAggregator content={getContentData(SectionTypes.CONTRACT_DETAILS)} />
      <RoadMap content={getContentData(SectionTypes.ROADMAP_SECTION)} />
      <PremiumToken content={getContentData(SectionTypes.PREMIUM_TOKEN_WALLET)} />
      <Featured content={getContentData(SectionTypes.FEATURES)} />
      <ConnectionCreator content={getContentData(SectionTypes.TOKEN_INFO)} />
      <ConnectionMaker content={getContentData(SectionTypes.EXTERNAL_AUDIT)} />
      <MarketPlace content={getContentData(SectionTypes.PREMIUM_MARKET_PLACE)} />
      <Tokeninformation content={getContentData(SectionTypes.TOKEN_SUPPLY)} />
      <Airdrop content={getContentData(SectionTypes.JOIN_AIRDROP)} />
      <Partners content={getContentData(SectionTypes.PARTNERS)} />
      < SocialMedia content={getContentData(SectionTypes.FOOTERS)} />
      <Footer content={getContentData(SectionTypes.FOOTERS)} />
    </>
  );
};

export default Home;
