//Import css file for custom styles
import './TotalEarning.css';
//Categorize data by its type def for props in TotalEarning to accept
interface TotalEarningCard {
	currentEarning: number;
	previousEarning: number;
}

//Example of static data, initalizing data inside component
const TotalEarning = () => {
	const currentEarning = 12875;
	const previousEarning = 10000;

	// Calculates difference in monthly earnings, turns it into a percent, and checks if it is postive
	const earnDifference =
		((currentEarning - previousEarning) / previousEarning) * 100;
	//Fixes to nearest whole percent
	const formatDifference = earnDifference.toFixed(0);
	const isPositive = earnDifference >= 0;

	return (
		<div className="total-earning-container">
			<div className="earning-header">
				<div className="earning-title">Total earning</div>
			</div>
			<div className="earning-format">
				<div className="earning-value">
					${currentEarning.toLocaleString()}
				</div>
				<div
					className={`earning-percentage ${
						isPositive
							? 'earning-percentage-positive'
							: 'earning-percentage-negative'
					}`}
				>
					{isPositive ? '▲' : '▼'} {formatDifference}%
				</div>
			</div>
			<div className="earning-comparison">
				Compared to ${previousEarning.toLocaleString()} last year
			</div>
		</div>
	);
};

export default TotalEarning;
