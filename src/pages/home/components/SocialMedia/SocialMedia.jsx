import { ICONS } from "../../../../assets";
import "./SocialMedia.scss";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { RenderIconWithHover } from "../../../../shared/components/RenderIconWithHover";
import { addBaseUrlToUrls, redirectToUrlInNewTab } from "../../../../shared/utilities";
import { SOCIAL_MEDIA_ICONS_CONFIG } from "./helpers/contants";
import { ROUTES } from "../../../../shared/constants/routes";
import { Link } from "react-router-dom";

const SocialMedia = ({content = {}}) => {
	const { title, description, twitter, telegram, premiumTokenTitle, airdrop, discord, email } = content;
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
							{Object.entries(SOCIAL_MEDIA_ICONS_CONFIG(content)).map(([key, item], index)=>{
								return <button type="button" key={key} className="btn btn-md btn-primary w-100" onClick={() => redirectToUrlInNewTab(item?.url)}>
									<span className="transform-none">
										<div className="image_renderer">
											<RenderIconWithHover iconUrl={addBaseUrlToUrls(item?.imageUrl)}/>
										</div>
										<span className="render_html_safely"><SafeHTML html={item?.title} /></span>
									</span>
								</button>
							})}
						</div>
					</div>
				</div>
				<div className="text-center d-flex justify-content-center mt-4 mt-md-4 footer_links">
				<Link to = {ROUTES.TERMS_AND_CONDITIONS} className="text-success">
					<SafeHTML html={content?.terms}/>
          		</Link>
				<Link to={ROUTES.PRIVACY_POLICY} className="text-success">
					<SafeHTML html={content?.privacy}/>
				</Link>
				</div>
			</div>
			<div className="footer_left_shape d-none d-md-block">
				<img width={633} height="800" src={ICONS.FooterLeftBg} className="img-fluid" />
			</div>
			<div className="footer_right_shape d-none d-md-block">
				<img width={756} height="955" src={ICONS.FooterRighttBg} className="img-fluid" />
			</div>
		</section>
	);
};

export default SocialMedia;
