

import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import "./video-banner.scss";

const VideoSection = ({ content = {} }) => {
    const { title, description, videoUrl } = content;

    const handlePlay = () => {
        const video = document.querySelector("video");
        if (video.paused) {
            video.play();
        }
        else {
            video.pause()
        }
    }
    return (
        <section className="video-banner position-relative">
            <div className="container">
                <div className="video-banner--info text-center">
                    <h1 className="h2"><SafeHTML html={title} /></h1>
                    <div className="video-banner-description">
                        <p>
                            <SafeHTML html={description} />
                        </p>
                    </div>
                </div>
                <div className="position-relative">
                    <div className="wrapperVideo">
                        <div className="video_home ratio ratio-16x9">
                            <video src={videoUrl} key={videoUrl} width={1140} height={400} />
                        </div>
                        <button className="play_btn" onClick={handlePlay}>
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
                        </button>
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