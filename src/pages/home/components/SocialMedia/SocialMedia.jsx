import { Link } from "react-router-dom";
import { ICONS } from "../../../../assets";
import "./SocialMedia.scss";

const SocialMedia = () => {
	return (
		<section className="footer-row position-relative">
			<div className="container">
				<div className="footer_column_box mx-auto">
					<div className="footer-together">
						<div className="comon-heade-title">
							<h2 className="h2 common_title  d-inline-block">Lets grow together!</h2>
							<p>Follow PremiumToken on as many social media networks as possible and spread the word to your friends, family and followers, so will our community and the value of PremiumToken grow faster and faster!</p>
						</div>
						<div className="w-100 footer-button d-flex justify-content-between align-items-center gap-24">
							<button type="button" className="btn btn-md btn-primary w-100">
								<span className="transform-none">
									<div className="image_renderer">
										<img src={ICONS.XIcon} />
									</div>
									<span className="render_html_safely">Join X</span>
								</span>
							</button>
							<button type="button" className="btn btn-md btn-primary w-100">
								<span className="transform-none">
									<div className="image_renderer">
										<img src={ICONS.XIcon} />
									</div>
									<span className="render_html_safely">Join X</span>
								</span>
							</button>
							<button type="button" className="btn btn-md btn-primary w-100">
								<span className="transform-none">
									<div className="image_renderer">
										<img src={ICONS.XIcon} />
									</div>
									<span className="render_html_safely">Join X</span>
								</span>
							</button>
							<button type="button" className="btn btn-md btn-primary w-100">
								<span className="transform-none">
									<div className="image_renderer">
										<img src={ICONS.XIcon} />
									</div>
									<span className="render_html_safely">Join X</span>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="footer_left_shape d-none d-lg-block">
				<img width={633} height="800" src={ICONS.FooterLeftBg} className="img-fluid" />
			</div>
			<div className="footer_right_shape d-none d-lg-block">
				<img width={756} height="955" src={ICONS.FooterRighttBg} className="img-fluid" />
			</div>
		</section>
	);
};

export default SocialMedia;
