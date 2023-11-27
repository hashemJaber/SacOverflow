// CSS imports
import './DashboardPage.css';

// COMPONENT IMPORTS
import { default as CategoryPieChart } from '@/components/Dashboard/overall_spending_barchart/overall_spending_barchart';
import ProjectActivity from '@/components/Dashboard/project_activity/project_activity';
import MonthlySpending from '@/components/Dashboard/MonthlySpend';
import SalesTrendWidget from '@/components/Dashboard/SalesTrendWidget/SalesTrendWidget';
import { default as RevenueChart } from '@/components/Dashboard/revenue_linechart/linechart';
import { default as TotalEarningWidget } from '@/components/Dashboard/TotalEarning';
import ArcGaugeChart from '@/components/Dashboard/ArcGaugeChart/ArcGaugeChart';
import DashboardGreeting from '@/app/(dashboard)/dashboard/DashboardGreeting';

// SERVICE IMPORTS
import {
	getOrganizationInformation,
	getOrganizationMemberRole,
	getUserInformation,
} from '@/lib/actions';
import { cookies } from 'next/headers';
import { IOrganization_table } from '@/types/database.interface';
import { redirect } from 'next/navigation';

const DashboardPage = async () => {
	// TODO: reference backend for logged in user from username
	// retrieve client info
	const userInfo = await getUserInformation();
	const username = userInfo?.name || '';

	// check if the user has a valid organization stored in their cookies
	const cookieStore = cookies();
	const org = cookieStore.get('org')?.value as string;

	// if there is no cookie association with the use ror the org, redirect to the organization page
	if (!org) {
		redirect('/organization');
	}
	const roleResponse = await getOrganizationMemberRole(org);
	const role: string = roleResponse?.role || '';
	if (!role) {
		redirect('/organization');
	}

	// check if the user's role is admin for this org else redirect them to the /projects page
	if (role !== 'admin') {
		redirect('/projects');
	}

	const orgInfo: IOrganization_table = await getOrganizationInformation(
		org as string,
	);

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
						<div className="charts-title">Revenue Chart</div>
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
