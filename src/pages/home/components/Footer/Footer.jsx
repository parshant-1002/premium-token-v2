import { useEffect, useState } from "react";
import "./footer.scss";
import { addBaseUrlToUrls, redirectToUrlInNewTab } from "../../../../shared/utilities";
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
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;
      const bottomOffset = 300; // Adjust this value as needed

      if (scrollPosition > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (scrollPosition + windowHeight >= bodyHeight - bottomOffset) {
        // Add a class to the footer when reaching the bottom
        document.querySelector('footer').classList.add('add_sticky');
      } else {
        // Remove the class if not at the bottom
        document.querySelector('footer').classList.remove('add_sticky');
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

          <div className="col-lg-4 order-3 order-lg-2 btn_sticky">
            <div className="d-flex justify-content-center gap-2">
              <button type="button" className="btn btn-md btn-primary" onClick={() => window.open(viewChartButton?.url, '_blank')}><span className="transform-none"><SafeHTML html={viewChartButton?.text} /></span></button>
              <button type="button" className="btn btn-md btn-secondary" onClick={() => redirectToUrlInNewTab(buyTokenButton?.url)}><span className="transform-none"><SafeHTML html={buyTokenButton?.text} /></span></button>
            </div>
          </div>

          <div className="col-lg-4 text-center text-lg-end order-2 order-lg-3">
            <div className="email_group">
              <a href="mailto:support@beaverswap.com">
                <em className="me-2">
                  <img src={addBaseUrlToUrls(email?.imageUrl)} alt="Email" width={20} height={20} />
                </em> <SafeHTML html={email?.emailAddress} />
              </a>
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
