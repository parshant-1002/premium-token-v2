import { Link } from "react-router-dom";
import "./Header.scss";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import { RenderIconWithHover } from "../../../../shared/components/RenderIconWithHover";
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";

const Header = ({ content = {} }) => {
	const { twitter, discord, telegram, viewChartButton, airdropButton, buyTokenButton, premiumTokenTitle } = content
	return (

		<header className="header">

			<nav className="navbar navbar-expand-lg bg-transparent py-0">
				<div className="container justify-content-center justify-content-lg-between">
					<Link className="navbar-brand" to={"/"}>
						<RenderIconWithHover iconUrl={addBaseUrlToUrls(premiumTokenTitle)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Logo} />
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icons">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<div className="main-navigation d-flex justify-content-center justify-content-md-between flex-column flex-md-row align-items-center gap-12 ms-auto">
							<div className="social-icon  d-flex justify-content-between align-items-center gap-12 ms-md-auto">
								<a className="btn_icon btn44 dark-green-gradient" href="#" rel="noreferrer">
									<span>
										<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3263 0.903809H20.6998L13.3297 9.3273L22 20.7898H15.2112L9.89404 13.8378L3.80995 20.7898H0.434432L8.31743 11.7799L0 0.903809H6.96111L11.7674 7.25814L17.3263 0.903809ZM16.1423 18.7706H18.0116L5.94539 2.81694H3.93946L16.1423 18.7706Z" fill="white"></path></svg>
									</span>

								</a>
								<a className="btn_icon btn44 dark-green-gradient" href="#" rel="noreferrer">
									<span><RenderIconWithHover iconUrl={addBaseUrlToUrls(twitter?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Twitter} /></span>
								</a>
								<a className="btn_icon btn44 dark-green-gradient" href="#" rel="noreferrer">
									<span>
										<RenderIconWithHover iconUrl={addBaseUrlToUrls(discord?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Discord} />
									</span>
								</a>
							</div>

							<div className="w-100 header-button d-flex justify-content-between flex-column-reverse flex-md-row align-items-center gap-12 ms-md-auto">
								<button type="button" className="btn btn-md btn-primary w-100">
									<span className="transform-none"><RenderIconWithHover iconUrl={addBaseUrlToUrls(telegram?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Airdrop} /><SafeHTML html={airdropButton?.text} /></span>
								</button>
								<button type="button" className="btn btn-md btn-primary w-100"><span className="transform-none"><SafeHTML html={viewChartButton?.text} /></span></button>
								<button type="button" className="btn btn-md btn-secondary w-100"><span className="text-white transform-none"><SafeHTML html={buyTokenButton?.text} /></span></button>
							</div>
						</div>
					</div>
				</div>
			</nav>

		</header>
	);
};

export default Header;
