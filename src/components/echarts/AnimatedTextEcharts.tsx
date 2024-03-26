"use client"
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const option = {
  graphic: {
    elements: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        width: 100,
        style: {
          text: 'Placeholder',
          fontSize: 60,
          width: 100,
          lineDash: [0, 200],
          lineDashOffset: 0,
          fill: 'transparent',
          stroke: 'white',
          lineWidth: 1
        },
        keyframeAnimation: {
          duration: 1000,
          keyframes: [
            {
              percent: 0.7,
              style: {
                fill: 'transparent',
                lineDashOffset: 200,
                lineDash: [200, 0]
              }
            },
            {
              percent: 0.8,
              style: {
                fill: 'transparent'
              }
            },
            {
              percent: 1,
              style: {
                fill: 'white'
              }
            }
          ]
        }
      }
    ]
  }
};

interface AnimatedTextEchartsProps {
  text: string
}

const AnimatedTextEcharts = ({text}: AnimatedTextEchartsProps) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let myChart = echarts.init(chartRef.current, 'dark', {renderer: 'svg'});
    option.graphic.elements[0].style.text = text;
    myChart.setOption(option)

    return () => {
      myChart.dispose();
    }
  }, [text]);

  return <div ref={chartRef} style={{ height: '600px', width: '100%' }} />
};

export default AnimatedTextEcharts;
