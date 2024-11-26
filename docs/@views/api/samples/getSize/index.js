import { init } from 'klinecharts';

const chart = init('getSize-chart');

fetch('/datas/kline.json')
  .then(res => res.json())
  .then(dataList => { chart.applyNewData(dataList); });

const bounding = chart.getSize({
  paneId: 'candle_pane',
  position: 'main'
})