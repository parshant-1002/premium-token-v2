import "./Partners.scss";
import partner from '../../../../../public/partner.png';
import auto from '../../../../../public/auto.png';

const Partners = () => {
  return (
    <section className="our-teams">
      <div className="container">
        <div class="airdrop-info-para">
          <h2 class="h2 text-center">Partners</h2>
        </div>
        <div className="partner-slider">
          <div className="partner-column">
            <div className="partner-image">
              <img src={partner} />
              <div className="overlay-logo">
                <img src={auto} />
              </div>
            </div>
            <h3 className="text-center">Mike Stoneberg</h3>
            <p>CEO & Product Manager</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;
