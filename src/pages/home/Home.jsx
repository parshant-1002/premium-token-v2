// componentsdiv
import { Header } from './components/Header';
import { InformationSection } from './components/InformationSection';
import { DataAggregator } from './components/DataAggregator';
import { WinnerSection } from './components/WinnerSection';
import { RoadMap } from './components/RoadMap';
import { ConnectionCreator } from './components/ConnectionCreator';
import { ConnectionMaker } from './components/ConnectionMaker';
import { Featured } from './components/Featured';
import { MarketPlace } from './components/MarketPlace';
import { Tokeninformation } from './components/Tokeninformation';
import { Footer } from './components/Footer';
import { SocialMedia } from './components/SocialMedia';
import VideoSection from './components/VideoSection';
import { PremiumToken } from './components/PremiumToken';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContent,
  setSocketData,
} from '../../store/actions/contentManagement';
import { DidYouWin } from './components/DidYouWin';
import Airdrop from './components/Tokeninformation/Airdrop';
import useSocket from '../../shared/hooks/useSocket';
import { STATUS, STRINGS } from '../../shared/constants';
import { DEFAULT_CONTENT, SectionTypes } from './helpers/contentManagement';
import { merge } from 'lodash';
import { toast } from 'react-toastify';
const Home = () => {
  const [content, setContent] = useState(DEFAULT_CONTENT);
  const languageId = useSelector((store) => store.contentManagementReducer.languageId);
  const dispatch = useDispatch();
  const socket = useSocket();

  useEffect(() => {
    if (languageId){
      const payload = {
        languageId: languageId
      }
      getData(payload);
    }
  }, [languageId]);

  // useEffect(() => {
  //   if (socket) {
  //     socket.on('contentData', (data) => {
  //       dispatch(setSocketData(data?.data));
  //     });
  //   }
  // }, [socket]);

  const getData = (payload = {})=>{
    dispatch(
      getContent(payload, (data, status) => {
        if (status === STATUS.SUCCESS) {
          const mergedContent = merge({}, DEFAULT_CONTENT, data);
          setContent(mergedContent);
        }
        else{
          toast.error(STRINGS.SOMETHING_WENT_WRONG)
        }
      })
    );
  }

  const getContentData = useMemo(() => (sectionType) => content?.[sectionType], [content]);

  return (
    <>
      {getContentData(SectionTypes.HEADERS).isVisible && <Header
        content={getContentData(SectionTypes.HEADERS)}
        partnersContent={getContentData(SectionTypes.PARTNERS)}
        winnerPopup={getContentData(SectionTypes.WINNER_POPUP)}
        getData={getData}
      />}
      {getContentData(SectionTypes.VIDEO_SECTION).isVisible && (
        <VideoSection content={getContentData(SectionTypes.VIDEO_SECTION)} />
      )}
      <div className="mobile_bg">
        {getContentData(SectionTypes.PRIZE_SECTION).isVisible && (
          <InformationSection
            content={getContentData(SectionTypes.PRIZE_SECTION)}
          />
        )}
        {getContentData(SectionTypes.WINNER_LIST_SECTION).isVisible && (
          <WinnerSection
            content={{
              ...getContentData(SectionTypes.PRIZE_SECTION),
              ...getContentData(SectionTypes.WINNER_LIST_SECTION),
            }}
            socket={socket}
          />
        )}
      </div>
      {getContentData(SectionTypes.WINNER_RULES_SECTION).isVisible && (
        <DidYouWin
          content={getContentData(SectionTypes.WINNER_RULES_SECTION)}
          socket={socket}
        />
      )}
      {getContentData(SectionTypes.CONTRACT_DETAILS).isVisible && (
        <DataAggregator
          content={getContentData(SectionTypes.CONTRACT_DETAILS)}
        />
      )}
      {getContentData(SectionTypes.ROADMAP_SECTION).isVisible && (
        <RoadMap content={getContentData(SectionTypes.ROADMAP_SECTION)} />
      )}
      {getContentData(SectionTypes.PREMIUM_TOKEN_WALLET).isVisible && (
        <PremiumToken
          content={getContentData(SectionTypes.PREMIUM_TOKEN_WALLET)}
        />
      )}
      {getContentData(SectionTypes.FEATURE_SECTION).isVisible && (
        <Featured content={getContentData(SectionTypes.FEATURE_SECTION)} />
      )}
      {getContentData(SectionTypes.TOKEN_INFO).isVisible && (
        <ConnectionCreator content={getContentData(SectionTypes.TOKEN_INFO)} />
      )}
      {getContentData(SectionTypes.EXTERNAL_AUDIT).isVisible && (
        <ConnectionMaker
          content={getContentData(SectionTypes.EXTERNAL_AUDIT)}
        />
      )}
      {getContentData(SectionTypes.PREMIUM_MARKET_PLACE).isVisible && (
        <MarketPlace
          content={getContentData(SectionTypes.PREMIUM_MARKET_PLACE)}
        />
      )}
      {getContentData(SectionTypes.TOKEN_SUPPLY).isVisible && (
        <Tokeninformation content={getContentData(SectionTypes.TOKEN_SUPPLY)} />
      )}
      {getContentData(SectionTypes.JOIN_AIRDROP).isVisible && (
        <Airdrop content={getContentData(SectionTypes.JOIN_AIRDROP)} />
      )}
      {/* <Partners content={getContentData(SectionTypes.PARTNERS)} /> */}
      {getContentData(SectionTypes.FOOTERS).isVisible && (
        <SocialMedia content={getContentData(SectionTypes.FOOTERS)} />
      )}
      {getContentData(SectionTypes.FOOTERS).isVisible && (
        <Footer
          content={{
            ...getContentData(SectionTypes.FOOTERS),
            ...getContentData(SectionTypes.HEADERS),
          }}
          partnersContent={getContentData(SectionTypes.PARTNERS)}
        />
      )}
    </>
  );
};

export default Home;
