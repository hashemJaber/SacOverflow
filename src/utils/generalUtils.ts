/**
 * General utility methods.
 *
 * @module "src/utils/generalUtils.ts"
 */

// generate a random hex color
// https://stackoverflow.com/questions/1484506/random-color-generator
/**
 * Method to generate a random hex color.
 *
 * @returns a random hex color
 */
export const generateRandomHexColor = (): string => {
	return (
		'#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0')
	);
};

/**
 * Method to calculate the percentage difference between two amounts.
 *
 * @param amount The current amount
 * @param previousAmount The previous amount to compare against
 * @returns a string representation of the percentage difference between the two amounts (rounded to 2 decimals)
 */
export const calculatePercentageDifference = (
	amount: number,
	previousAmount: number,
) => {
	const percentage = amount / previousAmount;
	// return percentage to 2 decimal places
	return percentage.toFixed(2);
};
