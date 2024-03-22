import { Each } from "../../../../shared/components/Each";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { options, series } from "../../helpers/constants";
import { DoughnutChart } from "../DoughnutChart";
import Airdrop from "./Airdrop";
import Info from "./Info";
import "./Tokeninformation.scss";

const Tokeninformation = ({content = {}}) => {
	const { title, stats, innerTitle, description } = content;
	console.log(content,"content<><><>")
	const firstHalfStats = stats?.slice(0, 4);
	const secondHalfStats = stats?.slice(4);

	const renderStats = (stat) => {
		const{title, subTitle, description} = stat;
		return <div className="token-column-iner">
			<div className="token-column-button">
				<button className="bg-green-600">0.25%</button>
			</div>
			<div className="token-column-text">
				<h4 className="h5"><SafeHTML html={title} /></h4>
				<span><SafeHTML html={subTitle} /> </span>
				<p>
					<SafeHTML html={description} />
				</p>
			</div>
		</div>
	}
	return (
		<section className="token-info">
			<div className="container">
				<div class="token-info-para">
					<h2 class="h2 text-center common_title"><SafeHTML html={title}/></h2>
					<p class="text-center"><SafeHTML html={description}/></p>
				</div>
				<div className="text-center pie-chart">
					<div style={{ width: '400px', height: '400px', margin: 'auto' }}>
						<DoughnutChart series={series} options={options(innerTitle)} />
					</div>
				</div>

				<div className="token-grid-main">
					<div className="token-column-left">
						<Each of={firstHalfStats} render={(item, index) => (
							renderStats(item)
						)}/>

					</div>

					<div className="token-column-right">
						<Each of={secondHalfStats} render={(item, index) => (
							renderStats(item)
						)} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tokeninformation;
