import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { handleCopyLink } from "../../../../shared/constants/utils";
import { addBaseUrlToUrls, redirectToUrlInNewTab } from "../../../../shared/utilities";
import "./ConnectionCreator.scss";

const ConnectionCreator = ({ content = {} }) => {
  const { title, premiumTokenButton, imageUrl, externalAuditButton, description, address } = content
  return (
    <section className="connection-creator position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2 connection-text">
            <div className="maker-text-col">
              <div className="inner-text-column">
                <h2 className="h2 text-center common_title"><SafeHTML html={title} /></h2>
                <p className="text-center"><SafeHTML html={description} /></p>
              </div>
              <button className="link-button" onClick={() => handleCopyLink(address, "Address")}>
                <img
                  alt=""
                  src={ICONS.CopyIcon}
                  width={22} height={22}
                />
                <SafeHTML html={address} />
              </button>
              <div className="row gx-3">
                <div className="col-md-6 mb-3">
                  <button className="btn btn-md btn-secondary w-100" onClick={() => redirectToUrlInNewTab(premiumTokenButton.url)}>
                    <span className="transform-none"><SafeHTML html={premiumTokenButton?.text} /></span>
                  </button>
                </div>
                <div className="col-md-6 mb-md-3">
                  <button className="btn btn-md btn-secondary w-100" onClick={() => redirectToUrlInNewTab(premiumTokenButton.url)}> 
                    <span className="transform-none"><SafeHTML html={externalAuditButton?.text} /></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
            <figure className="maker-banner text-center text-lg-end mb-0">
              <img width={375} height={545} className="img-fluid" loading="lazy" alt="" src={addBaseUrlToUrls(imageUrl)} />
            </figure>
          </div>
        </div>
      </div>

      <div className="token_info_bg">
        <img width={1044} height={1097}
          className="d-none d-md-block img-fluid"
          alt="desktop-banner"
          src={ICONS.TokenInforBg}
        />
      </div>

    </section >
  );
};

export default ConnectionCreator;
