import React from 'react';
import ReactEChartsClient from './ReactEchartsClient';

const FirstEchart = () => {
  const getOption = () => {
    return {
      title: {
        text: 'ECharts entry example'
      },
      tooltip: {},
      legend: {
        data: ['Sales']
      },
      xAxis: {
        data: ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"]
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      dataZoom: [
        {
          type: 'inside'
        },
        {
          type: 'slider'
        }
      ],
      yAxis: {},
      series: [{
        name: 'Sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
  }

  return (
    <ReactEChartsClient
      option={getOption()}
      style={{ height: '600px', width: '100%'}}
      opts={{ renderer: 'svg' }}
      theme="dark"
    />
  );
}

export default FirstEchart;