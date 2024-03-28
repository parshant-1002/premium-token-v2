import SmoothFlipCounter from "../../FlipNumbers";
import "./WinnerSection.scss";
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import WinnerTable from "../WinnerTableSlider/WinnerTable";
import ConnectButton from "../ConnectButton/ConnectButton";
import "./WinnerSection.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlockChainData } from "../../../../store/actions/contentManagement";
import { STATUS } from "../../../../shared/constants";
import { replaceTagWithValue } from "./helpers/utils";
import { SectionTypes } from "../../helpers/contentManagement";

const WinnerSection = ({ content = {}, socket }) => {
  const [updatedContent, setUpdatedContent] = useState(content)
  const socketData = useSelector((store) => store.contentManagementReducer.socketContentData)
  // props destructuring
  const { marketCap, latestWinnerDetails, prizeDescription, tokenHolderText, prize } = updatedContent;

  //hooks
  const [blockChainData, setBlockChainData] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBlockChainData((data, status) => {
      if (status === STATUS.SUCCESS) {
        setBlockChainData(data)
      }
    }))
  }, [])

  useEffect(() => {
    if (Object.keys(socketData).length) {
      setUpdatedContent((prev)=> ({...prev, ...socketData?.[SectionTypes.PRIZE_SECTION]}))
    }
  }, [socketData])


  const counterSettings = {
    digits: 7,
    delay: 200,
    direction: 'rtl',
    arrows: true,
  };
  return (
    <section className="winner_counter">
      <div className="container">
        <div className="heading_title text-center">
          <h2 className="h2">
            <SafeHTML html={latestWinnerDetails?.title} />
          </h2>
          <p><SafeHTML html={latestWinnerDetails?.description} /></p>
          <span className="market-cap text-success"><SafeHTML html={marketCap?.title} /></span>
        </div>

        <SmoothFlipCounter initialValue={blockChainData?.marketCap || 0} settings={counterSettings} socket={socket} />

        <div className="subtitle">
          <span className="process">
            <SafeHTML html={marketCap?.description}/>
          </span>
        </div>
      </div>

      <div className="winner_list position-relative">
        <div className="container">
          <div className="table_wallet_secn">
            <div className="tableHeaderinfo d-flex flex-md-row flex-column justify-content-md-between align-items-md-center">
              <div className="loopControl">
                <div className="d-flex gap-1">
                  <span className="text-white"><SafeHTML html={tokenHolderText} /></span>
                  <span className="text-success text-value">{blockChainData?.automaticTokenHolder}</span>
                </div>
              </div>
              <div className="wallet-link align-items-center d-flex gap-3">
                <div className="output">
                  <span className="text-white">{prizeDescription}</span>
                </div>
                <ConnectButton connectWalletButtonText={content?.connectWalletButtonText} />
              </div>
            </div>

            {/* table slider */}
            <div className="table_list">
              <div className="prize_table">
                <WinnerTable socket={socket} prize={prize} content = {content}/>
              </div>
            </div>
          </div>
        </div>
        <div className="prize_secn_bg d-none d-lg-block">
          <img width={1920} height={1596} className="w-100" alt="" src={ICONS.PrizeBannerBg} />
        </div>
      </div>
    </section>

  );
};

export default WinnerSection;
