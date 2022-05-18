const count = [200, 499, 200,1000,100,300,200,400,300];
const date = ['1/1','1/2', '1/3', '1/4', '1/5', '1/6', '1/7', '1/8'];

console.log("ほげ", count.length * 67)

Highcharts.chart('container', {
  chart: {
    type: 'column',
    scrollablePlotArea:{
      minWidth: 67 * count.length,
      scrollPosition:0,
    }
  },
  xAxis: {
    categories: date,
  },
  yAxis: {
    title: {
      text: ''
    },
      lineColor: 'gray',
      lineWidth: 1,
      gridLineWidth: 1, // 横のグリッド線の幅
      tickInterval: 500, // メモリの感覚を500刻み
      min: 0,
      // 最大
      max: 2000,
  },
  plotOptions: {
    series: {
      pointWidth: 16,
    }
  },
  series: [{
    data: count
  }]
})