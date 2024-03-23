import "./didyouwin.scss";
import Illustration from '../../../../../public/Illustration.png';
import Info from '../../../../../public/infos.png';
import Price from '../../../../../public/price.png';
import Contacted from '../../../../../public/contacted.png';
import { ICONS } from "../../../../assets";
import { CustomSlick } from "../../../../shared/components/CustomSlick";


const DidYouWin = () => {
	const responsiveConfig = [ 
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				arrows: false,
				dots: true,
			}
		},
		{
			breakpoint: 120000000,
			settings: "unslick"
		}
	]
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
					<h2 className="h2">
						Did you win?
					</h2>
				</div>
				<div className="card-slider-row did-you-win-row">
					<CustomSlick slidesToShow={1} responsive={responsiveConfig}>
						{arr.map((item, index) =>
							<div className="col-lg-3">
								<div className="card-box-green position-relative">
									<div className="card-counter">
										<span className="card-counter-no">{item.prop} </span>
									</div>
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
									<h3 className="h6">{item.title}</h3>
									<p>{item.data}</p>
									<div className="w-100 text-center btn_contain">
										<button type="button" className="btn btn-md btn-secondary">
											<span className="transform-none">Connect Wallet</span>
										</button>
									</div>
								</div>
							</div>
						)}
					</CustomSlick>
				</div>
			</div>
			<div className="didyouwin_bg d-none d-lg-block">
				<img width={2264} height={819}					
					alt="Diduwin"
					src={ICONS.DidUwinBG}
					className="img-fluid"
				/>
			</div>
		</section>)
};

export default DidYouWin;
