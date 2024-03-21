

import "./video-banner.scss";
import { ICONS } from '../../../../assets';

const VideoSection = () => {
    return (
        <section className="video-banner position-relative py-72">         
            <div className="container">
                <div className="video-banner--info text-center">
                    <h1 className="h1">PlatinumCars explains about PremiumToken</h1>
                    <div className="video-banner-description">
                        <p>
                            Watch our partner PlatinumCars, one of the biggest premium car dealerships in Sweden, talk and explain about how PremiumToken works and how you can win a $350,000 premium car from them.
                            </p>
                    </div>
                </div>
                {/* <div class="ratio ratio-16x9 videoSecn">
                    <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" controls title="YouTube video" allowfullscreen></iframe>
                </div> */}
                <div className="videoSecn position-relative">
                    <div className="wrapperVideo">
                        <img className="videoIcon img-fluid" alt="BannerVideo" src="/banner-video.png" />
                        <span className="play_icon">
                    <img
                        className="playButtonIcon"
                        alt=""
                        src="/play-button.svg"
                    />
                    </span>
                    </div>
                  
                   
                </div>
            </div>
            {/* bg banner floating */}          
            <div className="video_banner_bg">
                <img width={1300} height={978 }
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
