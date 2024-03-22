import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import "./ConnectionCreator.scss";

const ConnectionCreator = ({content = {}}) => {
  const { title, premiumTokenButtonText, imageUrl, externalAuditButtonText, description, address } = content
  console.log(content, "Connection")
  return (
    <section className="connection-creator position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 connection-text">
            <div className="maker-text-col">
              <div className="inner-text-column">
                <h2 className="h2 text-center common_title"><SafeHTML html={title}/></h2>
                <p className="text-center"><SafeHTML html={description}/></p>
              </div>
              <button className="link-button">
                <img
                  className=""
                  alt=""
                  src="/copy.svg"
                />
                <span>
                  <SafeHTML html={address} />
                </span>
              </button>
              <div className="token-info-button">
                <button className="download-document btn btn-md btn-secondary">
                  <span><SafeHTML html={premiumTokenButtonText} /></span>
                </button>
                <button className="download-document btn btn-md btn-secondary">
                  <span><SafeHTML html={externalAuditButtonText} /></span>
                </button>
              </div>

            </div>
          </div>
          <div className="col-md-6">
            <div className="maker-image text-end">
              <img loading="lazy" alt="" src={addBaseUrlToUrls(imageUrl)} />
            </div>
          </div>

        </div>
      </div>
      <div className="token_info_bg">
        <img width={1044} height={1097}
          className="img-fluid"
          alt="desktop-banner"
          src={ICONS.TokenInforBg}
        />
      </div>
    </section>
  );
};

export default ConnectionCreator;
