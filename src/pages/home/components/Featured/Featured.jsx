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
				<h2 class="h2 text-center common_title">Featured on</h2>

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
					className="prize-banner"
					alt="Partner_banner"
					src={ICONS.PartnersBg}
				/>
			</div>
		</section>
	);
};

export default Featured;
