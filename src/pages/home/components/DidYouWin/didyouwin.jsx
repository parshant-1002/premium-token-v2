import "./didyouwin.scss";
import Illustration from '../../../../../public/Illustration.png';
import Info from '../../../../../public/infos.png';
import Price from '../../../../../public/price.png';
import Contacted from '../../../../../public/contacted.png';
import { ICONS } from "../../../../assets";


const DidYouWin = () => {
	const arr = [
		{
			image: Illustration,
			prop: 1,
			title: "Connect your wallet",
			data: "If you see your wallet address on the winners list, connect your wallet, its integrated with Web3 API and it’s 100% secure!"
		},
		{
			image: Info,
			prop: 2,
			title: "Enter your contact information",
			data: "Fill our your email and your WhatsApp, skype or Telegram and we will contact you shortly, be sure to double check your information before sending in the information to us, your wallet address will be added automatic when you connect your wallet."
		},
		{
			image: Price,
			prop: 3,
			title: "Choose your prize",
			data: "You can choose between $350,000 worth of PremiumToken or one or several cars from our partners to a total value of $350,000, it will be delivered to you free of charge!"
		},
		{
			image: Contacted,
			prop: 4,
			title: "Wait to be contacted",
			data: "As soon as you have submitted your information, we will reach out to you from winners@premiumtoken.com or on WhatsApp, Skype or Telegram if we cant reach you on email. If you have not selected your prize within 7 days, you will be given $350,000 worth of tokens automatic!"
		}
	]
	return (

		<section className="didyouwin position-relative">
			<div className="container">
				<div className="heading_title text-center">
					<h2 className="h2 common_title">
						Did you win?
					</h2>
				</div>
				<div className="did-you-win-row">
					{arr.map((item, index) =>
						<div className="card-box-green position-relative">
							<div className="card-img">
								<img
									className=""
									width={225}
									height={188}
									loading="lazy"
									alt="CoinImage"
									src={item.image}
								/>

							</div>
							<h4>{item.title}</h4>
							<p >{item.data}</p>


							<button type="button" class="btn btn-md btn-secondary win-wallet">
								<span>Connect Wallet</span>
							</button>
							<div className="card-counter">
								<span className="card-counter-no">  {item.prop} </span>
							</div>

						</div>
					)}
				</div>

			</div>
				<div className="didyouwin_bg">
					<img width={2264} height={819 }
                        className="img-fluid"
                        alt="Diduwin-banner"
                        src={ICONS.DidUwinBG}
                />
				</div>
		</section>)
};

export default DidYouWin;
