import { ICONS } from "../../../../assets";
import "./Featured.scss";

const Featured = () => {
	return (
		<section className="featured-on position-relative">
			<div className="container">
				<h2 className="h2 text-center">Featured on</h2>
				<div className="featured-row">
					<div className="fetured-image">
						<img loading="lazy" alt="" src="/mask-group@2x.png" />
					</div>
					<div className="fetured-image">
						<img alt="" src="/mask-group-1@2x.png" />
					</div>
					<div className="fetured-image">
						<img alt="" src="/mask-group-2@2x.png" />
					</div>
					<div className="fetured-image">
						<img alt="" src="/mask-group-3@2x.png" />
					</div>
					<div className="fetured-image">
						<img alt="" src="/mask-group-4@2x.png" />
					</div>

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
