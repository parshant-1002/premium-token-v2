import { ICONS } from "../../../../assets";
import "./ConnectionCreator.scss";

const ConnectionCreator = () => {
  return (
    <section className="connection-creator position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 connection-text">
            <div className="maker-text-col">
              <div className="inner-text-column">
                <h2 className="h2 text-center common_title">Token Info</h2>
                <p className="text-center">Here below can you easily see and copy PremiumtToken’s contract address, if you wish to buy tokens or add the token to your wallet. You can also check PremiumToken on Solscan.io or view the externa audit!</p>
              </div>
              <button className="link-button">
                <img
                  className=""
                  alt=""
                  src="/copy.svg"
                />
                <span>
                  xfsde3eedsd1e12wdsadasd
                </span>
              </button>
              <div className="token-info-button">
                <button className="download-document btn btn-md btn-secondary">
                  <span>PremiumToken on Solscan.io</span>
                </button>
                <button className="download-document btn btn-md btn-secondary">
                  <span>View the External Audit</span>
                </button>
              </div>

            </div>
          </div>
          <div className="col-md-6">
            <div className="maker-image text-end">
              <img loading="lazy" alt="" src="/img@2x.png" />
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
