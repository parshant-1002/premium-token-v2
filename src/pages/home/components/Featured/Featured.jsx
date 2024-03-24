import { ICONS } from "../../../../assets";
import { Each } from "../../../../shared/components/Each";
import { RenderIconWithHover } from "../../../../shared/components/RenderIconWithHover";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import "./Featured.scss";

const Featured = ({content = {}}) => {
	console.log(content,"featured")
	return (
		<section className="featured-on position-relative">
			<div className="container">
				<h2 className="h2 text-center">Featured on</h2>
				<div className="featured-row">
					<Each of={content} render={(item, index) => (
						<div className="fetured-image" key={index}>
							<RenderIconWithHover iconUrl={addBaseUrlToUrls(item)}/>
						</div>
					)}/>
				</div>
			</div>
			<div className="partners_bg">
				<img width={750} height={941}
					className="img-fluid d-none d-lg-block"
					alt="Partner_banner"
					src={ICONS.PartnersBg}
				/>
				 <img width={530} height={400}
                className="d-block d-md-none img-fluid"
                alt="desktop-banner"
                src={ICONS.ConnectionCreatorMobileBg}
              />
			</div>
		</section>
	);
};

export default Featured;
