import { ICONS } from "../../../../assets";
import "./ConnectionMaker.scss";

const ConnectionMaker = () => {
	return (
		<section className="connectionMaker position-relative">
			<div className="container">

				<div className="maker-grid row">
					<div className="col-md-6">
						<div className="maker-image">
							<img width={533} height={347} className="img-fluid" alt="Audit Banner" src="/img-1.svg" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="maker-text-col">

							<div className="">
								<h2 className="h2 text-center common_title">External audit</h2>
								<p className="text-center">We want to show all current and future holders that its nothing fishy about PremiumToken, therefore we orderd an external audit from Analytix Audit, you can click on the link to view it or download the full audit by clicking on the download button.</p>
							</div>
							<button className="link-button">
								<img
									className=""
									alt=""
									src="/heroiconsoutlinelink.svg"
								/>
								<a
									className=""
									href="https://moralis.io/solana-smart-contract-examples-for-developers/"
									target="_blank"
								>
									https://moralis.io/solana-smart-contract-examples-for-developers/
								</a>
							</button>

							<button className="download-document btn btn-md btn-secondary">
								<img
									className=""
									alt=""
									src="/heroiconsoutlinedocumentarrowdown.svg"
								/>
								<span className="">Download document</span>
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
