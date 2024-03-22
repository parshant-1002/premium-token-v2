import { Link } from "react-router-dom";
import "./Header.scss";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import { RenderIconWithHover } from "../../../../shared/components/RenderIconWithHover";
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { useEffect, useState } from "react";

const Header = ({ content = {} }) => {
	const { twitter, discord, telegram, viewChartButton, airdropButton, buyTokenButton, premiumTokenTitle } = content
	const [isSticky, setIsSticky] = useState(false);

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		const stickyClassThreshold = 0; // Change this to the desired scroll position
		setIsSticky(scrollTop > stickyClassThreshold);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (

		<header className={isSticky ? 'header sticky-header' : 'header'}>

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
								<Link className="btn_icon btn44 dark-green-gradient" rel="noreferrer">
									<span><RenderIconWithHover iconUrl={addBaseUrlToUrls(twitter?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Twitter} /></span>
								</Link>
								<Link className="btn_icon btn44 dark-green-gradient" rel="noreferrer">
									<span><RenderIconWithHover iconUrl={addBaseUrlToUrls(discord?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Discord} /></span>
								</Link>
								<Link className="btn_icon btn44 dark-green-gradient" rel="noreferrer">
									<span>
										<RenderIconWithHover iconUrl={addBaseUrlToUrls(discord?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Discord} />
									</span>
								</Link>
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
