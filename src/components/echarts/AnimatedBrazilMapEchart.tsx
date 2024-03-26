"use client"
import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import exportSvgImage, {brazilSvgString} from '../svg/utils';
 
const data = [
  { "name": "Acre", "value": 0.91 },
  { "name": "Alagoas", "value": 3.35 },
  { "name": "Amapá", "value": 0.86 },
  { "name": "Amazonas", "value": 4.21 },
  { "name": "Bahia", "value": 15.44 },
  { "name": "Ceará", "value": 9.21 },
  { "name": "Distrito Federal", "value": 3.1 },
  { "name": "Espírito Santo", "value": 4.06 },
  { "name": "Goiás", "value": 7.02 },
  { "name": "Maranhão", "value": 7.11 },
  { "name": "Mato Grosso", "value": 3.52 },
  { "name": "Mato Grosso do Sul", "value": 2.85 },
  { "name": "Minas Gerais", "value": 21.29 },
  { "name": "Pará", "value": 8.73 },
  { "name": "Paraíba", "value": 4.03 },
  { "name": "Paraná", "value": 11.44 },
  { "name": "Pernambuco", "value": 9.62 },
  { "name": "Piauí", "value": 3.28 },
  { "name": "Rio de Janeiro", "value": 17.47 },
  { "name": "Rio Grande do Norte", "value": 3.53 },
  { "name": "Rio Grande do Sul", "value": 11.46 },
  { "name": "Rondônia", "value": 1.79 },
  { "name": "Roraima", "value": 0.63 },
  { "name": "Santa Catarina", "value": 7.28 },
  { "name": "São Paulo", "value": 46.29 },
  { "name": "Sergipe", "value": 2.32 },
  { "name": "Tocantins", "value": 1.57 }
]

data.sort(function (a, b) {
  return a.value - b.value;
});

const mapOption = {
  tooltip: {
    formatter: '{b}: {c} milhões'
  },
  title: {
    text: 'População Brasileria 2024 (em milhões)',
    left: '1%'
  },
  visualMap: {
    right: '10%',
    top: '15%',
    min: data[data.length -1].value,
    max: data[0].value,
    orient: 'vertical',
    text: ['', 'População em milhões'],
    realtime: true,
    calculable: true,
    inRange: {
      color: ['#CAF0F8', '#90E0EF', '#0077B6', '#023E8A']
    },
  },
  series: 
    {
      id: 'population',
      name: 'Poulação Brasileira 2024',
      type: 'map',
      map: 'Brazil_map',
      roam: true,
      itemStyle: {
        emphasis: {
           areaColor: null,
           borderColor: '#023E8A',
           borderWidth: 1
        }  
      },
      emphasis: {
        label: {
          show: false
        }
      },
      selectedMode: false,
      data: data,
    }
  
};

const barOption = {
  tooltip: {
    formatter: '{b}: {c} milhões'
  },
  title: {
    text: 'População Brasileria 2024 (em milhões)',
    left: '1%'
  },
  visualMap: {
    right: '10%',
    top: '15%',
    min: data[data.length -1].value,
    max: data[0].value,
    orient: 'vertical',
    text: ['', 'População em milhões'],
    realtime: true,
    calculable: true,
    inRange: {
      color: ['#CAF0F8', '#90E0EF', '#0077B6', '#023E8A']
    },
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    axisLabel: {
      rotate: 30
    },
    data: data.map(function (item) {
      return item.name;
    })
  },
  series: {
    id: 'population',
    type: 'bar',
    data: data.map(function (item) {
      return item.value;
    }),
  }
};

const AnimatedBrazilMapEchart = () => {
  const chartRef = useRef(null);
  const echartRef = useRef<null |  echarts.ECharts>(null);
  const [isMap, setIsMap] = useState(true)

  useEffect(() => {
    echarts.registerMap('Brazil_map', { svg: exportSvgImage(brazilSvgString) });
    let myChart = echarts.init(chartRef.current, 'dark');

    echartRef.current = myChart;

    return () => {
      myChart.dispose();
    }
  }, []);

  useEffect(() => {
    if (echartRef.current) {
      let currentOption: any = isMap ? mapOption : barOption;
      echartRef.current.setOption(currentOption, true);
    }
  }, [isMap])

  return (<>
    <button onClick={() => setIsMap(!isMap)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">mudar tipo de gráfico</button>

  <div ref={chartRef} style={{ height: '600px', width: '100%' }} /></>)
};

export default AnimatedBrazilMapEchart;
