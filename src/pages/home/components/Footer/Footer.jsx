import { useEffect, useState } from "react";
import { ICONS } from "../../../../assets";
import { SocialMedia } from "../SocialMedia";
import "./footer.scss";

const Footer = ({content = {}}) => {
  const { premiumTokenTitle, email } = content
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY;

      // Check if scroll position is greater than 400 pixels
      if (scrollPosition > 400) {
        // Set state to true when scrolled past 400 pixels
        setIsScrolled(true);
      } else {
        // Set state to false if not scrolled past 400 pixels
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the scroll event listener
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
              <img src={ICONS.Logo} alt="Premium" width={147} />
            </div>
          </div>

          <div className="col-lg-4 order-3 order-lg-2">
            <div className="d-flex justify-content-center gap-2">
              <button type="button" className="btn btn-md btn-primary"><span className="transform-none">
                <span className="render_html_safely">View chart</span></span></button>
              <button type="button" className="btn btn-md btn-secondary"><span className="transform-none">
                <span className="render_html_safely">Buy token</span></span></button>
            </div>
          </div>

          <div className="col-lg-4 text-center text-lg-end order-2 order-lg-3">
            <div className="email_group">
              <a href="mailto:support@beaverswap.com" rel="follow">
                <em className="me-2">
                  <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8679 0.714472L10.3187 5L14.8679 9.28553C14.9501 9.12256 15 8.94239 15 8.75V1.25C15 1.05758 14.9501 0.877444 14.8679 0.714472Z" fill="#389989" />
                    <path d="M13.6816 0H1.31836C1.11542 0 0.92543 0.0473056 0.753545 0.125278L6.56789 5.61036C7.08199 6.09781 7.91801 6.09781 8.43211 5.61036L14.2465 0.125278C14.0746 0.0473056 13.8846 0 13.6816 0Z" fill="#389989" />
                    <path d="M0.132129 0.714472C0.0498926 0.877444 0 1.05758 0 1.25V8.75C0 8.94242 0.0498926 9.12258 0.132129 9.28553L4.68132 5L0.132129 0.714472Z" fill="#389989" />
                    <path d="M9.69727 5.58919L9.05353 6.19956C8.19691 7.01175 6.80306 7.01175 5.94645 6.19956L5.30273 5.58919L0.753545 9.87472C0.92543 9.95269 1.11542 10 1.31836 10H13.6816C13.8846 10 14.0746 9.95269 14.2465 9.87472L9.69727 5.58919Z" fill="#389989" />
                  </svg>
                </em> support@beaverswap.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
