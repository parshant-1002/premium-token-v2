

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
        <section className="video-banner position-relative py-72">
            <div className="container">
                <div className="video-banner--info text-center">
                    <h1 className="h1"><SafeHTML html={title} /></h1>
                    <div className="video-banner-description">
                        <p>
                            <SafeHTML html={description} />
                        </p>
                    </div>
                </div>
                <div className="videoSecn position-relative">
                    <div className="wrapperVideo">
                        <div className="video_home ratio ratio-16x9">
                            <video src={videoUrl} key={videoUrl} width={1140} height={400} />
                        </div>
                        <button className="play_btn" onClick={handlePlay}>
                            <img
                                className="playButtonIcon"
                                alt=""
                                src="/play-button.svg"
                            />
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