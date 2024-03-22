"use client"
import React, { useEffect } from 'react';
import ReactEChartsClient from './ReactEchartsClient';

let xData = [];
let yData = [];
let data = [];

for (let y = 0; y < 10; y++) {
  yData.push(y);
  for (let x = 0; x < 10; x++) {
    data.push([x, y, 10]);
  }
}

for (let x = 0; x < 10; x++) {
  xData.push(x);
}

const options = [
  {
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    xAxis: {
      show: false,
      type: 'category',
      data: xData
    },
    yAxis: {
      show: false,
      type: 'category',
      data: yData
    },
    series: [
      {
        type: 'scatter',
        data: data,
        symbol: 'roundRect',
        symbolKeepAspect: true,
        universalTransition: true,
        symbolSize: 50
      }
    ]
  },
  {
    series: [
      {
        type: 'scatter',
        symbol: 'path://M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z'
      }
    ]
  },
  {
    // heart
    series: [
      {
        symbol:
          'path://M23.474,0.159L17.08,0.775c-0.406,0.039-0.844,0.383-0.978,0.768l-4.092,11.749L7.898,1.542 C7.764,1.158,7.325,0.814,6.92,0.775L0.526,0.159C0.121,0.12-0.096,0.399,0.041,0.783L8.085,23.15 c0.138,0.383,0.581,0.695,0.988,0.695h6.223h0.039c0.073,0,0.134-0.02,0.179-0.055c0.124-0.062,0.231-0.169,0.275-0.292 l0.039-0.108l8.13-22.607C24.096,0.399,23.879,0.12,23.474,0.159z'
      }
    ]
  },
  {
    // happy
    series: [
      {
        symbol:
          'path://M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM22 8c1.105 0 2 1.343 2 3s-0.895 3-2 3-2-1.343-2-3 0.895-3 2-3zM10 8c1.105 0 2 1.343 2 3s-0.895 3-2 3-2-1.343-2-3 0.895-3 2-3zM16 28c-5.215 0-9.544-4.371-10-9.947 2.93 1.691 6.377 2.658 10 2.658s7.070-0.963 10-2.654c-0.455 5.576-4.785 9.942-10 9.942z'
      }
    ]
  },
  {
    // evil
    series: [
      {
        symbol:
          'path://M32 2c0-1.422-0.298-2.775-0.833-4-1.049 2.401-3.014 4.31-5.453 5.287-2.694-2.061-6.061-3.287-9.714-3.287s-7.021 1.226-9.714 3.287c-2.439-0.976-4.404-2.886-5.453-5.287-0.535 1.225-0.833 2.578-0.833 4 0 2.299 0.777 4.417 2.081 6.106-1.324 2.329-2.081 5.023-2.081 7.894 0 8.837 7.163 16 16 16s16-7.163 16-16c0-2.871-0.757-5.565-2.081-7.894 1.304-1.689 2.081-3.806 2.081-6.106zM18.003 11.891c0.064-1.483 1.413-2.467 2.55-3.036 1.086-0.543 2.16-0.814 2.205-0.826 0.536-0.134 1.079 0.192 1.213 0.728s-0.192 1.079-0.728 1.213c-0.551 0.139-1.204 0.379-1.779 0.667 0.333 0.357 0.537 0.836 0.537 1.363 0 1.105-0.895 2-2 2s-2-0.895-2-2c0-0.037 0.001-0.073 0.003-0.109zM8.030 8.758c0.134-0.536 0.677-0.862 1.213-0.728 0.045 0.011 1.119 0.283 2.205 0.826 1.137 0.569 2.486 1.553 2.55 3.036 0.002 0.036 0.003 0.072 0.003 0.109 0 1.105-0.895 2-2 2s-2-0.895-2-2c0-0.527 0.204-1.005 0.537-1.363-0.575-0.288-1.228-0.528-1.779-0.667-0.536-0.134-0.861-0.677-0.728-1.213zM16 26c-3.641 0-6.827-1.946-8.576-4.855l2.573-1.544c1.224 2.036 3.454 3.398 6.003 3.398s4.779-1.362 6.003-3.398l2.573 1.544c-1.749 2.908-4.935 4.855-8.576 4.855z'
      }
    ]
  },
  {
    // hipster
    series: [
      {
        symbol:
          'path://M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM22 8c1.105 0 2 0.895 2 2s-0.895 2-2 2-2-0.895-2-2 0.895-2 2-2zM10 8c1.105 0 2 0.895 2 2s-0.895 2-2 2-2-0.895-2-2 0.895-2 2-2zM16.994 21.23c-0.039-0.035-0.078-0.072-0.115-0.109-0.586-0.586-0.878-1.353-0.879-2.121-0 0.768-0.293 1.535-0.879 2.121-0.038 0.038-0.076 0.074-0.115 0.109-2.704 2.453-9.006-0.058-9.006-3.23 1.938 1.25 3.452 0.306 4.879-1.121 1.172-1.172 3.071-1.172 4.243 0 0.586 0.586 0.879 1.353 0.879 2.121 0-0.768 0.293-1.535 0.879-2.121 1.172-1.172 3.071-1.172 4.243 0 1.427 1.427 2.941 2.371 4.879 1.121 0 3.173-6.302 5.684-9.006 3.23z'
      }
    ]
  },
  {
    // shocked
    series: [
      {
        symbol:
          'path://M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM10 14c-1.105 0-2-1.343-2-3s0.895-3 2-3 2 1.343 2 3-0.895 3-2 3zM16 26c-2.209 0-4-1.791-4-4s1.791-4 4-4c2.209 0 4 1.791 4 4s-1.791 4-4 4zM22 14c-1.105 0-2-1.343-2-3s0.895-3 2-3 2 1.343 2 3-0.895 3-2 3z'
      }
    ]
  },
  {
    // pie chart
    series: [
      {
        symbol:
          'path://M14 18v-14c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14c0-2.251-0.532-4.378-1.476-6.262l-12.524 6.262zM28.524 7.738c-2.299-4.588-7.043-7.738-12.524-7.738v14l12.524-6.262z'
      }
    ]
  },
  {
    // users
    series: [
      {
        symbol:
          'path://M10.225 24.854c1.728-1.13 3.877-1.989 6.243-2.513-0.47-0.556-0.897-1.176-1.265-1.844-0.95-1.726-1.453-3.627-1.453-5.497 0-2.689 0-5.228 0.956-7.305 0.928-2.016 2.598-3.265 4.976-3.734-0.529-2.39-1.936-3.961-5.682-3.961-6 0-6 4.029-6 9 0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h8.719c0.454-0.403 0.956-0.787 1.506-1.146zM24 24.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z'
      }
    ]
  },
  {
    // mug
    series: [
      {
        symbol:
          'path://M30 10h-6v-3c0-2.761-5.373-5-12-5s-12 2.239-12 5v20c0 2.761 5.373 5 12 5s12-2.239 12-5v-3h6c1.105 0 2-0.895 2-2v-10c0-1.105-0.895-2-2-2zM5.502 8.075c-1.156-0.381-1.857-0.789-2.232-1.075 0.375-0.286 1.075-0.694 2.232-1.075 1.811-0.597 4.118-0.925 6.498-0.925s4.688 0.329 6.498 0.925c1.156 0.381 1.857 0.789 2.232 1.075-0.375 0.286-1.076 0.694-2.232 1.075-1.811 0.597-4.118 0.925-6.498 0.925s-4.688-0.329-6.498-0.925zM28 20h-4v-6h4v6z'
      }
    ]
  },
  {
    // plane
    series: [
      {
        symbol:
          'path://M24 19.999l-5.713-5.713 13.713-10.286-4-4-17.141 6.858-5.397-5.397c-1.556-1.556-3.728-1.928-4.828-0.828s-0.727 3.273 0.828 4.828l5.396 5.396-6.858 17.143 4 4 10.287-13.715 5.713 5.713v7.999h4l2-6 6-2v-4l-7.999 0z'
      }
    ]
  },
  {
    // plane
    series: [
      {
        symbol:
          'path://M101.25 121.4C93.02 121.4 84.68 115.81 84.68 105.13C84.68 98.42 79.49 94.9 74.37 94.9C71.8924 94.8514 69.4956 95.7821 67.7 97.49C65.7 99.49 64.63 102.49 64.63 106.21C64.63 124.48 74.05 135.21 94.29 140.08C95.1293 140.274 95.8676 140.771 96.3635 141.475C96.8594 142.179 97.0782 143.042 96.9779 143.898C96.8776 144.753 96.4653 145.542 95.8199 146.112C95.1746 146.683 94.3414 146.995 93.48 146.99C93.2036 146.991 92.9282 146.957 92.66 146.89C69.41 141.33 57.66 127.64 57.66 106.21C57.66 99.07 60.47 94.81 62.82 92.49C65.9181 89.503 70.0667 87.8543 74.37 87.9C85.61 87.9 91.68 96.78 91.68 105.13C91.68 111.54 96.49 114.4 101.25 114.4C103.905 114.427 106.48 113.493 108.5 111.77C109.584 110.748 110.435 109.505 110.994 108.124C111.553 106.743 111.807 105.258 111.74 103.77C111.74 82.27 92.15 69 74 69C62 69 51.77 74.23 45.16 83.71C37.46 94.77 36.16 110.16 41.56 124.87C41.8022 125.721 41.7132 126.632 41.3109 127.42C40.9086 128.207 40.223 128.814 39.3918 129.117C38.5606 129.419 37.6456 129.396 36.8308 129.052C36.0161 128.707 35.3619 128.067 35 127.26C28.76 110.4 30.42 92.61 39.43 79.67C43.3125 74.1269 48.4929 69.6185 54.5189 66.5384C60.5449 63.4583 67.2332 61.9002 74 62C86.78 62 98.42 66.72 106.78 75.28C114.319 82.8803 118.62 93.106 118.78 103.81C118.858 106.284 118.396 108.745 117.427 111.023C116.459 113.3 115.006 115.34 113.17 117C109.873 119.883 105.629 121.45 101.25 121.4ZM73.3 74.62C88.79 73.68 104.87 85.71 104.87 104.26C104.87 105.188 104.501 106.078 103.845 106.735C103.188 107.391 102.298 107.76 101.37 107.76C100.442 107.76 99.5515 107.391 98.8951 106.735C98.2388 106.078 97.87 105.188 97.87 104.26C97.8922 101.114 97.2564 97.9983 96.0035 95.1126C94.7506 92.2269 92.9083 89.635 90.5947 87.5032C88.2812 85.3714 85.5476 83.7468 82.5692 82.7336C79.5908 81.7205 76.4336 81.3411 73.3 81.62C62.37 82.62 51.51 89.97 51.02 105.62C50.47 123.02 56.92 134.91 69.58 142.98C70.2186 143.388 70.7077 143.992 70.9737 144.701C71.2397 145.411 71.2684 146.187 71.0553 146.914C70.8422 147.641 70.399 148.28 69.7922 148.733C69.1853 149.187 68.4477 149.431 67.69 149.43C67.0263 149.434 66.3761 149.242 65.82 148.88C51.15 139.53 43.49 125.37 44.02 105.62C44.56 85.32 59.07 75.49 73.3 74.62ZM71.44 105.62C71.44 104.692 71.8088 103.801 72.4651 103.145C73.1215 102.489 74.0117 102.12 74.94 102.12C75.8683 102.12 76.7585 102.489 77.4149 103.145C78.0713 103.801 78.44 104.692 78.44 105.62C78.44 112.28 80.71 117.77 85 121.49C90.3 126.09 98.45 127.75 108.57 126.31C109.025 126.244 109.489 126.269 109.934 126.382C110.38 126.496 110.798 126.696 111.167 126.971C111.535 127.247 111.845 127.592 112.08 127.987C112.315 128.382 112.469 128.82 112.535 129.275C112.601 129.73 112.576 130.194 112.463 130.639C112.349 131.085 112.149 131.503 111.874 131.872C111.598 132.24 111.253 132.55 110.858 132.785C110.463 133.02 110.025 133.174 109.57 133.24C107.003 133.611 104.413 133.801 101.82 133.81C93.09 133.81 85.82 131.43 80.42 126.81C74.62 121.77 71.44 114.25 71.44 105.63V105.62Z'
      }
    ]
  }
];

const SvgEchart = () => {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % options.length);
    }, 600);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ReactEChartsClient
      option={options[index]}
      style={{ height: '600px', width: '100%' }}
      opts={{ renderer: 'svg' }}
      theme="dark"
    />
  );
}

export default SvgEchart;