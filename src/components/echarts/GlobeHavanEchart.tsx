"use client"
import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import 'echarts-gl';
import { fetchHavanBranches } from '@/utils/fetch';

const mapOption = {
  tooltip: {
    formatter: (params: any) => (
      [params.value[3], params.value[4], params.value[5]].join('<br>')
    )
  },
  title: {
    text: 'Havan no Mundo usando Havan API',
    left: '1%'
  },
  globe: {
    environment: "/starfield.jpg",
    baseTexture: "/world.topo.bathy.jpg",
    heightTexture: "/world.topo.bathy.jpg",
    viewControl: {
      autoRotate: false,
    },
    displacementScale: 0.03,
  },
  series: [
    {
      type: 'scatter3D',
      coordinateSystem: 'globe',
      blendMode: 'lighter',
      emphasis: {
        label: {
          show: false
        }
      },

      itemStyle: {
        color: '#0077B6'
      },
    }
  ],
};

const styledOption = {
  ...mapOption,
  globe: {
    ...mapOption.globe,
    globeOuterRadius: 100,
    baseColor: 'blue',
    shading: 'realistic',
    realisticMaterial: {
      roughness: 0.2,
      metalness: 0
    },
    postEffect: {
      enable: true,
      depthOfField: {
        focalRange: 100,
        enable: true,
        focalDistance: 100
      }
    },
    temporalSuperSampling: {
      enable: true
    },
    light: {
      ambient: {
        intensity: 0.5
      },
      main: {
        intensity: 0.1,
        shadow: false
      },
    },
  }
}

const unstyledOption = {
  ...mapOption,
  globe: {
    ...mapOption.globe,
    shading: 'lambert',
    light: {
      ambient: {
        intensity: 1
      },
    },
  },
}

const initialIsStyled = false;

const GlobeHavanMap = () => {
  const chartRef = useRef(null);
  const echartRef = useRef<echarts.ECharts | null>(null);
  const [isStyled, setIsStyled] = useState(initialIsStyled);

  useEffect(() => {
    const fetchFiliais = async () => {
      const filiais = await fetchHavanBranches();

      const newOption = { ...(initialIsStyled ? styledOption : unstyledOption) } as any
      newOption.series[0].data = filiais.map((filial) => {
        return [filial.longitude, filial.latitude, 0, filial.nomeFilial, filial.horarioTrabalho, filial.numero];
      });

      echartRef.current?.setOption(newOption, true);
      echartRef.current?.hideLoading();
    }
    let myChart = echarts.init(chartRef.current, 'dark',);

    echartRef.current = myChart;
    echartRef.current.showLoading();
    fetchFiliais();

    return () => {
      myChart.dispose();
    }

  }, []);

  useEffect(() => {
    if (echartRef.current) {
      const currentOption = isStyled ? styledOption : unstyledOption 
      echartRef.current.setOption(currentOption, true);
    }
  }, [isStyled]);


  return (<>
    <button onClick={() => setIsStyled(!isStyled)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">mudar estilo do mapa</button>

    <div ref={chartRef} style={{ height: '600px', width: '100%' }} /></>)
};

export default GlobeHavanMap;
