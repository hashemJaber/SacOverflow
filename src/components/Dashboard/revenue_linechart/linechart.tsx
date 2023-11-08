'use client';

import React, { useRef, useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

function LineChart(props) {
    let { id, className } = props;
    const chartRef = useRef(null);

    useLayoutEffect(() => {
        let root = am5.Root.new(`${id}`);

        root.setThemes([
            am5themes_Animated.new(root),
            // am5themes_Responsive.new(root, {
            //   rules: [
            //     {
            //       // When on a small width device like mobile
            //       relevant: (target) => target.pixelWidth <= 600,
            //       state: (target, stateId) => {
            //         if (target instanceof am5xy.CategoryAxis) {
            //           target.get("renderer").labels.template.setAll({
            //             fontSize: 10, // Reduce the font size
            //             rotation: -45, // Rotate labels to prevent overlap
            //             centerY: am5.p50,
            //             centerX: am5.p100
            //           });
            //           target.get("renderer").minGridDistance = 50; // Increase the grid distance
            //         }
            //         if (target instanceof am5xy.ValueAxis) {
            //           target.get("renderer").labels.template.setAll({
            //             fontSize: 10 // Reduce the font size
            //           });
            //         }
            //         if (target instanceof am5.Circle) {
            //           // If this is a bullet, reduce its size
            //           target.setAll({ radius: 2 });
            //         }
            //         return stateId;
            //       }
            //     },
            //     {
            //       // When on a medium width device
            //       relevant: (target) => target.pixelWidth > 600 && target.pixelWidth <= 800,
            //       state: (target, stateId) => {
            //         if (target instanceof am5xy.CategoryAxis) {
            //           target.get("renderer").labels.template.setAll({
            //             fontSize: 12, // Slightly larger font size
            //             rotation: -45, // Rotate labels to prevent overlap
            //             centerY: am5.p50,
            //             centerX: am5.p100
            //           });
            //           target.get("renderer").minGridDistance = 40; // Slightly reduce the grid distance
            //         }
            //         if (target instanceof am5xy.ValueAxis) {
            //           target.get("renderer").labels.template.setAll({
            //             fontSize: 12 // Slightly larger font size
            //           });
            //         }
            //         return stateId;
            //       }
            //     }
            //     // Add more rules as needed
            //   ]
            // })
        ]);

        // Create chart
        let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                wheelX: 'panX',
                wheelY: 'zoomX',
                pinchZoomX: true,
            })
        );

        // Add cursor
        let cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}));
        cursor.lineY.set('visible', false);

        // Create axes
        let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
        let xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
                maxDeviation: 0.3,
                categoryField: 'date',
                renderer: xRenderer,
                tooltip: am5.Tooltip.new(root, {}),
                // font size
            })
        );
        xAxis.get('renderer').labels.template.setAll({
            fontSize: `.5rem`,
        });

        let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {}),
            })
        );
        yAxis.get('renderer').labels.template.setAll({
            fontSize: `.6rem`,
        });

        // Add series
        function makeSeries(name, fieldName, color) {
            let series = chart.series.push(
                am5xy.LineSeries.new(root, {
                    name: name,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: fieldName,
                    categoryXField: 'date',
                    stroke: am5.color(color),
                    tooltip: am5.Tooltip.new(root, {
                        labelText: '{valueY}',
                    }),
                })
            );

            series.strokes.template.set('strokeWidth', 2);
            series.data.setAll(chartData);

            let bullet = series.bullets.push(function () {
                return am5.Bullet.new(root, {
                    sprite: am5.Circle.new(root, {
                        radius: 4,
                        fill: am5.color(color),
                    }),
                });
            });

            chartRef.current = chart;
        }

        // Set data
        let chartData = [
            {
                date: new Date('2023-01-01'),
                income: 6500,
                expenses: 4800,
            },
            {
                date: new Date('2023-02-15'),
                income: 5400,
                expenses: 4100,
            },
            {
                date: new Date('2023-02-20'),
                income: 6700,
                expenses: 4300,
            },
            {
                date: new Date('2023-03-10'),
                income: 7100,
                expenses: 3900,
            },
        ];

        // Create series for each category
        makeSeries('Income', 'income', '#34568B');
        makeSeries('Expenses', 'expenses', '#FF6F61');

        // Add legend
        let legend = chart.children.push(
            am5.Legend.new(root, {
                centerX: am5.p50,
                x: am5.p50,
            })
        );
        legend.data.setAll(chart.series.values);

        xAxis.data.setAll(chartData);

        return () => {
            root.dispose();
        };
    }, []);

    // return <div id={`${id}`} style={{ width: '100%', height: '300px' }}></div>;
    return (
        <div
            id={`${id}`}
            className={`${className}`}
            style={{ width: '100%', height: '20rem' }}
        ></div>
    );
}

export default LineChart;
