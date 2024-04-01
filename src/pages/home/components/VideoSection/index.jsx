

import { useEffect, useState } from "react";
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import "./video-banner.scss";
import { useSelector } from "react-redux";
import { SectionTypes } from "../../helpers/contentManagement";

const VideoSection = ({ content = {} }) => {
    const [updatedContent, setUpdatedContent] = useState(content)
    const socketData = useSelector((store) => store.contentManagementReducer.socketContentData)
    const { title, description } = updatedContent;

    const [isVideoPaused, setIsVideoPaused] = useState(true)

    useEffect(()=>{
        setUpdatedContent(content)
      },[content])

    useEffect(() => {
        if (Object.keys(socketData)?.length) {
            setUpdatedContent((prev) => ({ ...prev, ...socketData?.[SectionTypes.VIDEO_SECTION] }))
        }
    }, [socketData])

    const handlePlay = () => {
        const video = document.querySelector("video");
        if (isVideoPaused) {
            video.play();
            video.controls = true
        }
        else {
            video?.pause()
            video.controls = false
        }
        setIsVideoPaused(!isVideoPaused)
    }

    function hideIcon() {
        setIsVideoPaused(false)
        document.getElementById('video').controls = true;
    }

    function showIcon() {
        setIsVideoPaused(true)
        document.getElementById('video').controls = false;
    }

    return (
        <section className="video-banner position-relative">
            <div className="container">
                <div className="heading_title text-center">
                    <h1 className="h2"><SafeHTML html={title} /></h1>
                    <p><SafeHTML html={description} /></p>
                </div>

                <div className="d-flex justify-content-center align-content-center">
                    <div className="wrapperVideo">
                        <div className="video_home">
                            <video id="video" src={addBaseUrlToUrls(content?.videoUrl)} key={content?.videoUrl} onPlay={hideIcon} onPause={showIcon} onEnded={showIcon} height={500} />
                            {isVideoPaused && <button className="play_btn" onClick={handlePlay} id="play_icon">
                                <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
                                    <g clipPath="url(#clip0_124_5224)">
                                        <path d="M3.84961 43.9998V15.4169C3.84961 3.57476 16.6715 -3.83306 26.9152 2.09663L51.6824 16.3966L76.4496 30.6966C86.7105 36.6091 86.7105 51.4248 76.4496 57.3373L51.6824 71.6373L26.9152 85.9373C16.6715 91.8326 3.84961 84.442 3.84961 72.5998V43.9998Z" fill="#A7D7CF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_124_5224">
                                            <rect width="88" height="88" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="video_banner_bg">
                <img width={1300} height={978}
                    className="large-video-banner d-md-block d-none"
                    alt="desktop-banner"
                    src={ICONS.VideoBanner}
                />
                <img width={510} height={385}
                    className="mobile-video-banner d-block d-md-none"
                    alt="Mobile-banner"
                    src={ICONS.Mobile_banner}
                />
            </div>
        </section>
    );
};

export default VideoSection;