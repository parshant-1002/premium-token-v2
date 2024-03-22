import "./premiumtoken.scss";
import premium from '../../../../../public/premium.png';
import arrow from '../../../../../public/rightarrow.svg';
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { RenderIconWithHover } from "../../../../shared/components/RenderIconWithHover";
const PremiumToken = ({content = {}}) => {
    const { comingSoonButtonText, description, imageUrl, title } = content
    return (
        <section className="premium-token-row position-relative">
            <div className="container">
                <div className="premium-token-inner">
                    <div className="token-text text-center">
                        <h2 className="h2 common_title"><SafeHTML html={title} /></h2>
                        <p><SafeHTML html={description} /></p>
                        <button type="button" className="btn btn-md btn-secondary comming-soon">
                            <span><SafeHTML html={comingSoonButtonText} /></span>
                            <img src={arrow} alt="premium" />
                            </button>
                    </div>
                    <div className="premium-image">
                        <img src={premium} alt="premium" />
                    </div>
                </div>
            </div>
            <div className="premium_token_bg">
                <RenderIconWithHover iconUrl={imageUrl} width = {1162} height = {835}/>
      </div>	
     
        </section>
    )
}

export default PremiumToken