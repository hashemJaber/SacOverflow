// 'use client';
// CSS imports
import './DashboardPage.css';

import { default as CategoryPieChart } from '@/components/Dashboard/overall_spending_barchart/overall_spending_barchart';
import ProjectActivity from '@/components/Dashboard/project_activity/project_activity';
import MonthlySpending from '@/components/Dashboard/MonthlySpend';
import SalesTrendWidget from '@/components/Dashboard/SalesTrendWidget/SalesTrendWidget';
import { default as RevenueChart } from '@/components/Dashboard/revenue_linechart/linechart';
import { default as TotalEarningWidget } from '@/components/Dashboard/TotalEarning';
import ArcGaugeChart from '@/components/Dashboard/ArcGaugeChart/ArcGaugeChart';
import { readUser } from '@/lib/actions';
import DashboardGreeting from '@/app/(dashboard)/dashboard/DashboardGreeting';

const DashboardPage = async () => {
	// TODO: reference backend for logged in user from username
	let username = 'user';

	// retrieve client info
	const {
		data: { user },
	} = await readUser();
	username = user?.user_metadata?.name || '';

	const salesTrendData = {
		filterType: 'week',
		className: 'sales-trend-container',
	};

	return (
		<>
			<div className="desktop-container">
				<DashboardGreeting username={username} />

				{/* Section for charts  */}
				<div id="dashboard-charts">
					<div className="revenues-chart col-charts">
						<div className="charts-title">
							<br />
						</div>
						<RevenueChart className="spending-chart-container" />
					</div>
					<div className="spending-chart col-charts">
						<div className="charts-title overall-spending">
							Overall Spending
						</div>
						<CategoryPieChart className="spending-chart-container" />
					</div>
					<div className="spending-table col-charts">
						<div className="charts-title">Monthly Spending</div>
						<MonthlySpending />
					</div>
				</div>

				{/* Section for recent activity */}
				<div id="dashboard-charts-recent-activity">
					<div className="earnings-sales-container">
						<div className="total-earnings-container">
							<TotalEarningWidget />
						</div>
						<SalesTrendWidget {...salesTrendData} />
					</div>

					{/* Project activity log content */}
					<div className="project-activity">
						<ProjectActivity />
					</div>
				</div>
			</div>

			<div className="mobile-container">
				<span className="page-title">Finance</span>

				<div id="summary-gauge-arc">
					<ArcGaugeChart id="arc-chart" />
				</div>
				<br />

				<div className="total-earnings-container">
					<TotalEarningWidget />
				</div>
				<div className="spending-table">
					<MonthlySpending />
				</div>

				{/* Project activity log content */}
				<div className="project-activity">
					<ProjectActivity />
				</div>
			</div>
		</>
	);
};

export default DashboardPage;
