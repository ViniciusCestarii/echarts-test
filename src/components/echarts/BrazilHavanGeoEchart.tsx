"use client"
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import brazilGeoJson from '@/json/brazil_geo.json';

interface HavanFilial {
  idFilial: string
  numero: string
  nomeFilial: string
  horarioTrabalho: string
  latitude: number
  longitude: number
}

const mapOption = {
  tooltip: {
    formatter: (params: any) => (
      [params.value[3], params.value[4], params.value[5]].join('<br>')
    )
  },
  title: {
    text: 'Havan no Brasil usando Havan API',
    left: '1%'
  },
  geo: {
    map: 'Brasil_Json_map',
    roam: true,
    emphasis: {
      label: {
        show: false
      }
    },
  },
  series: [
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: function (params: number[]) {
        return (params[2] / 100) * 15 + 5;
      },
      itemStyle: {
        color: '#0077B6'
      },
      symbol:
          'path://M1 10c.41.29.96.43 1.5.43.55 0 1.09-.14 1.5-.43.62-.46 1-1.17 1-2 0 .83.37 1.54 1 2 .41.29.96.43 1.5.43.55 0 1.09-.14 1.5-.43.62-.46 1-1.17 1-2 0 .83.37 1.54 1 2 .41.29.96.43 1.51.43.54 0 1.08-.14 1.49-.43.62-.46 1-1.17 1-2 0 .83.37 1.54 1 2 .41.29.96.43 1.5.43.55 0 1.09-.14 1.5-.43.63-.46 1-1.17 1-2V7l-3-7H4L0 7v1c0 .83.37 1.54 1 2zm2 8.99h5v-5h4v5h5v-7c-.37-.05-.72-.22-1-.43-.63-.45-1-.73-1-1.56 0 .83-.38 1.11-1 1.56-.41.3-.95.43-1.49.44-.55 0-1.1-.14-1.51-.44-.63-.45-1-.73-1-1.56 0 .83-.38 1.11-1 1.56-.41.3-.95.43-1.5.44-.54 0-1.09-.14-1.5-.44-.63-.45-1-.73-1-1.57 0 .84-.38 1.12-1 1.57-.29.21-.63.38-1 .44v6.99z',
      encode: {
        tooltip: 2
      },
      data: [
      ]
    },
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: function (params: number[]) {
        return (params[2] / 100) * 15 + 5;
      },
      symbol:
      'path://M8 2L8 6L4 6L4 48L15 48L15 39L19 39L19 48L30 48L30 6L26 6L26 2 Z M 10 10L12 10L12 12L10 12 Z M 14 10L16 10L16 12L14 12 Z M 18 10L20 10L20 12L18 12 Z M 22 10L24 10L24 12L22 12 Z M 32 14L32 18L34 18L34 20L32 20L32 22L34 22L34 24L32 24L32 26L34 26L34 28L32 28L32 30L34 30L34 32L32 32L32 34L34 34L34 36L32 36L32 38L34 38L34 40L32 40L32 42L34 42L34 44L32 44L32 48L46 48L46 14 Z M 10 15L12 15L12 19L10 19 Z M 14 15L16 15L16 19L14 19 Z M 18 15L20 15L20 19L18 19 Z M 22 15L24 15L24 19L22 19 Z M 36 18L38 18L38 20L36 20 Z M 40 18L42 18L42 20L40 20 Z M 10 21L12 21L12 25L10 25 Z M 14 21L16 21L16 25L14 25 Z M 18 21L20 21L20 25L18 25 Z M 22 21L24 21L24 25L22 25 Z M 36 22L38 22L38 24L36 24 Z M 40 22L42 22L42 24L40 24 Z M 36 26L38 26L38 28L36 28 Z M 40 26L42 26L42 28L40 28 Z M 10 27L12 27L12 31L10 31 Z M 14 27L16 27L16 31L14 31 Z M 18 27L20 27L20 31L18 31 Z M 22 27L24 27L24 31L22 31 Z M 36 30L38 30L38 32L36 32 Z M 40 30L42 30L42 32L40 32 Z M 10 33L12 33L12 37L10 37 Z M 14 33L16 33L16 37L14 37 Z M 18 33L20 33L20 37L18 37 Z M 22 33L24 33L24 37L22 37 Z M 36 34L38 34L38 36L36 36 Z M 40 34L42 34L42 36L40 36 Z M 36 38L38 38L38 40L36 40 Z M 40 38L42 38L42 40L40 40 Z M 10 39L12 39L12 44L10 44 Z M 22 39L24 39L24 44L22 44 Z M 36 42L38 42L38 44L36 44 Z M 40 42L42 42L42 44L40 44Z',
      itemStyle: {
        color: '#023E8A'
      },
      encode: {
        tooltip: 2
      },
      data: [
        [-48.90583372402481, -27.099354236831417, 100, "Havan - Centro Administrativo"]
      ]
    }
  ]

};

const BrazilHavanMap = () => {
  const chartRef = useRef(null);
  const echartRef =  useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    const fetchFiliais = async () => {
      const response = await fetch('https://apigatewaywebapi.havan.com.br/dadosmestre/api/Filial/BuscarFiliaisProximas?pagina=1&itensPorPagina=1000');
      const data = await response.json();
      const filiais = data.result.itens as HavanFilial[];

      const newOption = {...mapOption}
      newOption.series[0].data = filiais.map((filial) => {
        return [filial.longitude, filial.latitude, 100, filial.nomeFilial, filial.horarioTrabalho, filial.numero];
      });

      echartRef.current?.setOption(newOption, true);
      echartRef.current?.hideLoading();
    }

    echarts.registerMap('Brasil_Json_map', { geoJSON: brazilGeoJson } as any);
    let myChart = echarts.init(chartRef.current, 'dark',);

    echartRef.current = myChart;
    echartRef.current.showLoading();
    fetchFiliais();

    return () => {
      myChart.dispose();
    }

  }, []);


  return <div ref={chartRef} style={{ height: '600px', width: '100%' }} />
};

export default BrazilHavanMap;
