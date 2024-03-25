"use client"
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const MultipleLineWithPieEchart = () => {
  const chartRef = useRef(null);
  const prevXAxisValue = useRef(-1);
  const chartHasRendered = useRef(false);

  useEffect(() => {
    let myChart = echarts.init(chartRef.current, 'dark');

    const option = {
      legend: {},
      tooltip: {
        trigger: 'axis',
        showContent: false
      },
      dataset: {
        source: [
          ['Trabalhando', '2023 Março', '2023 Abril', '2023 Maio', '2023 Junho', '2023 Julho', '2023 Agosto', '2023 Setembro', '2023 Outubro', '2023 Novembro', '2023 Dezembro', '2024 Janeiro', '2024 Fevereiro', '2024 Março'],
          ['Tech Innovations Inc.', 80, 87, 95, 78, 82, 88, 91, 95, 89, 84, 89, 93, 87],
          ['Galactic Solutions Ltd.', 36, 40, 40, 33, 43, 44, 43, 44, 44, 42, 40, 42, 43],
          ['Nebula Enterprises', 10, 11, 11, 10, 6, 9, 12, 11, 11, 7, 11, 13, 12],
          ['Starlight Solutions LLC', 9, 9, 10, 9, 10, 11, 9, 11, 9, 9, 11, 12, 11],
          ['Interstellar Services Inc.', 4, 3, 9, 5, 6, 6, 6, 7, 7, 7, 7, 6, 7],
          ['Nova Solutions', 7, 7, 7, 6, 6, 7, 7, 7, 7, 9, 7, 7, 7]
        ]
      },
      axis: {
        triggerEvent: true
      },
      xAxis: { type: 'category', triggerEvent: true },
      yAxis: { gridIndex: 0 },
      grid: { top: '55%' },
      graphic: [
        {
          id: 'dateText',
          type: 'text',
          right: "center",
          top: "23.5%",
          style: {
            text: '2024 Março',
            textAlign: 'center',
            fill: '#fff',
            fontSize: 14
          }
        }
      ],
      series: [
        { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
        { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
        { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
        { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
        { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
        { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
        {
          type: 'pie',
          id: 'pie',
          radius: ['18%', '30%'],
          center: ['50%', '25%'],
          emphasis: { focus: 'self' },
          label: { formatter: '{b}: {@2024 Março} ({d}%)' },
          encode: { itemName: 'Trabalhando', value: '2024 Março', tooltip: '2024 Março' }
        }
      ]
    };

    myChart.setOption(option);

    myChart.on('finished', () => {
      chartHasRendered.current = true;
    })

    myChart.on('updateAxisPointer', (event: any) => {
      if (!chartHasRendered.current) {
        return
      }

      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const currentXAxisValue = xAxisInfo.value;
        if (currentXAxisValue !== prevXAxisValue.current) {
          const dimension = currentXAxisValue + 1;
          myChart.setOption({
            series: {
              id: 'pie',
              label: { formatter: '{b}: {@[' + dimension + ']} ({d}%)' },
              encode: { value: dimension, tooltip: dimension }
            },
            graphic: [{
              id: 'dateText',
              type: 'text',
              style: {
                text: option.dataset.source[0][dimension],
              }
            }]
          });
          prevXAxisValue.current = currentXAxisValue;
        }
      }
    });

    return () => {
      myChart.dispose()
    };
  }, []);

  return <div ref={chartRef} style={{ height: '600px', width: '100%' }} />;
};

export default MultipleLineWithPieEchart;
