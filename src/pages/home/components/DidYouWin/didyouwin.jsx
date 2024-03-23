import { ICONS } from "../../../../assets";
import { CustomSlick } from "../../../../shared/components/CustomSlick";
import { Each } from "../../../../shared/components/Each";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import { InformationCard } from "../InformationCard";
import "./didyouwin.scss";


const DidYouWin = ({content = {}}) => {
	const{title, rules} = content

	const responsiveConfig =  [
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
	return (

		<section className="didyouwin position-relative">
			<div className="container">
				<div className="heading_title text-center">
					<h2 className="h2">
						<SafeHTML html={title}/>
					</h2>
				</div>
				<div className="card-slider-row did-you-win-row">
					<CustomSlick slidesToShow={1} responsive={responsiveConfig}>
						{rules?.map((item, index) =>
							<div className="col-lg-3">
								<div className="card-box-green position-relative">
									<div className="card-counter">
										<span className="card-counter-no">{index} </span>
									</div>
									<div className="card-img">
										<img
											className=""
											width={225}
											height={188}
											loading="lazy"
											alt="CoinImage"
											src={addBaseUrlToUrls(item.imageUrl)}
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


// <button type="button" class="btn btn-md btn-secondary win-wallet">
// 	<span>Connect Wallet</span>
// </button>