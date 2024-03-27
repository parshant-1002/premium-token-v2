import { useEffect, useState } from "react";
import { ICONS } from "../../../../assets";
import "./footer.scss";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import WinnerPopup from "../Header/WinnerPopup/WinnerPopup";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../shared/constants/routes";

const Footer = ({ content = {}, partnersContent = {} }) => {
  const { premiumTokenTitle, viewChartButton, buyTokenButton, email } = content

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${isScrolled ? 'footer-sticky' : ''}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 order-1">
            <div className="footer_logo text-lg-start text-center">
              <img src={addBaseUrlToUrls(premiumTokenTitle)} alt="Premium" width={147} />
            </div>
          </div>

          <div className="col-lg-4 order-3 order-lg-2">
            <div className="d-flex justify-content-center gap-2">
              <button type="button" className="btn btn-md btn-primary" onClick={() => window.open(viewChartButton?.url, '_blank')}><span className="transform-none"><SafeHTML html={viewChartButton?.text} /></span></button>
              <button type="button" className="btn btn-md btn-secondary"><span className="transform-none"><SafeHTML html={buyTokenButton?.text} /></span></button>
            </div>
          </div>

          <div className="col-lg-4 text-center text-lg-end order-2 order-lg-3">
            <div className="email_group">
              <span to="mailto:support@beaverswap.com" rel="follow">
                <em className="me-2">
                  <img src={addBaseUrlToUrls(email?.imageUrl)} alt="Email" width={20} height={20} />
                </em> <SafeHTML html={email?.emailAddress} />
              </span>
            </div>
          </div>
        </div>

        <div className="footer_btm">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start order-2 order-md-1">
              <span className="copyright_text"><SafeHTML html={content?.reservedRight} /></span>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <div className="text-center d-flex justify-content-center justify-content-md-end footer_links">
                <Link to={ROUTES.TERMS_AND_CONDITIONS}>
                  <SafeHTML html={content?.terms} />
                </Link>
                <Link to={ROUTES.PRIVACY_POLICY}>
                  <SafeHTML html={content?.privacy} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
