import {
	SingleLineChart,
	DoubleLineChart,
} from '@/components/Dashboard/LineChart/LineCharts';

// helper functions
import { calculatePercentageDifference } from '@/utils/generalUtils';

// CSS imports
import './SalesTrendWidget.css';
import { getSalesOverviewData, getSpendingCategories } from '@/utils/dataUtils';

const SalesTrendWidget = async (
	filterType: 'year' | 'month' | 'week' | 'day',
	className?: string,
) => {
	// get the mockaroo data
	const SalesOverview = await getSalesOverviewData();
	// check if totals not null keys
	const isValidTotals =
		SalesOverview &&
		SalesOverview.total !== undefined &&
		SalesOverview.previousTotal !== undefined &&
		SalesOverview.data;

	const spendingCategory = (await getSpendingCategories()).splice(0, 3);

	// Not enough data or invalid data.
	if (!isValidTotals || !spendingCategory) {
		return (
			<div className="trends-widget">
				<span className="trends-widget-title">Sales Trend</span>
				<span className="trends-widget-no-data-text">
					No data to display. Please check back later.
				</span>
			</div>
		);
	}

	return (
		<>
			<div className="trends-widget">
				<span className="trends-widget-title">Sales Trend</span>
				<div className="trends-widget-percentage">
					<span className="trends-widget-percentage-value">
						{calculatePercentageDifference(
							SalesOverview.total,
							SalesOverview.previousTotal,
						)}
						<span className="percentage-sign">%</span>
					</span>
					<span className="trends-widget-percentage-text">
						Compared to ${SalesOverview.previousTotal} last year.
					</span>
				</div>
				{/* charts utilizing AM Charts */}
				<DoubleLineChart
					data={SalesOverview.data}
					filterType={`week`}
					id={`double-line-chart`}
				/>
			</div>
			{/* bottom card component */}
			<div id="costBreakdownSection">
				{/* map out the spending categories coming in. */}
				{spendingCategory?.map((category, index) => {
					// Generate a unique ID for each chart
					const chartId = `bar-${index}`;
					return (
						<div
							className="category"
							key={index}
						>
							<span className="title">{category.category}</span>
							<span className="amount">
								${category?.total | '0'}
							</span>
							<SingleLineChart
								data={category.data}
								filterType={`week`}
								id={chartId}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default SalesTrendWidget;
