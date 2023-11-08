'use client';

import React, { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

interface PieChartDataElement {
    value: number;
    cataegory: string;
}

function PieChart(props) {
    const { className } = props;
    useEffect(() => {
        // Create root element
        let root = am5.Root.new('chartdiv1');

        // Set themes
        root.setThemes([am5themes_Animated.new(root)]);

        // Create chart
        let chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                layout: root.verticalLayout,
            })
        );

        // Create series
        let series = chart.series.push(
            am5percent.PieSeries.new(root, {
                alignLabels: true,
                calculateAggregates: true,
                valueField: 'value',
                categoryField: 'category',
                innerRadius: am5.percent(50), // This makes the chart a donut chart
            })
        );

        // remove text for labels
        series.labels.template.setAll({
            // remove labels
            visible: false,
        });

        series.slices.template.setAll({
            strokeWidth: 3,
            stroke: am5.color(0xffffff),
        });

        series.labelsContainer.set('paddingTop', 30);

        // Set data
        series.data.setAll([
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
        ]); // Add your data here

        // Create legend
        let legend = chart.children.push(
            am5.Legend.new(root, {
                centerX: am5.p50,
                x: am5.p50,
                marginTop: 15,
                marginBottom: 15,
                visible: false,
            })
        );

        // legend.data.setAll(series.dataItems);

        // Add label for center text
        let centerLabel = chart.seriesContainer.children.push(
            am5.Label.new(root, {
                text: 'Enter Text',
                centerX: am5.percent(50),
                centerY: am5.percent(50),
                fontSize: `.45rem`,
            })
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
