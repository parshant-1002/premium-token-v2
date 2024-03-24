import { useEffect, useState } from "react";
import { ICONS } from "../../../../assets";
import "./footer.scss";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import SafeHTML from "../../../../shared/components/SanitizeHtml";

const Footer = ({content = {}}) => {
  const { premiumTokenTitle, viewChartButton, buyTokenButton, email } = content
  console.log(content,"content><><><><><><><>")
  
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
    <footer className={`footer bottom_footer ${isScrolled ? 'footer-sticky' : ''}`}>
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
              <button type="button" className="btn btn-md btn-primary" onClick={() => navigate(addBaseUrlToUrls(buyTokenButton?.url))}><span className="transform-none"><SafeHTML html={buyTokenButton?.text} /></span></button>
            </div>
          </div>

          <div className="col-lg-4 text-center text-lg-end order-2 order-lg-3">
            <div className="email_group">
              <span to="mailto:support@beaverswap.com" rel="follow">
                <em className="me-2">
                  <img src={addBaseUrlToUrls(email?.imageUrl)} alt="Email" width={20} height={20} />
                </em> <SafeHTML html={email?.emailAddress}/>
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
