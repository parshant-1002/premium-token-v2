import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { firstHalfColorOptions, secondHalfColorOptions } from "../../helpers/constants";
import { DoughnutChart } from "../DoughnutChart";
import { extractPercentages } from "./helpers/utils";
import "./Tokeninformation.scss";

const Tokeninformation = ({content = {}}) => {
	const { title, airdrop, burning, contest, development, exchangeAndTokenHolders, founders, marketing, winnerPrize, innerTitle, description } = content;
	const firstHalfStats = { development: development, founders: founders, winnerPrize }
	const secondHalfStats = {marketing, burning, exchangeAndTokenHolders}
	const series = extractPercentages({...firstHalfStats, ...secondHalfStats})
	const renderStats = (key,value = {}, index, colorOptions) => {
		const { title,subTitle, percentage, description} = value;
		return <div className="token-column-iner">
			<div className="token-column-button">
				<button className="bg-green-600" style={{ backgroundColor: colorOptions[index]}}><SafeHTML html={percentage}/>%</button>
			</div>
			<div className="token-column-text">
				<h4 className="h5"><SafeHTML html={title} /></h4>
				<span className="text-white d-block"><SafeHTML html={value?.walletAddressKey} /></span>
				<small className="text-success"><SafeHTML html={value?.walletAddressValue} /></small>
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
						<DoughnutChart series={series} className="chart" innerTitle = {innerTitle} />
					</div>
				</div>

				<div className="token-grid-main">
					<div className="token-column-left">
						{Object.entries(firstHalfStats)?.map(([key, value], index)=>{
							return renderStats(key, value, index, firstHalfColorOptions)
						})}
					</div>

					<div className="token-column-right">
						{Object.entries(secondHalfStats)?.map(([key, value], index) => {
							return renderStats(key, value, index, secondHalfColorOptions)
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tokeninformation;
