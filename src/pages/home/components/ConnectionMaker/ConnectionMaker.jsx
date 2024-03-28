import { Link } from "react-router-dom";
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { addBaseUrlToUrls, redirectToUrlInNewTab } from "../../../../shared/utilities";
import "./ConnectionMaker.scss";

const ConnectionMaker = ({ content = {} }) => {
	const { title, downloadDocURL, downloadDocbutton, description, image, url } = content

	return (
		<section className="connectionMaker position-relative">
			<div className="container position-relative">
				<div className="maker-grid row">
					<div className="col-lg-6">
						<figure className="mb-0 maker-image text-center text-lg-start">
							<img width={533} height={347} className="img-fluid" alt="Audit Banner" src={addBaseUrlToUrls(image)} />
						</figure>
					</div>
					<div className="col-lg-6">
						<div className="maker-text-col text-center ms-lg-auto">
							<h2 className="h2"><SafeHTML html={title} /></h2>
							<p><SafeHTML html={description} /></p> 
								<button
									className="link-button"
									onClick={() => { redirectToUrlInNewTab(url) }}
									target="_blank"
							>
								<img
									className="me-2"
									alt=""
									src={content?.linkLogo}
									width={25}
									height={25}
								/>
									<SafeHTML html={url} />
								</button>
							 
							<button className="btn btn-md btn-secondary w-100" onClick={()=>redirectToUrlInNewTab(downloadDocURL)}>
								<span className="transform-none">
									<img
										className="me-2"
										alt=""
										src={content?.downloadDocButtonLogo	}
									/>
									<SafeHTML html={downloadDocbutton} />
								</span>
							</button>
						</div>
					</div>
				</div>

				<div className="external_audit_bg">
					<img width={1833} height={951} className="img-fluid" alt="External-audit" src={ICONS.AuditBG} />
				</div>

			</div>
		</section>
	);
};

export default ConnectionMaker;
