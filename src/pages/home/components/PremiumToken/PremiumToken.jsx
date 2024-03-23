import arrow from '../../../../../public/rightarrow.svg';
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import { ICONS } from "../../../../assets";
import "./premiumtoken.scss";
const PremiumToken = ({content = {}}) => {
    const { comingSoonButtonText, description, imageUrl, title } = content
    return (
        <section className="premium-token-row position-relative">
            <div className="container">
                <div className="row align-items-center premium-token-inner">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="token-summary text-center">
                                        <h2 className="h2"><SafeHTML html={title} /></h2>
                                        <p><SafeHTML html={description} /></p>
                            <button type="button" className="btn btn-md btn-secondary">
                                            <span className="transform-none"><SafeHTML html={comingSoonButtonText} />
                                    <em className="ms-2">
                                        <img src={arrow} alt="premium" width={14} height={8} />
                                    </em>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <figure className="mb-0 premium-image">
                            <img src={addBaseUrlToUrls(imageUrl)} alt="premium" width={400} height={300} />
                        </figure>
                    </div>
                </div>
            </div>

            <div className="premium_token_bg">
                <img width={1162} height={835} className="img-fluid" alt="Premium" src={ICONS.PremiumTokenBg} />
                <img width={1162} height={835} className="img-fluid" alt="Premium" src={ICONS.PremiumTokenBg} />
            </div>

        </section>
    )
}

export default PremiumToken