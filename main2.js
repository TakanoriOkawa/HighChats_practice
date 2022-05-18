Highcharts.chart('container', {
  chart: {
    type: 'column',
    // htmlのコンテナ幅よりも、minWidthを大きくした時に、スクロール
    scrollablePlotArea:{
      minWidth: 472,
      scrollPosition:0,
    }
    // コンテンツの量によって幅を変える。
  },
  scrollbar: {
    enabled: true
},
  xAxis: {
    // 根本的に考え方が違う
      categories: [
          'Jan',
          'Feb',
          'Mar',
          'Jan',
          'Feb',
          'Mar',
          'Jan',
          'Feb',
          'Mar',
          'Mar',
          'Jan',
          'Feb',
          'Mar',
      ],
      // max: 10,
  },
  yAxis: {
    title: {
      text: 'から'
    },
      lineColor: 'red',
      lineWidth: 1,
      gridLineWidth: 1, // 横のグリッド線の幅
      tickInterval: 500, // メモリの感覚を500刻み
      min: 0,
      // 最大
      max: 2000,
  },

  // tooltip: {
  //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
  //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
  //         '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
  //     footerFormat: '</table>',
  //     shared: true,
  //     useHTML: true
  // },

  plotOptions: {
      // column: {
      //     pointPadding: 0.2,
      //     borderWidth: 0
      // },
      series: {
        pointWidth: 16, // 棒線の幅
      }
  },
  // データ・シリーズ
  series: [{
      // ここの数値を固定にできなか？yAxisでmaxを指定すればOK。
      data: [700, 800, 1506,1000]
  }]
});
 