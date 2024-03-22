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
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 1024000,
			settings: "unslick"
		}
	]
	return (

		<section className="didyouwin position-relative">
			<div className="container">
				<div className="heading_title text-center">
					<h2 className="h2 common_title">
						<SafeHTML html={title}/>
					</h2>
				</div>
				<div className="did-you-win-row">
					<CustomSlick slidesToShow={1} responsive= {responsiveConfig}>
						<Each of={rules} render={(item, index) => 
							<InformationCard
								illustration={addBaseUrlToUrls(item.imageUrl)}
								title={item.description}
								prop={index}
							/>
						}/>
					</CustomSlick>
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


// <button type="button" class="btn btn-md btn-secondary win-wallet">
// 	<span>Connect Wallet</span>
// </button>