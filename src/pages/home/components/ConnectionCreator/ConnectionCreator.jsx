import { ICONS } from "../../../../assets";
import "./ConnectionCreator.scss";

const ConnectionCreator = () => {
  return (
    <section className="connection-creator position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2 connection-text">
            <div className="maker-text-col">
              <div className="inner-text-column">
                <h2 className="h2 text-center common_title">Token Info</h2>
                <p className="text-center">Here below can you easily see and copy PremiumtToken’s contract address, if you wish to buy tokens or add the token to your wallet. You can also check PremiumToken on Solscan.io or view the externa audit!</p>
              </div>
              <button className="link-button">
                <img className="" alt="" src="/copy.svg" width={22} height={22} />
                <span>xfsde3eedsd1e12wdsadasd</span>
              </button>
              <div className="row gx-3">
                <div className="col-md-6 mb-3">
                  <button className="btn btn-md btn-secondary w-100">
                    <span className="transform-none">PremiumToken on Solscan.io</span>
                  </button>
                </div>
                <div className="col-md-6 mb-3">
                  <button className="btn btn-md btn-secondary w-100">
                    <span className="transform-none">View the External Audit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-lg-2 order-1">
            <figure className="maker-banner text-center text-lg-end mb-0">
              <img width={375} height={545} className="img-fluid" loading="lazy" alt="" src="/img@2x.png" />
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

    </section>
  );
};

export default ConnectionCreator;
