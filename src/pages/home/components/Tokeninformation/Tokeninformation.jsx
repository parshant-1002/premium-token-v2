import { options, series } from "../../helpers/constants";
import { DoughnutChart } from "../DoughnutChart";
import Airdrop from "./Airdrop";
import Info from "./Info";
import "./Tokeninformation.scss";

const Tokeninformation = () => {
	return (

		<section className="token-sec">
			<div className="container">
				<div className="token-info-para text-center">
					<h2 className="h2">Token supply</h2>
					<p>Here you can see how the full token supply is divided, you can also see the wallet addresses, to see that they will never be used for anything other then what they are intended for and that they can not be drawn as a winner by the smart contract.</p>
				</div>
				<div className="pie-chart text-center">
					<div className="d-inline-block">
						<DoughnutChart series={series} options={options} className="chart" /></div>
				</div>

				<div className="token-grid-main">
					<div className="token-column-left">
						<div className="token-column-iner">
							<div className="token-column-button">
								<button className="bg-green-600">0.25%</button>
							</div>
							<div className="token-column-text">
								<h4 className="h5"> AirDrop</h4>
								<span>Wallet address: ....... </span>
								<p>
									0.25% of the tokens will be used for AidDrops, one AirDrop will be held on the 1st of each month, for the next 10 months to come.
								</p>
							</div>
						</div>
						<div className="token-column-iner">
							<div className="token-column-button">
								<button className="bg-green-500">0.75%</button>
							</div>
							<div className="token-column-text">
								<h4 className="h5"> Contest and events</h4>
								<span>Wallet address: ....... </span>
								<p>
									0.75% of the tokens will be used for different contests and events in the future for our holders.
								</p>
							</div>
						</div>
						<div className="token-column-iner">
							<div className="token-column-button">
								<button className="bg-green-400">2.5%</button>
							</div>
							<div className="token-column-text">
								<h4 className="h5"> Development</h4>
								<span>Wallet address: ....... </span>
								<p>
									2.5% of the tokens will be used for development of PremiumToken, to improve it and develop new dapps, features, wallet and marketplaces in the future.
								</p>
							</div>
						</div>
						<div className="token-column-iner">
							<div className="token-column-button">
								<button className="bg-green-350"> 4%</button>
							</div>
							<div className="token-column-text">
								<h4 className="h5"> Founders</h4>
								<span>Wallet address: ....... </span>
								<p>
									4% of the tokens will go to the founders of PremiumToken, but don’t worry we believe in PremiumToken and we wont be selling anything of anytime soon, we are here for the long run!
								</p>
							</div>
						</div>

					</div>
					<div className="token-column-right">
						<div className="token-column-iner">
							<div className="token-column-button">
								<button className="bg-green-300">5%</button>
							</div>
							<div className="token-column-text">
								<h4 className="h5"> Prize for Winners</h4>
								<span>Wallet address: ....... </span>
								<p>
									5% of the tokens will be used for the winners that the smart contract draws, to purchase the premium car of their choice or by giving them $350,000 worth of PremiumToken.
								</p>
							</div>
						</div>
						<div className="token-column-iner">
							<div className="token-column-button">
							<button className="bg-green-200">10%</button>
							</div>
							<div className="token-column-text">
								<h4 className="h5"> Marketing</h4>
								<span>Wallet address: ....... </span>
								<p>
									10% of the tokens will be used marketing of PremiumToken, with the help of the community and paying for marketing and advertising, it wont take long until we reach $1B market cap.
								</p>
							</div>
						</div>
						<div className="token-column-iner">
							<div className="token-column-button">
							<button className="bg-green-150">12.5%</button>
							</div>
							<div className="token-column-text">
								<h4 className="h5"> Burning</h4>
								<span>Wallet address: ....... </span>
								<p>
									12.5% of the tokens will be burnt overtime, to lower the supply and increase the price per token.
								</p>
							</div>
						</div>
						<div className="token-column-iner">
							<div className="token-column-button">
							<button className="bg-green-100">65%</button>
							</div>
							<div className="token-column-text">
								<h4 className="h5"> To excanges and token holders</h4>
								<span>Wallet address: ....... </span>
								<p>
									65% of the tokens will be used for for swaps and exchanges, so more people can notice and buy PremiumToken. The more exchanges we get listed on, the more people will notice us and the more holders we will get and that will help this community grow even faster!
								</p>
							</div>
						</div>

					</div>
				</div>


				


			</div>
		</section>
	);
};

export default Tokeninformation;
