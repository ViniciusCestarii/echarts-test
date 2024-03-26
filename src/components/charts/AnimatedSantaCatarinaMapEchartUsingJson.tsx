"use client"
import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import santaCatarinaGeoJson from '@/json/santa_catarina_geo.json';
const data = [
  { "name": "Abdon Batista", "value": 2.6 },
  { "name": "Abelardo Luz", "value": 17.39 },
  { "name": "Agrolândia", "value": 11.01 },
  { "name": "Agronômica", "value": 6.055 },
  { "name": "Água Doce", "value": 6.286 },
  { "name": "Águas de Chapecó", "value": 5.872 },
  { "name": "Águas Frias", "value": 2.802 },
  { "name": "Águas Mornas", "value": 6.765 },
  { "name": "Alfredo Wagner", "value": 10.455 },
  { "name": "Alto Bela Vista", "value": 1.859 },
  { "name": "Anchieta", "value": 5.942 },
  { "name": "Angelina", "value": 5.497 },
  { "name": "Anita Garibaldi", "value": 8.286 },
  { "name": "Anitápolis", "value": 3.463 },
  { "name": "Antônio Carlos", "value": 11.295 },
  { "name": "Apiúna", "value": 11.926 },
  { "name": "Arabutã", "value": 4.378 },
  { "name": "Araquari", "value": 45.462 },
  { "name": "Araranguá", "value": 72.138 },
  { "name": "Armazém", "value": 8.825 },
  { "name": "Arroio Trinta", "value": 3.556 },
  { "name": "Arvoredo", "value": 2.539 },
  { "name": "Ascurra", "value": 8.408 },
  { "name": "Atalanta", "value": 3.218 },
  { "name": "Aurora", "value": 6.81 },
  { "name": "Balneário Arroio do Silva", "value": 15.693 },
  { "name": "Balneário Camboriú", "value": 140.036 },
  { "name": "Balneário Barra do Sul", "value": 14.885 },
  { "name": "Balneário Gaivota", "value": 15.353 },
  { "name": "Bandeirante", "value": 3.144 },
  { "name": "Barra Bonita", "value": 1.608 },
  { "name": "Barra Velha", "value": 45.633 },
  { "name": "Bela Vista do Toldo", "value": 5.863 },
  { "name": "Belmonte", "value": 2.703 },
  { "name": "Benedito Novo", "value": 10.484 },
  { "name": "Biguaçu", "value": 78.623 },
  { "name": "Blumenau", "value": 363.34 },
  { "name": "Bocaina do Sul", "value": 3.514 },
  { "name": "Bombinhas", "value": 24.416 },
  { "name": "Bom Jardim da Serra", "value": 4.362 },
  { "name": "Bom Jesus", "value": 2.721 },
  { "name": "Bom Jesus do Oeste", "value": 2.182 },
  { "name": "Bom Retiro", "value": 8.698 },
  { "name": "Botuverá", "value": 5.368 },
  { "name": "Braço do Norte", "value": 34.113 },
  { "name": "Braço do Trombudo", "value": 3.147 },
  { "name": "Brusque", "value": 136.4 },
  { "name": "Caçador", "value": 82.208 },
  { "name": "Caibi", "value": 4.4 },
  { "name": "Calmon", "value": 2.879 },
  { "name": "Camboriú", "value": 84.285 },
  { "name": "Campo Alegre", "value": 20.014 },
  { "name": "Campo Belo do Sul", "value": 2.894 },
  { "name": "Campo Erê", "value": 4.019 },
  { "name": "Campos Novos", "value": 34.348 },
  { "name": "Canelinha", "value": 13.634 },
  { "name": "Canoinhas", "value": 56.25 },
  { "name": "Capão Alto", "value": 1.615 },
  { "name": "Capinzal", "value": 23.204 },
  { "name": "Capivari de Baixo", "value": 26.589 },
  { "name": "Catanduvas", "value": 7.395 },
  { "name": "Caxambu do Sul", "value": 1.612 },
  { "name": "Celso Ramos", "value": 3.158 },
  { "name": "Cerro Negro", "value": 1.794 },
  { "name": "Chapadão do Lageado", "value": 3.6 },
  { "name": "Chapecó", "value": 224.16 },
  { "name": "Cocal do Sul", "value": 16.101 },
  { "name": "Concórdia", "value": 77.508 },
  { "name": "Cordilheira Alta", "value": 4.26 },
  { "name": "Coronel Freitas", "value": 8.189 },
  { "name": "Coronel Martins", "value": 2.183 },
  { "name": "Correia Pinto", "value": 15.128 },
  { "name": "Corupá", "value": 15.239 },
  { "name": "Criciúma", "value": 213.18 },
  { "name": "Cunha Porã", "value": 6.152 },
  { "name": "Cunhataí", "value": 1.806 },
  { "name": "Curitibanos", "value": 41.197 },
  { "name": "Descanso", "value": 8.2 },
  { "name": "Dionísio Cerqueira", "value": 17.82 },
  { "name": "Dona Emma", "value": 5.342 },
  { "name": "Doutor Pedrinho", "value": 3.406 },
  { "name": "Entre Rios", "value": 4.109 },
  { "name": "Ermo", "value": 2.089 },
  { "name": "Erval Velho", "value": 5.632 },
  { "name": "Faxinal dos Guedes", "value": 10.324 },
  { "name": "Flor do Sertão", "value": 3.489 },
  { "name": "Florianópolis", "value": 508.826 },
  { "name": "Formosa do Sul", "value": 2.804 },
  { "name": "Forquilhinha", "value": 26.831 },
  { "name": "Fraiburgo", "value": 34.21 },
  { "name": "Frei Rogério", "value": 1.979 },
  { "name": "Galvão", "value": 1.724 },
  { "name": "Garopaba", "value": 20.575 },
  { "name": "Garuva", "value": 20.591 },
  { "name": "Gaspar", "value": 72.254 },
  { "name": "Governador Celso Ramos", "value": 16.3 },
  { "name": "Grão Pará", "value": 5.132 },
  { "name": "Gravatal", "value": 12.617 },
  { "name": "Guabiruba", "value": 26.034 },
  { "name": "Guaraciaba", "value": 10.011 },
  { "name": "Guaramirim", "value": 44.202 },
  { "name": "Guarujá do Sul", "value": 4.605 },
  { "name": "Guatambú", "value": 5.238 },
  { "name": "Herval d'Oeste", "value": 23.21 },
  { "name": "Ibiam", "value": 2.591 },
  { "name": "Ibicaré", "value": 3.914 },
  { "name": "Ibirama", "value": 17.573 },
  { "name": "Içara", "value": 57.746 },
  { "name": "Ilhota", "value": 15.436 },
  { "name": "Imaruí", "value": 11.581 },
  { "name": "Imbituba", "value": 45.582 },
  { "name": "Imbuia", "value": 3.048 },
  { "name": "Indaial", "value": 70.046 },
  { "name": "Iomerê", "value": 2.283 },
  { "name": "Ipira", "value": 3.507 },
  { "name": "Iporã do Oeste", "value": 4.828 },
  { "name": "Ipuaçu", "value": 5.447 },
  { "name": "Ipumirim", "value": 4.219 },
  { "name": "Iraceminha", "value": 1.612 },
  { "name": "Irani", "value": 11.049 },
  { "name": "Irati", "value": 5.092 },
  { "name": "Irineópolis", "value": 6.768 },
  { "name": "Itá", "value": 7.744 },
  { "name": "Itaiópolis", "value": 14.64 },
  { "name": "Itajaí", "value": 217.139 },
  { "name": "Itapema", "value": 64.704 },
  { "name": "Itapiranga", "value": 8.071 },
  { "name": "Itapoá", "value": 25.775 },
  { "name": "Ituporanga", "value": 21.696 },
  { "name": "Jaborá", "value": 2.673 },
  { "name": "Jacinto Machado", "value": 11.686 },
  { "name": "Jaguaruna", "value": 17.275 },
  { "name": "Jaraguá do Sul", "value": 187.363 },
  { "name": "Jardinópolis", "value": 2.638 },
  { "name": "Joaçaba", "value": 28.266 },
  { "name": "Joinville", "value": 590.347 },
  { "name": "José Boiteux", "value": 3.977 },
  { "name": "Jupiá", "value": 2.073 },
  { "name": "Lacerdópolis", "value": 3.095 },
  { "name": "Lages", "value": 156.992 },
  { "name": "Laguna", "value": 45.238 },
  { "name": "Lajeado Grande", "value": 1.639 },
  { "name": "Laurentino", "value": 3.579 },
  { "name": "Lauro Müller", "value": 14.79 },
  { "name": "Lebon Régis", "value": 12.102 },
  { "name": "Leoberto Leal", "value": 2.178 },
  { "name": "Lindóia do Sul", "value": 6.011 },
  { "name": "Lontras", "value": 7.952 },
  { "name": "Luiz Alves", "value": 15.439 },
  { "name": "Luzerna", "value": 5.191 },
  { "name": "Macieira", "value": 2.303 },
  { "name": "Mafra", "value": 58.698 },
  { "name": "Major Gercino", "value": 5.481 },
  { "name": "Major Vieira", "value": 9.54 },
  { "name": "Maracajá", "value": 4.728 },
  { "name": "Maravilha", "value": 22.102 },
  { "name": "Marema", "value": 2.228 },
  { "name": "Massaranduba", "value": 19.173 },
  { "name": "Matos Costa", "value": 2.529 },
  { "name": "Meleiro", "value": 7.298 },
  { "name": "Mirim Doce", "value": 1.897 },
  { "name": "Modelo", "value": 2.919 },
  { "name": "Mondaí", "value": 11.454 },
  { "name": "Monte Carlo", "value": 2.879 },
  { "name": "Monte Castelo", "value": 3.665 },
  { "name": "Morro da Fumaça", "value": 14.222 },
  { "name": "Morro Grande", "value": 4.721 },
  { "name": "Navegantes", "value": 82.358 },
  { "name": "Nova Erechim", "value": 3.555 },
  { "name": "Nova Itaberaba", "value": 2.477 },
  { "name": "Nova Trento", "value": 14.974 },
  { "name": "Nova Veneza", "value": 14.715 },
  { "name": "Novo Horizonte", "value": 1.971 },
  { "name": "Orleans", "value": 21.334 },
  { "name": "Otacílio Costa", "value": 17.368 },
  { "name": "Ouro", "value": 3.882 },
  { "name": "Ouro Verde", "value": 2.916 },
  { "name": "Paial", "value": 3.882 },
  { "name": "Painel", "value": 2.271 },
  { "name": "Palhoça", "value": 168.064 },
  { "name": "Palma Sola", "value": 5.511 },
  { "name": "Palmeira", "value": 2.875 },
  { "name": "Palmitos", "value": 16.595 },
  { "name": "Papanduva", "value": 22.243 },
  { "name": "Paraíso", "value": 2.004 },
  { "name": "Passo de Torres", "value": 7.417 },
  { "name": "Passos Maia", "value": 1.827 },
  { "name": "Paulo Lopes", "value": 7.502 },
  { "name": "Pedras Grandes", "value": 2.784 },
  { "name": "Penha", "value": 32.231 },
  { "name": "Peritiba", "value": 2.54 },
  { "name": "Petrolândia", "value": 6.003 },
  { "name": "Piçarras", "value": 23.854 },
  { "name": "Pinhalzinho", "value": 17.781 },
  { "name": "Pinheiro Preto", "value": 2.26 },
  { "name": "Piratuba", "value": 4.621 },
  { "name": "Planalto Alegre", "value": 1.852 },
  { "name": "Pomerode", "value": 33.646 },
  { "name": "Ponte Alta", "value": 4.127 },
  { "name": "Ponte Alta do Norte", "value": 1.985 },
  { "name": "Ponte Serrada", "value": 11.556 },
  { "name": "Porto Belo", "value": 23.028 },
  { "name": "Porto União", "value": 35.493 },
  { "name": "Pouso Redondo", "value": 10.998 },
  { "name": "Praia Grande", "value": 6.7 },
  { "name": "Presidente Castello Branco", "value": 2.15 },
  { "name": "Presidente Getúlio", "value": 15.108 },
  { "name": "Presidente Nereu", "value": 3.271 },
  { "name": "Princesa", "value": 2.92 },
  { "name": "Quilombo", "value": 9.352 },
  { "name": "Rancho Queimado", "value": 3.106 },
  { "name": "Rio das Antas", "value": 3.17 },
  { "name": "Rio do Campo", "value": 3.538 },
  { "name": "Rio do Oeste", "value": 5.161 },
  { "name": "Rio dos Cedros", "value": 6.209 },
  { "name": "Rio do Sul", "value": 71.128 },
  { "name": "Rio Fortuna", "value": 6.092 },
  { "name": "Rio Negrinho", "value": 64.051 },
  { "name": "Rio Rufino", "value": 2.073 },
  { "name": "Riqueza", "value": 2.4 },
  { "name": "Rodeio", "value": 11.236 },
  { "name": "Romelândia", "value": 1.653 },
  { "name": "Salete", "value": 10.562 },
  { "name": "Saltinho", "value": 4.761 },
  { "name": "Salto Veloso", "value": 3.206 },
  { "name": "Sangão", "value": 17.104 },
  { "name": "Santa Cecília", "value": 16.107 },
  { "name": "Santa Helena", "value": 7.001 },
  { "name": "Santa Rosa de Lima", "value": 1.444 },
  { "name": "Santa Rosa do Sul", "value": 4.68 },
  { "name": "Santa Terezinha", "value": 2.195 },
  { "name": "Santa Terezinha do Progresso", "value": 1.635 },
  { "name": "Santiago do Sul", "value": 2.031 },
  { "name": "Santo Amaro da Imperatriz", "value": 29.414 },
  { "name": "São Bento do Sul", "value": 84.381 },
  { "name": "São Bernardino", "value": 1.509 },
  { "name": "São Bonifácio", "value": 4.327 },
  { "name": "São Carlos", "value": 1.79 },
  { "name": "São Cristovão do Sul", "value": 3.616 },
  { "name": "São Domingos", "value": 7.902 },
  { "name": "São Francisco do Sul", "value": 49.645 },
  { "name": "São João Batista", "value": 35.283 },
  { "name": "São João do Itaperiú", "value": 5.695 },
  { "name": "São João do Oeste", "value": 2.761 },
  { "name": "São João do Sul", "value": 3.595 },
  { "name": "São Joaquim", "value": 27.084 },
  { "name": "São José", "value": 256.645 },
  { "name": "São José do Cedro", "value": 11.424 },
  { "name": "São José do Cerrito", "value": 5.971 },
  { "name": "São Lourenço do Oeste", "value": 22.856 },
  { "name": "São Ludgero", "value": 10.165 },
  { "name": "São Martinho", "value": 7.818 },
  { "name": "São Miguel da Boa Vista", "value": 1.764 },
  { "name": "São Miguel do Oeste", "value": 43.218 },
  { "name": "São Pedro de Alcântara", "value": 4.436 },
  { "name": "Saudades", "value": 6.785 },
  { "name": "Schroeder", "value": 24.787 },
  { "name": "Seara", "value": 18.142 },
  { "name": "Serra Alta", "value": 2.572 },
  { "name": "Siderópolis", "value": 14.637 },
  { "name": "Sombrio", "value": 30.377 },
  { "name": "Sul Brasil", "value": 2.464 },
  { "name": "Taió", "value": 18.707 },
  { "name": "Tangará", "value": 9.049 },
  { "name": "Tigrinhos", "value": 1.396 },
  { "name": "Tijucas", "value": 42.28 },
  { "name": "Timbé do Sul", "value": 3.782 },
  { "name": "Timbó", "value": 41.697 },
  { "name": "Timbó Grande", "value": 3.433 },
  { "name": "Três Barras", "value": 19.512 },
  { "name": "Treviso", "value": 4.907 },
  { "name": "Treze de Maio", "value": 4.374 },
  { "name": "Treze Tílias", "value": 6.686 },
  { "name": "Trombudo Central", "value": 6.034 },
  { "name": "Tubarão", "value": 104.791 },
  { "name": "Tunápolis", "value": 4.515 },
  { "name": "Turvo", "value": 7.648 },
  { "name": "União do Oeste", "value": 1.723 },
  { "name": "Urubici", "value": 11.606 },
  { "name": "Urupema", "value": 2.616 },
  { "name": "Urussanga", "value": 21.39 },
  { "name": "Vargeão", "value": 2.599 },
  { "name": "Vargem", "value": 5.784 },
  { "name": "Vargem Bonita", "value": 2.623 },
  { "name": "Vidal Ramos", "value": 3.247 },
  { "name": "Videira", "value": 53.557 },
  { "name": "Vitor Meireles", "value": 2.226 },
  { "name": "Witmarsum", "value": 2.271 },
  { "name": "Xanxerê", "value": 54.195 },
  { "name": "Xavantina", "value": 4.396 },
  { "name": "Xaxim", "value": 28.689 },
  { "name": "Zortéa", "value": 2.911 },
  { "name": "Grão-Pará", "value": 5.132 },
  { "name": "Balneário Piçarras", "value": 23.854 },
  { "name": "Pescaria Brava", "value": 7.864 },
  { "name": "Balneário Rincão", "value": 11.947 },
  { "name": "Brunópolis", "value": 2.129 },
  { "name": "São Cristóvão do Sul", "value": 3.616 }
];

