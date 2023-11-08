'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import * as am5 from '@amcharts/amcharts5';
import * as am5radar from '@amcharts/amcharts5/radar';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

interface ArcGaugeChartDataElement {
    month: string;
    value: number;
}

function getMinMaxValue(data: ArcGaugeChartDataElement[]) {
    const convertObjectValues = Object.values(data);

    const min = Math.min(...convertObjectValues);
    const max = Math.max(...convertObjectValues);

    return { min, max };
}

// Meh
function getPercentageValue(data: ArcGaugeChartDataElement[], key: string) {
    const convertObjectValues = Object.values(data);
    const max = Math.max(...convertObjectValues);

    const percentVal = (data[key] * 100) / max;
    return percentVal;
}

// Guidance https://www.amcharts.com/demos/animated-gauge/
const ArcGaugeChart = (props) => {
    const [currentMonth, setCurrentMonth] = useState('January');
    const [chartFill, setChartFill] = useState(0);
    const [currentValue, setCurrentValue] = useState(0);

    const chartRef = useRef(null);

    const updateMonth = (month) => {
        setCurrentMonth(month);
        let tmp = getPercentageValue(months, month);
        setChartFill(tmp);
        setCurrentValue(months[month]);
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

    // get min and max values
    const { min, max } = getMinMaxValue(months);

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
        let root = am5.Root.new(`${id}`);

        root.setThemes([am5themes_Animated.new(root)]);

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/radar-chart/
        let chart = root.container.children.push(
            am5radar.RadarChart.new(root, {
                panX: false,
                panY: false,
                startAngle: 180,
                endAngle: 360,
                innerRadius: am5.percent(20),
            })
        );

        chart.getNumberFormatter().set('numberFormat', "#'%'");

        // Create axis and its renderer
        // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Axes
        let axisRenderer = am5radar.AxisRendererCircular.new(root, {
            innerRadius: -25,
        });

        axisRenderer.grid.template.setAll({
            stroke: root.interfaceColors.get('background'),
            visible: true,
            strokeOpacity: 0.8,
        });

        let xAxis = chart.xAxes.push(
            am5xy.ValueAxis.new(root, {
                maxDeviation: 0,
                min: 0,
                max: 100,
                strictMinMax: true,
                renderer: axisRenderer,
            })
        );

        xAxis.get('renderer').labels.template.setAll({
            visible: false,
        });

        // Add clock hand
        // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
        let axisDataItem = xAxis.makeDataItem({});

        let clockHand = am5radar.ClockHand.new(root, {
            pinRadius: 50,
            radius: am5.percent(100),
            innerRadius: 50,
            bottomWidth: 0,
            topWidth: 0,
        });

        clockHand.pin.setAll({
            fillOpacity: 0,
            strokeOpacity: 0.5,
            forceHidden: true,
            stroke: am5.color(0x000000),
            // strokeWidth: 1,
            strokeDasharray: [2, 2],
        });
        clockHand.hand.setAll({
            fillOpacity: 0,
            strokeOpacity: 0.5,
            forceHidden: true,
            stroke: am5.color(0x000000),
        });

        let bullet = axisDataItem.set(
            'bullet',
            am5xy.AxisBullet.new(root, {
                sprite: clockHand,
            })
        );

        xAxis.createAxisRange(axisDataItem);
        xAxis.set('', 180);

        let label = chart.radarContainer.children.push(
            am5.Label.new(root, {
                centerX: am5.percent(50),
                textAlign: 'center',
                centerY: am5.percent(50),
                fontSize: '1.25em',
            })
        );

        // TODO: dynamically have this value set based off incoming props
        // axisDataItem.set('value', chartFill);
        axisDataItem.set('value', 70);

        // center label
        bullet.get('sprite').on('rotation', function () {
            // set text and styling of it
            let value = axisDataItem.get('value');

            label.set('text', '$454.56');
            // FIXME: implement here
            // label.set('text', `${currentValue.toFixed(0)}`);
            label.set('fontWeight', 'bold');
            label.set('fill', am5.color(0x0000));
            label.set('fontSize', '1.5em');
        });

        chart.bulletsContainer.set('mask', undefined);

        let colorSet = am5.ColorSet.new(root, {});

        let axisRange0 = xAxis.createAxisRange(
            xAxis.makeDataItem({
                above: true,
                value: 0,
                // endValue: chartFill, // TODO: dynamically have this value set based off incoming props
                endValue: 70,
            })
        );

        // set radius of this axis
        axisRange0.get('axisFill').setAll({
            visible: true,
            // fill: colorSet.getIndex(0),
            fill: am5.color(0x346e53),
            // rounded effect
            cornerRadius: 10,
        });

        axisRange0.get('label').setAll({
            forceHidden: true,
        });

        // secnod half of arc gauge chart; white bg
        let axisRange1 = xAxis.createAxisRange(
            xAxis.makeDataItem({
                above: false,
                value: 0,
                endValue: 100,
            })
        );

        axisRange1.get('axisFill').setAll({
            visible: true,
            fill: am5.color(0xf1f1f4),
            cornerRadius: 10,
        });

        axisRange1.get('label').setAll({
            forceHidden: true,
        });

        return () => {
            root.dispose();
        };
    }, []);

    // useLayoutEffect(() => {
    //     chartRef.current.set('paddingRight', props.paddingRight);
    // }, [props.paddingRight]);

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
