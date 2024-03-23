import { Link } from "react-router-dom";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import { RenderIconWithHover } from "../../../../shared/components/RenderIconWithHover";
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { useEffect, useState } from "react";
import "./Header.scss";

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

	// Hamburger Menu
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};


	return (

		<header className={isSticky ? 'header sticky-header' : 'header'}>

			<nav className={`navbar navbar-expand-xl bg-transparent py-0 ${isOpen ? 'menu-open' : ''}`}>
				<div className="container">
					<Link className="navbar-brand" to={"/"}>
						<RenderIconWithHover iconUrl={addBaseUrlToUrls(premiumTokenTitle)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Logo} />
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

							<div className="w-100 d-flex justify-content-between flex-column-reverse flex-md-row align-items-center gap-12 header-button">
								<button type="button" className="btn btn-md btn-primary">
									<span className="transform-none"><RenderIconWithHover iconUrl={addBaseUrlToUrls(telegram?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Airdrop} /><SafeHTML html={airdropButton?.text} /></span>
								</button>
								<button type="button" className="btn btn-md btn-primary"><span className="transform-none"><SafeHTML html={viewChartButton?.text} /></span></button>
								<button type="button" className="btn btn-md btn-secondary"><span className="text-white transform-none"><SafeHTML html={buyTokenButton?.text} /></span></button>
							</div>
						</div>
					</div>
				</div>

				{/* Responsive Menu */}
				<div className="mobileMenuList d-xl-none justify-content-between flex-column flex-xl-row align-items-center gap-12">

					<div className="w-100 d-flex header_toggle">
						<Link className="navbar-brand" to={"/"}>
							<RenderIconWithHover iconUrl={addBaseUrlToUrls(premiumTokenTitle)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Logo} />
						</Link>

						<button className="close_menu" onClick={toggleMenu}>
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
								<path d="M1.66667 1.6665L18.3333 18.3332M1.66667 18.3332L18.3333 1.6665" stroke="#389989" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
					</div>

					<div className="w-100 header-button d-flex justify-content-between flex-column-reverse flex-md-row align-items-center gap-12 ms-md-auto">
						<button type="button" className="btn btn-md btn-primary w-100">
							<span className="transform-none"><RenderIconWithHover iconUrl={addBaseUrlToUrls(telegram?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Airdrop} /><SafeHTML html={airdropButton?.text} /></span>
						</button>
						<button type="button" className="btn btn-md btn-primary w-100"><span className="transform-none"><SafeHTML html={viewChartButton?.text} /></span></button>
						<button type="button" className="btn btn-md btn-secondary w-100"><span className="text-white transform-none"><SafeHTML html={buyTokenButton?.text} /></span></button>
					</div>

					<div className="brand_banner">
						<img width={378} height="316" className="img-fluid" src={ICONS.BrandFrame} alt="Brand" />
					</div>

					<div className="social-icon d-flex justify-content-center align-items-center gap-12">
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
				</div>
			</nav>
		</header>
	);
};

export default Header;
