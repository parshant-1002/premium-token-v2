import "./premiumtoken.scss";
import premium from '../../../../../public/premium.png';
import arrow from '../../../../../public/rightarrow.svg';
import { ICONS } from "../../../../assets";
const PremiumToken = () => {
    return (
        <section className="premium-token-row position-relative">
            <div className="container">
                <div className="row align-items-center premium-token-inner">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="token-summary text-center">
                            <h2 className="h2">PremiumToken Wallet</h2>
                            <p>We have plans to develop our own wallet for PremiumToken, where we want to add so all our holders can have their own debit card to use and spend PremiumTokens with if they want to. We are currently looking in to potential whitelabel partners that can help us with getting virtual debit cards and potentially real debit cards as well, stay tuned!</p>
                            <button type="button" className="btn btn-md btn-secondary">
                                <span className="transform-none">Coming soon
                                    <em className="ms-2">
                                        <img src={arrow} alt="premium" width={14} height={8} />
                                    </em>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <figure className="mb-0 premium-image">
                            <img src={premium} alt="premium" width={400} height={300} />
                        </figure>
                    </div>
                </div>
            </div>

            <div className="premium_token_bg">
                <img width={1162} height={835} className="img-fluid" alt="Premium" src={ICONS.PremiumTokenBg} />
            </div>

        </section>
    )
}

export default PremiumToken