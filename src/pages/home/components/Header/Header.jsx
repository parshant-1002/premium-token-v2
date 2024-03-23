import { Link } from "react-router-dom";
import "./Header.scss";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import { RenderIconWithHover } from "../../../../shared/components/RenderIconWithHover";
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { useEffect, useState } from "react";
import { Icons } from "react-toastify";

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
			<nav className="navbar navbar-expand-xl bg-transparent py-0">
				<div className="container">
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
					<div className="collapse  navbar-collapse mobileNavbar" id="navbarSupportedContent">
						<div className="main-navigation d-flex justify-content-center justify-content-between flex-column  align-items-center gap-12 ms-auto">
							<div className="w-100 d-flex justify-content-center align-items-center position-relative">
								<Link className="navbar-brand" to={"/"}>
									<RenderIconWithHover iconUrl={addBaseUrlToUrls(premiumTokenTitle)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Logo} />
								</Link>
								<span className="CloseMenu">
									<img width={40} height="40" className="img-fluid" src={ICONS.CloseMenu} alt="CloseIcon" />
								</span>
							</div>
							<div className="toogleBg d-block d-lg-none">
								<img width={327} height="414" className="img-fluid" src={ICONS.ToogleMenuBg} alt="" />
							</div>
							<div className="mobileMenuList">
							<div className="w-100 header-button d-flex justify-content-between flex-column-reverse align-items-center gap-16">
									<button type="button" className="btn btn-md btn-primary w-100">
										<span className="transform-none"><RenderIconWithHover iconUrl={addBaseUrlToUrls(telegram?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Airdrop} /><SafeHTML html={airdropButton?.text} /></span>
									</button>
									<button type="button" className="btn btn-md btn-primary w-100"><span className="transform-none"><SafeHTML html={viewChartButton?.text} /></span></button>
									<button type="button" className="btn btn-md btn-secondary w-100"><span className="text-white transform-none"><SafeHTML html={buyTokenButton?.text} /></span></button>
								</div>
								<div className="brand_banner">
									<img width={378} height="316" className="img-fluid" src={ICONS.BrandFrame} alt="Brand" />
								</div>
								<div className="social-icon d-flex justify-content-center align-items-center gap-12 text-center">
									<Link className="btn_icon btn44 dark-green-gradient" rel="noreferrer">
										<span><RenderIconWithHover iconUrl={addBaseUrlToUrls(twitter?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Twitter} /></span>
									</Link>
									<Link className="btn_icon btn44 dark-green-gradient" rel="noreferrer">
										<span><RenderIconWithHover iconUrl={addBaseUrlToUrls(discord?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Discord} /></span>
									</Link>
									<Link className="btn_icon btn44 dark-green-gradient" rel="noreferrer">
										<span>
											<RenderIconWithHover iconUrl={addBaseUrlToUrls(telegram?.image)} hoverIconUrl={"./img-1.svg"} defaultIcon={ICONS.Telegram} />
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
