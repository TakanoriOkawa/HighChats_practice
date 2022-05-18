window.onload = function() {
  Highcharts.chart('container', {
    chart: {
      type: 'spline',
      scrollablePlotArea:{
        minWidth: 1000,
        scrollPosition:0,
      }
    },
      // グラフ属性設定
      // 各属性の詳細：https://api.highcharts.com/highcharts/
      title : {
          text: '商品A～商品Eの2018年度月間売上'   
      },
      xAxis : {
          categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      },
      yAxis : {
          title: {
              text: '売上高 (万円)'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      // ツールチップはhtmlで埋め込める
      tooltip : {
          valueSuffix: '万円'
      },
      legend : {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },
      series : [
          {
              name: '商品A',
              data: [23.5, 32.2, 45.6, 20.3, 15.3, 56.4, 49.9, 53.5, 55.5, 33.2, 46.3, 43.2]
          },
          {
              name: '商品B',
              data: [15.3, 18.2, 25.7, 23.1, 26.9, 27.4, 30.5, 38.6, 40.2, 48.3, 35.2, 25.4]
          }, 
          {
              name: '商品C',
              data: [18.5, 22.5, 29.3, 37.1, 39.3, 45.8, 44.3, 48.2, 43.6, 40.3, 37.7, 33.0]
          },
          {
              name: '商品D',
              data: [7.2, 6.3, 8.9, 10.2, 12.5, 16.2, 18.2, 17.3, 16.5, 12.8, 10.3, 13.9]
          },
          {
              name: '商品E',
              data: [36.6, 37.2, 39.1, 30.2, 30.9, 28.3, 25.3, 24.8, 23.3, 20.7, 18.3, 19.7]
          }
      ],      
      // responsive: {
      //     rules: [{
      //         condition: {
      //             maxWidth: 100
      //         },
      //         chartOptions: {
      //             legend: {
      //                 layout: 'horizontal',
      //                 align: 'center',
      //                 verticalAlign: 'bottom'
      //             }
      //         }
      //     }]
      // }
  });
}