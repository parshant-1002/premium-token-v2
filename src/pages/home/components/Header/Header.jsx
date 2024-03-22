import { Link } from "react-router-dom";
import "./Header.scss";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import { RenderIconWithHover } from "../../../../shared/components/RenderIconWithHover";
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";

const Header = ({content = {}}) => {
	const {twitter,discord,telegram,viewChartButton,airdropButton,buyTokenButton,premiumTokenTitle } = content
	return (

		<header className="header">
	
			<nav className="navbar navbar-expand-lg bg-transparent py-0">
				<div className="container">

					<Link className="navbar-brand" to={"/"}>
						<RenderIconWithHover iconUrl={addBaseUrlToUrls(premiumTokenTitle)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Logo}/>
					</Link>	
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<div className="d-flex justify-content-between align-items-center gap-12 ms-auto">

							<Link className="btn_icon btn44 dark-green-gradient" to={twitter?.url} rel="noreferrer">
								<span>
									<RenderIconWithHover iconUrl={addBaseUrlToUrls(twitter?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Twitter} />
								</span>

							</Link>
							<Link className="btn_icon btn44 dark-green-gradient" to={discord?.url} rel="noreferrer">
								<span>
									<RenderIconWithHover iconUrl={addBaseUrlToUrls(discord?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Discord} />
								</span>
							</Link>
							<Link className="btn_icon btn44 dark-green-gradient" to={discord?.url} rel="noreferrer">
								<span>
									<RenderIconWithHover iconUrl={addBaseUrlToUrls(telegram?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Telegram} />
								</span>
							</Link>
							<button type="button" className="btn btn-md btn-primary">
								<span className="transform-none"><RenderIconWithHover iconUrl={addBaseUrlToUrls(telegram?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Airdrop} /><SafeHTML html={airdropButton?.text}/></span>	
							</button>
							<button type="button" className="btn btn-md btn-primary transform-none"><SafeHTML html={viewChartButton?.text}/></button>
							<button type="button" className="btn btn-md btn-secondary transform-none"><SafeHTML html={buyTokenButton?.text}/></button>

						</div>
					</div>
				</div>
			</nav>

		</header>
	);
};

export default Header;
