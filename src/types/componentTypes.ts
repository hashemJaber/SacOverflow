/**
 * This file contains all the types for the components which are used for components
 *
 * @file This file defines the types for the components which are used for components
 * @module "src/types/componentTypes.ts"
 */

// SalesTrendWidget (Bottom Line Charts) props
export interface SalesOverviewData {
	total: number;
	previousTotal: number;
	data: DoubleLineChartDataElement[];
}

export interface CategorySalesData {
	category: string;
	total: number;
	data: SingleLineChartDataElement[];
}

// SingleLineChart props
export interface SingleLineChartDataElement {
	// date key but value is a date of format yyyy-MM-dd
	date: string;
	value: number;
}
// DoubleLineChart props
export interface DoubleLineChartDataElement extends SingleLineChartDataElement {
	value2: number;
}

export interface ITicketCardProps {
	id: number;
	title: string;
	status: 'Completed' | 'In-Progress' | 'Needs-Approval' | 'Action-Needed';
	createdDate: Date;
	address: {
		street: string;
		city: string;
		state: string;
		zipCode: string;
	};
}
// Children props for most layouts
export interface Props {
	children: string | JSX.Element | JSX.Element[];
}
