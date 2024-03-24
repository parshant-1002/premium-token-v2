import { Link } from "react-router-dom";
import { ICONS } from "../../../../assets";
import "./SocialMedia.scss";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { RenderIconWithHover } from "../../../../shared/components/RenderIconWithHover";

const SocialMedia = ({content = {}}) => {
	const { title, description, twitter, telegram, premiumTokenTitle, airdrop, discord, email } = content;
	console.log(content,"socialmediacontent")
	return (
		<section className="footer-row position-relative">
			<div className="container">
				<div className="footer_column_box mx-auto">
					<div className="footer-together">
						<div className="comon-heade-title">
							<h2 className="h2 common_title  d-inline-block"><SafeHTML html={title}/></h2>
							<p><SafeHTML html={description} /></p>
						</div>
						<div className="w-100 footer-button d-flex justify-content-center align-items-center">
							<button type="button" className="btn btn-md btn-primary w-100">
								<span className="transform-none">
									<div className="image_renderer">
										<RenderIconWithHover iconUrl={ICONS.XIcon} />
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
