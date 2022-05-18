// グラフに使用するデータ
var nameData = ['島村卯月', '渋谷凛', '一ノ瀬志希'];
var heightData = [159, 165, 161,];
 

Highcharts.chart('container',{
  chart: {
    type: 'column',
    scrollablePlotArea:{
      minWidth: 1072,
      scrollPosition:0,
    }
  },
  title: {
      text: 'グラフタイトル'
  },
  xAxis: [
      {
          categories: nameData
      }
  ],
  yAxis: [
      {
          title: {
              text: '身長'
          },
          min: 0,
          max:2000,
          tickInterval: 500,
      }
  ],
  series: [
      {
          name: '身長',
          type: 'column',
          data: heightData,
          yAxis: 0
      }
  ]
});