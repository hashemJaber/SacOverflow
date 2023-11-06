'use client';
import { useEffect } from 'react';

import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

import {
    SingleLineChartDataElement,
    DoubleLineChartDataElement,
} from '@/types/componentTypes';

// helper functions
import { generateRandomHexColor } from '@/utils/generalUtils';

function DoubleLineChart(props: {
    data: DoubleLineChartDataElement[];
    id: string;
    filterType: 'year' | 'month' | 'week';
}) {
    const { filterType, id } = props;

    // TODO: incorporate this use. mockaroo I cant get incremental data values, which our API should return for date
    let { data } = props;

    useEffect(() => {
        let root = am5.Root.new(`${id}`, {});

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([am5themes_Animated.new(root)]);

        root.dateFormatter.setAll({
            dateFormat: 'yyyy',
            dateFields: ['valueX'],
        });

        let data: DoubleLineChartDataElement[] = [
            {
                date: '2012-01-01',
                value: 8,
                value2: 5,
            },
            {
                date: '2012-01-02',
                value: 6,
                value2: 7,
            },
            {
                date: '2012-01-03',
                value: 12,
                value2: 10,
            },
            {
                date: '2012-01-04',
                value: 14,
                value2: 11,
            },
            {
                date: '2012-01-05',
                value: 11,
                value2: 6,
            },
        ];

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                focusable: true,
            })
        );

        let easing = am5.ease.linear;

        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        let xAxis = chart.xAxes.push(
            am5xy.DateAxis.new(root, {
                maxDeviation: 0.5,
                groupData: false,
                baseInterval: {
                    timeUnit: 'day',
                    count: 1,
                },
                renderer: am5xy.AxisRendererX.new(root, {
                    pan: 'zoom',
                    minGridDistance: 50,
                    // Hides the X-axis line legends 2 lines below
                    visible: false,
                    opposite: true,
                    strokeWidth: 0,
                }),
                tooltip: am5.Tooltip.new(root, {}),
                // Hides the X-axis
                visible: false,
            })
        );

        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                maxDeviation: 1,
                renderer: am5xy.AxisRendererY.new(root, {
                    // Hides the Y-axis line legends 2 lines below
                    visible: false,
                    opposite: true,
                }),
                // Hides the Y-axis
                visible: false,
            })
        );

        // Additionally, hide the grid lines for both axes
        yAxis.get('renderer').grid.template.setAll({
            visible: false,
        });
        xAxis.get('renderer').grid.template.setAll({
            visible: false,
        });

        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        let series = chart.series.push(
            am5xy.SmoothedXLineSeries.new(root, {
                minBulletDistance: 5,
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: 'value',
                valueXField: 'date',
                // set color of line
                stroke: am5.color(generateRandomHexColor()),
                tooltip: am5.Tooltip.new(root, {
                    labelText: '{valueY}',
                }),
            })
        );

        // Set up data processor to parse string dates
        // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
        series.data.processor = am5.DataProcessor.new(root, {
            dateFormat: 'yyyy-MM-dd',
            dateFields: ['date'],
        });
        series.data.setAll(data);

        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        let series2 = chart.series.push(
            am5xy.SmoothedXLineSeries.new(root, {
                minBulletDistance: 5,
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: 'value2',
                valueXField: 'date',
                // set color of line
                stroke: am5.color(generateRandomHexColor()),
                tooltip: am5.Tooltip.new(root, {
                    labelText: '{valueY}',
                }),
            })
        );

        // Set up data processor to parse string dates
        // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
        series2.data.processor = am5.DataProcessor.new(root, {
            dateFormat: 'yyyy-MM-dd',
            dateFields: ['date'],
        });
        series2.data.setAll(data);

        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div
            id={id}
            className="double-chart-container"
            style={{ width: 'auto', height: 'auto' }}
        ></div>
    );
}

function SingleLineChart(props: {
    data: SingleLineChartDataElement[];
    id: string;
    filterType: 'year' | 'month' | 'week';
}) {
    const { id } = props;

    // TODO: API call rout eshould return data as incremental values for the date
    let { data } = props;

    useEffect(() => {
        let root = am5.Root.new(`${id}`, {});
        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([am5themes_Animated.new(root)]);

        root.dateFormatter.setAll({
            dateFormat: 'yyyy',
            dateFields: ['valueX'],
        });

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                focusable: true,
            })
        );

        let easing = am5.ease.linear;

        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        let xAxis = chart.xAxes.push(
            am5xy.DateAxis.new(root, {
                maxDeviation: 0.5,
                groupData: false,
                baseInterval: {
                    timeUnit: 'day',
                    count: 1,
                },
                renderer: am5xy.AxisRendererX.new(root, {
                    pan: 'zoom',
                    minGridDistance: 50,
                    // Hides the X-axis line legends 2 lines below
                    visible: false,
                    opposite: true,
                    strokeWidth: 0,
                }),
                tooltip: am5.Tooltip.new(root, {}),
                // Hides the X-axis
                visible: false,
            })
        );

        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                maxDeviation: 1,
                renderer: am5xy.AxisRendererY.new(root, {
                    // Hides the Y-axis line legends 2 lines below
                    visible: false,
                    opposite: true,
                    strokeWidth: 0,
                }),
                // Hides the Y-axis
                visible: false,
            })
        );
        // Additionally, hide the grid lines for both axes
        yAxis.get('renderer').grid.template.setAll({
            visible: false,
        });
        xAxis.get('renderer').grid.template.setAll({
            visible: false,
        });

        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        let series = chart.series.push(
            am5xy.SmoothedXLineSeries.new(root, {
                minBulletDistance: 5,
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: 'value',
                valueXField: 'date',
                // set color of line
                stroke: am5.color(generateRandomHexColor()),
                tooltip: am5.Tooltip.new(root, {
                    labelText: '{valueY}',
                }),
            })
        );

        // Set up data processor to parse string dates
        // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
        series.data.processor = am5.DataProcessor.new(root, {
            dateFormat: 'yyyy-MM-dd',
            dateFields: ['date'],
        });
        series.data.setAll(data);

        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        var cursor = chart.set(
            'cursor',
            am5xy.XYCursor.new(root, {
                xAxis: xAxis,
            })
        );
        cursor.lineY.set('visible', false);
        return () => {
            root.dispose();
        };
    }, []);

    return (
        <div
            id={id}
            className="chart-container"
            style={{ width: 'auto', height: 'auto' }}
        ></div>
    );
}

export { SingleLineChart, DoubleLineChart };
