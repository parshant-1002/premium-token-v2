import "./InformationCard.scss";
import { RenderIconWithHover } from "../../../../shared/components/RenderIconWithHover";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { addBaseUrlToUrls } from "../../../../shared/utilities";

const InformationCard = ({
  illustration,
  title,
  prop,
  item
}) => {
  console.log(illustration, "item<><><><><")
  return (
    <div className="col-lg-3">
      <div className="card-box-green position-relative">
        <div className="card-counter">
          <span className="card-counter-no">
            {prop}
          </span>
        </div>
        <div className="card-img">
          <RenderIconWithHover iconUrl={illustration} width = {225} height = {188}/>
        </div>
        <SafeHTML html={title} />
        <div className="w-100 text-center btn_contain">
          <button type="button" className="btn btn-md btn-secondary">
            <span className="transform-none">Connect Wallet</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
