/**
 * This file contains the methods to fetch the data from the API for the components and
 * any wrangling of the data that needs to be done before it is passed to the components.
 *
 * @module "src/utils/dataUtils.ts"
 */

// env imports
import 'dotenv/config';

import { CategorySalesData, SalesOverviewData } from '@/types/componentTypes';

/**
 * Method to fetch the spending categories data from an API, returning the values for the bottom half of our widget.
 * @returns a promise of the spending categories data
 */
export const getSpendingCategories = async (): Promise<CategorySalesData[]> => {
	const response = await fetch('https://my.api.mockaroo.com/categories_api', {
		method: 'GET',
		headers: {
			'content-type': 'text/json',
			'X-API-Key': `${process.env.MOCKAROO_JUNIOR_API_KEY}`,
		},
	});

	if (!response.ok) {
		// return empty object
		return [
			{
				category: '',
				total: 0,
				data: [],
			},
		];
	}

	const data = await response.json();
	return data;
};

/**
 * Method to fetch the sales overview data from an API, returning the values for the top half of our widget.
 * @returns a promise of the sales overview data
 */
export const getSalesOverviewData = async (): Promise<SalesOverviewData> => {
	const response = await fetch(
		'https://my.api.mockaroo.com/sales_overview_data',
		{
			method: 'GET',
			headers: {
				'content-type': 'text/json',
				'X-API-Key': `${process.env.MOCKAROO_JUNIOR_API_KEY}`,
			},
		},
	);

	if (!response.ok) {
		// return empty object
		return {
			total: 0,
			previousTotal: 0,
			data: [],
		};
	}

	const data = await response.json();
	return data[0];
};
