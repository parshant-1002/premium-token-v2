import { useEffect, useMemo, useState } from "react";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { firstHalfColorOptions, secondHalfColorOptions } from "../../helpers/constants";
import { DoughnutChart } from "../DoughnutChart";
import { extractPercentages } from "./helpers/utils";
import "./Tokeninformation.scss";

const Tokeninformation = ({content = {}}) => {
	const [firstHalfStats,setFirstHalfStats] = useState();
	const [secondHalfStats,setSecondHalfStats] = useState();

	const stats = useMemo(() => {
		const { burning, development, exchangeAndTokenHolders, founders, marketing, winnerPrize } = content;
		const stats = { development: development, founders: founders, winnerPrize,  marketing, burning, exchangeAndTokenHolders };
         return stats;
	},[content])

	useEffect(() => {
		const sortedStats = Object.values(stats||{})?.sort((statA, statB) => statA?.percentage - statB?.percentage);
		const firstHalf = sortedStats?.slice(0,Math.ceil(sortedStats?.length/2));
		const secondHalf = sortedStats?.slice(Math.ceil(sortedStats?.length/2),sortedStats?.length);
        setFirstHalfStats(firstHalf);
		setSecondHalfStats(secondHalf)
	}, [stats]);

	const series =  useMemo(() => extractPercentages(stats), [stats]);

	const renderStats = (value = {}, index, colorOptions) => {		
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
					<h2 className="h2"><SafeHTML html={content?.title} /></h2>
					<p><SafeHTML html={content?.description} /></p>
				</div>

				<div className="pie-chart text-center">
					<div className="d-inline-block">
						<DoughnutChart series={series} className="chart" innerTitle = {content?.innerTitle} />
					</div>
				</div>

				<div className="token-grid-main">
					<div className="token-column-left">
						{firstHalfStats?.map((value, index)=>{
							return renderStats( value, index, firstHalfColorOptions)
						})}
					</div>

					<div className="token-column-right">
						{secondHalfStats?.map((value, index) => {
							return renderStats( value, index, secondHalfColorOptions)
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tokeninformation;
