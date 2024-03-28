import { useEffect, useState } from "react";
import { ICONS } from "../../../../assets";
import { CustomSlick } from "../../../../shared/components/CustomSlick";
import { Each } from "../../../../shared/components/Each";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import ConnectButton from "../ConnectButton/ConnectButton";
import { InformationCard } from "../InformationCard";
import "./didyouwin.scss";
import { SectionTypes } from "../../helpers/contentManagement";
import { useSelector } from "react-redux";


const DidYouWin = ({content = {}}) => {
	const[updatedContent, setUpdatedContent ] = useState(content)
	const socketData = useSelector((store) => store.contentManagementReducer.socketContentData)
	const { title, rules } = updatedContent

	useEffect(()=>{
		if(Object.keys(socketData).length){
			setUpdatedContent((prev) => ({ ...prev, ...socketData?.[SectionTypes.WINNER_RULES_SECTION] }))
		}
	},[socketData])
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
										<span className="card-counter-no">{index+1} </span>
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
									<p><SafeHTML html={item.description} /></p>
								</div>
							</div>
						)}
					</CustomSlick>
					<div className="w-100 text-center btn_contain mt-4 pt-2">
						<ConnectButton/>
					</div>
				</div>
			</div>
			<div className="didyouwin_bg d-none d-lg-block">
				<img width={900} height={700}
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