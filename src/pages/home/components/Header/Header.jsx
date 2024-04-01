import { addBaseUrlToUrls, handleAirdropClick, redirectToUrlInNewTab } from "../../../../shared/utilities";
import { RenderIconWithHover } from "../../../../shared/components/RenderIconWithHover";
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { useEffect, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import WinnerPopup from "./WinnerPopup/WinnerPopup";
import { ROUTES } from "../../../../shared/constants/routes";

const Header = ({ content = {}, partnersContent, winnerPopup }) => {
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

	// Hamburger Menu
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const redirectToUrl = (url) =>{
		redirectToUrlInNewTab(url)
	}

	return (

		<header className={isSticky ? 'header sticky-header' : 'header'}>

			<nav className={`navbar navbar-expand-xl bg-transparent py-0 ${isOpen ? 'menu-open' : ''}`}>
				<div className="container">
					<Link className="navbar-brand" to="/">
						<RenderIconWithHover iconUrl={addBaseUrlToUrls(premiumTokenTitle)} hoverIconUrl={addBaseUrlToUrls(premiumTokenTitle)} defaultIcon={ICONS.Logo} />
					</Link>

					<button className="navbar-toggler" onClick={toggleMenu}>
						<span className="navbar-toggler-icons">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</button>

					<div className="collapse navbar-collapse">

						<div className="main-navigation d-flex justify-content-center justify-content-md-between flex-column flex-md-row align-items-center gap-12 ms-auto">
							<div className="social-icon d-flex justify-content-between align-items-center gap-12 ms-md-auto">
								<button className="btn_icon btn44 dark-green-gradient" rel="noreferrer" onClick={()=> redirectToUrlInNewTab(twitter?.url)}>
									<span><RenderIconWithHover iconUrl={addBaseUrlToUrls(twitter?.image)} hoverIconUrl={addBaseUrlToUrls(twitter?.hovers)} defaultIcon={ICONS.Twitter} /></span>
								</button>
								<button className="btn_icon btn44 dark-green-gradient" rel="noreferrer" onClick={()=> redirectToUrlInNewTab(discord?.url)}>
									<span><RenderIconWithHover iconUrl={addBaseUrlToUrls(discord?.image)} hoverIconUrl={addBaseUrlToUrls(discord?.hovers)}  defaultIcon={ICONS.Discord} /></span>
								</button>
								<button className="btn_icon btn44 dark-green-gradient" rel="noreferrer" onClick={()=> redirectToUrlInNewTab(telegram?.url)}>
									<span>
										<RenderIconWithHover iconUrl={addBaseUrlToUrls(telegram?.image)} hoverIconUrl={addBaseUrlToUrls(telegram?.hovers)} defaultIcon={ICONS.Telegram} />
									</span>
								</button>
							</div>

							<div className="w-100 d-flex justify-content-between flex-column-reverse flex-md-row align-items-center gap-12 header-button">
								<button type="button" className="btn btn-md btn-primary" onClick={handleAirdropClick}>
									<span className="transform-none"><RenderIconWithHover iconUrl={addBaseUrlToUrls(airdropButton?.image)}  defaultIcon={ICONS.Airdrop} /><SafeHTML html={airdropButton?.text} /></span>
								</button>
								<button type="button" className="btn btn-md btn-primary" onClick={() => redirectToUrl(viewChartButton?.url)}><span className="transform-none"><SafeHTML html={viewChartButton?.text} /></span></button>
								<button type="button" className="btn btn-md btn-secondary" onClick={() => redirectToUrl(buyTokenButton?.url)}><span className="text-white transform-none"><SafeHTML html={buyTokenButton?.text} /></span></button>
							</div>
						</div>
					</div>
				</div>

				{/* Responsive Menu */}
				<div className="mobileMenuList d-xl-none justify-content-between flex-column flex-xl-row align-items-center gap-12">

					<div className="w-100 d-flex header_toggle">
						<Link className="navbar-brand" to={ROUTES.HOMEPAGE}>
							<RenderIconWithHover iconUrl={addBaseUrlToUrls(premiumTokenTitle)} hoverIconUrl={addBaseUrlToUrls(premiumTokenTitle)} defaultIcon={ICONS.Logo} />
						</Link>

						<button className="close_menu" onClick={toggleMenu}>
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
								<path d="M1.66667 1.6665L18.3333 18.3332M1.66667 18.3332L18.3333 1.6665" stroke="#389989" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
					</div>

					<div className="w-100 header-button d-flex justify-content-between flex-column-reverse flex-md-row align-items-center gap-12 ms-md-auto">
						<button type="button" className="btn btn-md btn-primary w-100" onClick={() => redirectToUrl(airdropButton?.url)}>
							<span className="transform-none"><RenderIconWithHover iconUrl={addBaseUrlToUrls(airdropButton?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Airdrop} /><SafeHTML html={airdropButton?.text} /></span>
						</button>
						<button type="button" className="btn btn-md btn-primary w-100" onClick={() => redirectToUrl(viewChartButton?.url)}><span className="transform-none" ><SafeHTML html={viewChartButton?.text} /></span></button>
						<button type="button" className="btn btn-md btn-secondary w-100" onClick={() => redirectToUrl(buyTokenButton?.url)}><span className="text-white transform-none"><SafeHTML html={buyTokenButton?.text} /></span></button>
					</div>

					<div className="brand_banner">
						<img width={378} height="316" className="img-fluid" src={ICONS.BrandFrame} alt="Brand" />
					</div>

					<div className="social-icon d-flex justify-content-center align-items-center gap-12">
						<button className="btn_icon btn44 dark-green-gradient" rel="noreferrer" onClick={() => redirectToUrlInNewTab(twitter?.url)}>
							<span><RenderIconWithHover iconUrl={addBaseUrlToUrls(twitter?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Twitter} /></span>
						</button>
						<button className="btn_icon btn44 dark-green-gradient" rel="noreferrer" onClick={() => redirectToUrlInNewTab(discord?.url)}>
							<span><RenderIconWithHover iconUrl={addBaseUrlToUrls(discord?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Discord} /></span>
						</button>
						<button className="btn_icon btn44 dark-green-gradient" rel="noreferrer" onClick={() => redirectToUrlInNewTab(telegram?.url)}>
							<span>
								<RenderIconWithHover iconUrl={addBaseUrlToUrls(telegram?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Telegram} />
							</span>
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
