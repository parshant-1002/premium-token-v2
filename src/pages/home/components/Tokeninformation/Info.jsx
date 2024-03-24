import SafeHTML from "../../../../shared/components/SanitizeHtml";
import  "./Info.scss";

const Info = ({ image, title = "" }) => {
  return (
    <div className="airdrop-list">
      <div className="airdrop-image">
      <img loading="lazy" alt="" src={image} />
      </div>
      <div className="airdrop-list-text" >
        <p><SafeHTML html = {title}/> </p>
      </div>
    </div>
  );
};

export default Info;
