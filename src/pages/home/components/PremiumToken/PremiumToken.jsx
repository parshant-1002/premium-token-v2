import "./premiumtoken.scss";
import premium  from '../../../../../public/premium.png';
const PremiumToken = () => {
    return (
        <section className="premium-token-row">
            <div className="container">
                <div className="premium-token-inner">
                    <div className="token-text text-center">
                        <h2 className="h2 common_title">PremiumToken Wallet</h2>
                        <p>We have plans to develop our own wallet for PremiumToken, where we want to add so all our holders can have their own debit card to use and spend PremiumTokens with if they want to. We are currently looking in to potential whitelabel partners that can help us with getting virtual debit cards and potentially real debit cards as well, stay tuned!</p>
                        <button type="button" className="btn btn-md btn-secondary"><span>Coming soon</span></button>
                    </div>
                    <div className="premium-image">
                    <img src={premium} alt="premium" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PremiumToken