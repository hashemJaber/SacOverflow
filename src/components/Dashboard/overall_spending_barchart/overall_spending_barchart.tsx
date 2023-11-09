'use client';

import React, { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

interface PieChartDataElement {
	value: number;
	category: string;
}

function PieChart(props: { className: string }) {
	const { className } = props;
	useEffect(() => {
		// Create root element
		const root = am5.Root.new('chartdiv1');

		// Set themes
		root.setThemes([am5themes_Animated.new(root)]);

		// Create chart
		const chart = root.container.children.push(
			am5percent.PieChart.new(root, {
				layout: root.verticalLayout,
			}),
		);

		// Create series
		const series = chart.series.push(
			am5percent.PieSeries.new(root, {
				alignLabels: true,
				calculateAggregates: true,
				valueField: 'value',
				categoryField: 'category',
				innerRadius: am5.percent(50), // This makes the chart a donut chart
			}),
		);

		// remove text for labels
		series.labels.template.setAll({
			// remove labels
			visible: false,
		});

		// set depth of chart

		series.slices.template.setAll({
			strokeWidth: 3,
			stroke: am5.color(0xffffff),
		});

		series.labelsContainer.set('paddingTop', 30);

		const data: PieChartDataElement[] = [
			{
				value: 10,
				category: 'One',
			},
			{
				value: 9,
				category: 'Two',
			},
			{
				value: 6,
				category: 'Three',
			},
			{
				value: 5,
				category: 'Four',
			},
			{
				value: 4,
				category: 'Five',
			},
			{
				value: 3,
				category: 'Six',
			},
		];

		// Set data
		series.data.setAll(data); // Add your data here

		// hide ticks
		series.ticks.template.setAll({
			visible: false,
		});

		// Create legend
		const legend = chart.children.push(
			am5.Legend.new(root, {
				centerX: am5.p50,
				x: am5.p50,
				marginTop: 15,
				marginBottom: 15,
				visible: false,
			}),
		);

		// legend.data.setAll(series.dataItems);

		// Add label for center text
		const centerTextLabel = chart.seriesContainer.children.push(
			am5.Label.new(root, {
				text: '[bold]$452[/]\nSeptember',
				centerX: am5.percent(50),
				textAlign: 'center',
				centerY: am5.percent(50),
				fontSize: `.5rem`,
				// make font size responsive to screen size
				// fontSize: am5.percent(70),
			}),
		);

		// Play initial series animation
		series.appear(1000, 100);

		// Cleanup
		return () => root.dispose();
	}, []);

	return (
		<div
			id="chartdiv1"
			className={`${className}`}
			style={{ width: '100%', height: '100%' }}
		></div>
	);
}

export default PieChart;
