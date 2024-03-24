import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { options } from "../../helpers/constants";
import { DoughnutChart } from "../DoughnutChart";
import "./Tokeninformation.scss";
import { STATISTICS_TITLE } from "./helpers/constants";
import { extractPercentages } from "./helpers/utils";

const Tokeninformation = ({content = {}}) => {
	const { title, airdrop, burning, contest, development, exchangeAndTokenHolders, founders, marketing, winnerPrize, innerTitle, description } = content;
	const firstHalfStats = {airdrop : airdrop, contest : contest, development:development, founders : founders}
	const secondHalfStats = {winnerPrize, marketing, burning, exchangeAndTokenHolders}
	const series = extractPercentages({...firstHalfStats, ...secondHalfStats})
	console.log(series,"series<><><><><><")
	const renderStats = (key,value = {}) => {
		const { title, percentage, description} = value;
		return <div className="token-column-iner">
			<div className="token-column-button">
				<button className="bg-green-600"><SafeHTML html={percentage}/></button>
			</div>
			<div className="token-column-text">
				<h4 className="h5"><SafeHTML html={STATISTICS_TITLE[key]} /></h4>
				<SafeHTML html={title} />
				<SafeHTML html={description} />
			</div>
		</div>
	}
	return (
		<section className="token-sec">
			<div className="container">

				<div className="heading_title text-center mb-0">
					<h2 className="h2"><SafeHTML html={title} /></h2>
					<p><SafeHTML html={description} /></p>
				</div>

				<div className="pie-chart text-center">
					<div className="d-inline-block">
						{console.log(innerTitle,"innertitle")}
						<DoughnutChart series={series} options={options(innerTitle)} className="chart" />
					</div>
				</div>

				<div className="token-grid-main">
					<div className="token-column-left">
						{Object.entries(firstHalfStats)?.map(([key, value], index)=>{
							return renderStats(key, value)
						})}
					</div>

					<div className="token-column-right">
						{Object.entries(secondHalfStats)?.map(([key, value], index) => {
							return renderStats(key, value)
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tokeninformation;
