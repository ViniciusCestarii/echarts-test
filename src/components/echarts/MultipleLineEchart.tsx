import React from 'react';
import ReactEChartsClient from './ReactEchartsClient';

const MultipleLineEchart = () => {
  const option = {
    xAxis: {
      type: 'category',
      name: 'Mês',
      splitLine: { show: false },
      data: ["2023 Março", "2023 Abril", "2023 Maio", "2023 Junho", "2023 Julho", "2023 Agosto", "2023 Setembro", "2023 Outubro", "2023 Novembro", "2023 Dezembro", "2024 Janeiro", "2024 Fevereiro", "2024 Março"]
    },
    title: {
      text: 'Evolução do Trabalho',
      left: '1%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '10%'
    },
    yAxis: {
      name: 'Número de Trabalhadores',
    },
    toolbox: {
      right: 10,
      feature: {
        dataZoom: { yAxisIndex: 'none' },
        magicType: { type: ['line', 'bar'] },
        restore: {},
        saveAsImage: {}
      }
    },
    legend: {
      type: 'scroll',
      width: '60%',
      selected: {
        "Total Trabalhando": false,
      },
    },
    dataZoom: [
      {
        startValue: '2023 Agosto'
      },
      {
        type: 'inside'
      },
      {
        yAxisIndex: 0
      },
    ],
    series: [
      {
        name: "Total Trabalhando",
        type: 'line',
        symbolSize: 10,
        smooth: true,
        emphasis: {
          focus: 'series',
        },
        lineStyle: {
          width: 2
        },
        data: [80, 87, 95, 78, 82, 88, 91, 95, 89, 84, 89, 93, 87],
        markLine: {
          data: [{ type: 'average', name: 'Média'}],
        },
      },
      {
        name: "Tech Innovations Inc.",
        type: 'line',
        symbolSize: 10,
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        lineStyle: {
          width: 4
        },
        data: [36, 40, 40, 33, 43, 44, 43, 44, 44, 42, 40, 42, 43]
      },
      {
        name: "Galactic Solutions Ltd.",
        type: 'line',
        symbolSize: 10,
        smooth: true,
        emphasis: {
          focus: 'series',
        },
        lineStyle: {
          width: 4
        },
        data: [10, 11, 11, 10, 6, 9, 12, 11, 11, 7, 11, 13, 12]
      },
      {
        name: "Nebula Enterprises",
        type: 'line',
        symbolSize: 10,
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        lineStyle: {
          width: 4
        },
        data: [9, 9, 10, 9, 10, 11, 9, 11, 9, 9, 11, 12, 11]
      },
      {
        name: "Starlight Solutions LLC",
        type: 'line',
        symbolSize: 10,
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        lineStyle: {
          width: 4
        },
        data: [4, 3, 9, 5, 6, 6, 6, 7, 7, 7, 7, 6, 7]
      },
      {
        name: "Interstellar Services Inc.",
        type: 'line',
        symbolSize: 10,
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        lineStyle: {
          width: 4
        },
        data: [7, 7, 7, 6, 6, 7, 7, 7, 7, 9, 7, 7, 7]
      },
      {
        name: "Nova Solutions",
        type: 'line',
        symbolSize: 10,
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        lineStyle: {
          width: 4
        },
        data: [14, 17, 18, 15, 11, 11, 14, 15, 11, 10, 13, 13, 7]
      },
    ],
  };


  return (
    <ReactEChartsClient
      option={option}
      style={{ height: '600px', width: '100%' }}
      opts={{ renderer: 'svg' }}
      theme="dark"
    />
  );
}

export default MultipleLineEchart;