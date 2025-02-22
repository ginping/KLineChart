import { init } from 'klinecharts';

const chart = init('getVisibleRange-chart');

fetch('https://klinecharts.com/datas/kline.json')
  .then(res => res.json())
  .then(dataList => { chart.applyNewData(dataList); });

const visibleRange = chart.getVisibleRange();
