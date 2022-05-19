// まあ自然といえば、自然出し、ライブラリの設定、7以下の場合の調整は難しそう
const count = [200, 499, 200,1000,200,1000,200,1000,200,1000,200,1000,200,1000, 200,00,10,99];
const date = ['1/1','1/2','1/3','1/4','1/5','1/6','1/7','1/8','1/9','1/10','1/11','1/12','1/13','1/14','1/15','1/16'];

console.log("ほげ", count.length * 33)

Highcharts.chart('container', {
  chart: {
    type: 'column',
    scrollablePlotArea:{
      // 14の時は33 / 7の時は67 およそ / 360の時は、12でぴったりになるように計算
      // 全県では33でいいだろう
      // ここのハードコードしている67のマジックナンバーは検索条件によって動的に変える
      minWidth: 33 * count.length,
      scrollPosition:0,
    }
  },
  title: {
    text: "",// タイトルを消す
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
      // dataLabels: { // データ内に情報を出せる
      //   enabled: true,
      // }
    }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:red;padding:0">{series.name}</td>' +
          '<td style="padding:0">{point.y:.0f}</td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  series: [{
    name: "",
    data: count
  }],
  // legendを削除
  legend:{ enabled:false },
})