data.sort(function (a, b) {
  return a.value - b.value;
});

const dataReversed = data.slice().reverse();

const mapOption = {
  tooltip: {
    formatter: '{b}: {c} mil'
  },
  title: {
    text: 'População Brasileria 2024 (mil)',
    left: '1%'
  },
  visualMap: {
    right: '10%',
    top: '15%',
    min: Math.ceil(data[data.length - 1].value),
    max: Math.floor(data[0].value),
    orient: 'vertical',
    text: ['', 'População (mil)'],
    realtime: true,
    calculable: true,
    inRange: {
      color: ['#CAF0F8', '#90E0EF', '#0077B6', '#023E8A']
    },
  },
  series:
  {
    id: 'population',
    name: 'Poulação Catarinense 2020',
    type: 'map',
    map: 'Santa_Catarina_Json_map',
    roam: true,
    itemStyle: {
      emphasis: {
        areaColor: '#023E8A',
        borderColor: '#111A48',
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
    universalTransition: true,
  }

};

const barOption = {
  tooltip: {
    formatter: '{b}: {c} mil'
  },
  title: {
    text: 'População Brasileria 2024 (mil)',
    left: '1%'
  },
  yAxis: {
    type: 'value'
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      rotate: 30
    },
    data: dataReversed.map(function (item) {
      return item.name;
    })
  },
  height: "70%",
  series: {
    id: 'population',
    type: 'bar',
    data: dataReversed.map(function (item) {
      return item.value;
    }),
    itemStyle: {
      emphasis: {
        color: '#023E8A',
        borderColor: '#111A48',
        borderWidth: 1
      }
    },
    universalTransition: true,
  },
  visualMap: {
    right: '2%',
    top: '15%',
    min: Math.ceil(data[data.length - 1].value),
    max: Math.floor(data[0].value),
    orient: 'vertical',
    text: ['', 'População (mil)'],
    inRange: {
      color: ['#CAF0F8', '#90E0EF', '#0077B6', '#023E8A']
    },
  },
  dataZoom: [
    {},
    {
      type: 'inside'
    }
  ],
};

const AnimatedSantaCatarinaMapEchartUsingJson = () => {
  const chartRef = useRef(null);
  const echartRef = useRef<null | echarts.ECharts>(null);
  const [isMap, setIsMap] = useState(true)

  useEffect(() => {
    let myChart = echarts.init(chartRef.current, 'dark');
    echarts.registerMap('Santa_Catarina_Json_map', { geoJSON: santaCatarinaGeoJson } as any);

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
    <button onClick={() => setIsMap(!isMap)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Toggle Map</button>

    <div ref={chartRef} style={{ height: '600px', width: '100%' }} /></>)
};

export default AnimatedSantaCatarinaMapEchartUsingJson;
