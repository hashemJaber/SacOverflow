'use client';
import { useLayoutEffect, useState } from 'react';

import * as am5 from '@amcharts/amcharts5';
import * as am5radar from '@amcharts/amcharts5/radar';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

interface ArcGaugeChartDataElement {
	month: string;
	value: number;
}

function getMinMaxValue(data: ArcGaugeChartDataElement[]) {
	// const convertObjectValues = Object.values(data);

	const convertObjectValues = Object.values(data).map(({ value }) => value);

	const min = Math.min(...convertObjectValues);
	const max = Math.max(...convertObjectValues);

	return { min, max };
}

// Meh
function getPercentageValue(data: ArcGaugeChartDataElement[], key: string) {
	const convertObjectValues = Object.values(data).map(
		element => element.value,
	);
	const max = Math.max(...convertObjectValues);

	const idx = parseInt(key);

	// const percentVal = (data[key].value * 100) / max;
	const percentVal = (data[idx].value * 100) / max;
	return percentVal;
}

// Guidance https://www.amcharts.com/demos/animated-gauge/
const ArcGaugeChart = (props: {
	data?: ArcGaugeChartDataElement[];
	id: string;
	className?: string;
}) => {
	const [currentMonth, setCurrentMonth] = useState('January');
	const [chartFill, setChartFill] = useState(0);
	const [currentValue, setCurrentValue] = useState(0);

	const updateMonth = (month: string) => {
		setCurrentMonth(month);
		const monthsArray = Object.entries(months).map(([key, value]) => ({
			month: key,
			value: value,
		}));
		const percentVal = getPercentageValue(monthsArray, month);
		setChartFill(percentVal);
		setCurrentValue(months[month as keyof typeof months]);
	};

	// fetch from API here
	const months = {
		January: 0,
		February: 3000.25,
		March: 15424.25,
		April: 12345.86,
		May: 17654.21,
		June: 12345.86,
		July: 12140.22,
		August: 13589.12,
		September: 12301.12,
		October: 14435.86,
		November: 12789.99,
		December: 11215.94,
	};

	const monthsArray: ArcGaugeChartDataElement[] = Object.entries(months).map(
		([month, value]) => {
			return { month, value };
		},
	);

	// get min and max values
	const { min, max } = getMinMaxValue(monthsArray);

	// convert object to object with percentage attributes TODO: implement filling chart dynamically
	const newData = Object.entries(months).map(([month, value]) => {
		const percent = (value / max) * 100;
		return { month, value: percent };
	});

	const { data, id, className } = props;
	useLayoutEffect(() => {
		// use this to mount the chart
		// Create root element
		// https://www.amcharts.com/docs/v5/getting-started/#Root_element
		const root = am5.Root.new(`${id}`);

		root.setThemes([am5themes_Animated.new(root)]);

		// Create chart
		// https://www.amcharts.com/docs/v5/charts/radar-chart/
		const chart = root.container.children.push(
			am5radar.RadarChart.new(root, {
				panX: false,
				panY: false,
				startAngle: 180,
				endAngle: 360,
				innerRadius: am5.percent(20),
			}),
		);

		chart.getNumberFormatter().set('numberFormat', "#'%'");

		// Create axis and its renderer
		// https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Axes
		const axisRenderer = am5radar.AxisRendererCircular.new(root, {
			innerRadius: -25,
		});

		axisRenderer.grid.template.setAll({
			stroke: root.interfaceColors.get('background'),
			visible: true,
			strokeOpacity: 0.8,
		});

		const xAxis = chart.xAxes.push(
			am5xy.ValueAxis.new(root, {
				maxDeviation: 0,
				min: 0,
				max: 100,
				strictMinMax: true,
				renderer: axisRenderer,
			}),
		);

		xAxis.get('renderer').labels.template.setAll({
			visible: false,
		});

		// Add clock hand
		// https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
		const axisDataItem = xAxis.makeDataItem({});
		xAxis.createAxisRange(axisDataItem);

		const label = chart.radarContainer.children.push(
			am5.Label.new(root, {
				centerX: am5.percent(50),
				textAlign: 'center',
				centerY: am5.percent(50),
				fontSize: '1.5em',
				fill: am5.color(0x0000),
				fontWeight: 'bold',
				text: `$453.12`,
			}),
		);

		// center label
		chart.bulletsContainer.set('mask', undefined);

		const axisRange0 = xAxis.createAxisRange(
			xAxis.makeDataItem({
				above: true,
				value: 0,
				// endValue: chartFill, // TODO: dynamically have this value set based off incoming props
				endValue: 70,
			}),
		);

		// set radius of this axis
		axisRange0.get('axisFill')?.setAll({
			visible: true,
			fill: am5.color(0x346e53),
		});

		axisRange0.get('label')?.setAll({
			forceHidden: true,
		});

		// secnod half of arc gauge chart; white bg
		const axisRange1 = xAxis.createAxisRange(
			xAxis.makeDataItem({
				above: false,
				value: 0,
				endValue: 100,
			}),
		);

		axisRange1.get('axisFill')?.setAll({
			visible: true,
			fill: am5.color(0xf1f1f4),
		});

		axisRange1.get('label')?.setAll({
			forceHidden: true,
		});

		return () => {
			root.dispose();
		};
	}, []);

	return (
		<>
			<div
				id={id}
				className={`${className}`}
				style={{ width: 'auto', height: '100%' }}
			></div>

			<div
				className={`flex justify-between text-sm border-gray-300 w-full border-t-2 p-2 flex-wrap `}
			>
				{Object.keys(months).map((month, idx) => (
					<span
						key={idx}
						onClick={() => updateMonth(month)}
						className={`cursor-pointer p-3 rounded-xl ${
							currentMonth === month
								? 'text-primary-green-500 bg-blue-100'
								: ' hover:bg-blue-200'
						}`}
					>
						{month}
					</span>
				))}
			</div>
		</>
	);
};

export default ArcGaugeChart;
