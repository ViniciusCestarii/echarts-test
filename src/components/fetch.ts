export const fetchBeijingAqi = async () => {
  const urlData = 'https://echarts.apache.org/examples/data/asset/data/aqi-beijing.json'

  const response = await fetch(urlData);
  const data = await response.json();

  return data;
}