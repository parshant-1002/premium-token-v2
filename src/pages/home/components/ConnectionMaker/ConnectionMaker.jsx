import { Link } from "react-router-dom";
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import "./ConnectionMaker.scss";

const 	ConnectionMaker = ({content = {}}) => {
	const { title, downloadDocURL, downloadDocbutton, description , image, url} = content
	console.log(content,"connecitonmaker")
	return (
		<section className="connectionMaker position-relative">
			<div className="container">

				<div className="maker-grid row">
					<div className="col-md-6">
						<div className="maker-image">
							<img width={533} height={347} className="img-fluid" alt="Audit Banner" src={addBaseUrlToUrls(image)} />
						</div>
					</div>
					<div className="col-md-6">
						<div className="maker-text-col">
							<div className="">
								<h2 className="h2 text-center common_title"><SafeHTML html={title}/></h2>
								<p className="text-center"><SafeHTML html={description}/></p>
							</div>
							<button className="link-button">
								<img
									className=""
									alt=""
									src="/heroiconsoutlinelink.svg"
								/>
								<Link
									className=""
									to={addBaseUrlToUrls(url)}
									target="_blank"
								>
									<SafeHTML html={url}/>
								</Link>
							</button>

							<button className="download-document btn btn-md btn-secondary">
								<img
									className=""
									alt=""
									src="/heroiconsoutlinedocumentarrowdown.svg"
								/>
								<span className=""><SafeHTML html={downloadDocbutton}/></span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="external_audit_bg">
				<img width={1833} height={951}
					className="img-fluid"
					alt="External-audit"
					src={ICONS.AuditBG}
				/>
			</div>
		</section>
	);
};

export default ConnectionMaker;
