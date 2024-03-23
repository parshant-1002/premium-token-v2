import { Link } from "react-router-dom";
import { ICONS } from "../../../../assets";
import "./SocialMedia.scss";
import SafeHTML from "../../../../shared/components/SanitizeHtml";

const SocialMedia = ({content = {}}) => {
	const { twitter, telegram, premiumTokenTitle, followUsTitle, followUsDescription, email, discord, airdrop} = content
	console.log(content,"socialMediaContent<><>>")
	return (
		<section className="footer-row position-relative">
			<div className="container">
				<div className="footer_column_box mx-auto">
					<div className="footer-together">
						<div className="comon-heade-title">
							<h2 className="h2 common_title  d-inline-block"><SafeHTML html={followUsTitle} /></h2>
							<p><SafeHTML html={followUsDescription} /></p>
						</div>

						<div className="w-100 footer-button d-flex justify-content-between align-items-center gap-24">
							<button type="button" className="btn btn-md btn-primary w-100">
								<span className="transform-none">
									<div className="image_renderer">
										<img src={ICONS.XIcon} />
									</div>
									<span class="render_html_safely">Join X</span>
								</span>
							</button>
							<button type="button" className="btn btn-md btn-primary w-100">
								<span className="transform-none">
									<div className="image_renderer">
										<img src={ICONS.XIcon} />
									</div>
									<span class="render_html_safely">Join X</span>
								</span>
							</button>
							<button type="button" className="btn btn-md btn-primary w-100">
								<span className="transform-none">
									<div className="image_renderer">
										<img src={ICONS.XIcon} />
									</div>
									<span class="render_html_safely">Join X</span>
								</span>
							</button>
							<button type="button" className="btn btn-md btn-primary w-100">
								<span className="transform-none">
									<div className="image_renderer">
										<img src={ICONS.XIcon} />
									</div>
									<span class="render_html_safely">Join X</span>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="footer_left_shape">
				<img width={633} height="800" src={ICONS.FooterLeftBg} className="img-fluid" />
			</div>
			<div className="footer_right_shape">
				<img width={756} height="955" src={ICONS.FooterRighttBg} className="img-fluid" />
			</div>
			
		</section>
	);
};

export default SocialMedia;
