

import SafeHTML from "../../../../shared/components/SanitizeHtml";
import "./video-banner.scss";

const VideoSection = ({content = {}}) => {
    const{title, description, videoUrl} = content;

    const handlePlay = ()=>{
        const video = document.querySelector("video");
        if(video.paused){
            video.play();
        }
        else{
            video.pause()
        }
    }
    return (
        <section className="video-banner position-relative py-72">         
            <div className="container">
                <div className="video-banner--info text-center">
                    <h1 className="h1"><SafeHTML html={title}/></h1>
                    <div className="video-banner-description">
                        <p>
                            <SafeHTML html={description}/>
                        </p>
                    </div>
                </div>
                <div className="videoSecn position-relative">
                    <div className="wrapperVideo">
                        <video src={videoUrl} key={videoUrl}/>
                        <span className="play_icon" onClick={handlePlay}>
                            <img
                                className="playButtonIcon"
                                alt=""
                                src="/play-button.svg"
                            />
                        </span>
                    </div>
                  
                   
                </div>
            </div>
               
        </section>
    );
};

export default VideoSection;
