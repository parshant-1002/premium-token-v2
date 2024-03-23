import { ICONS } from "../../../../assets";
import "./ConnectionMaker.scss";

const ConnectionMaker = () => {
	return (
		<section className="connectionMaker position-relative">
			<div className="container position-relative">
				<div className="maker-grid row">
					<div className="col-lg-6">
						<figure className="mb-0 maker-image text-center text-lg-start">
							<img width={533} height={347} className="img-fluid" alt="Audit Banner" src="/img-1.svg" />
						</figure>
					</div>
					<div className="col-lg-6">
						<div className="maker-text-col text-center ms-lg-auto">
							<h2 className="h2">External audit</h2>
							<p>We want to show all current and future holders that its nothing fishy about PremiumToken, therefore we orderd an external audit from Analytix Audit, you can click on the link to view it or download the full audit by clicking on the download button.</p>
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

							<button className="btn btn-md btn-secondary w-100">
								<span className="transform-none"> 
									<img
										className="me-2"
										alt=""
										src="/heroiconsoutlinedocumentarrowdown.svg"
									/>
									Download document 
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
