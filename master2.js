const date = ['1/1','1/2','1/3','1/4','1/5','1/6','1/7','1/8','1/9','1/10','1/11','1/12','1/13','1/14','1/15','1/16'];

Highcharts.chart('container', {
  title: {
      text: ''
  },
  subtitle: {
      text: ''
  },
  yAxis: {
      title: {
          text: ''
      },
      tickInterval: 500,
      min: 0,
      // 最大
      max: 2000,
  },
  xAxis: {
      categories:date,
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
  },
  plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          },
          // pointStart: 10 // 値の始まりの値
      }
  },

  series: [{
      name: 'ログイン会員数',
      data: [1800, 1000, 200, 900, 500, 100, 2000, 20, 100, 2000]
  }, {
      name: 'ログイン回数',
      data: [180, 30, 700, 300, 450, 0, 900, 0, 900, 400]
  }],

  legend: {
    // align: 'left',
    // verticalAlign: 'top',
    borderWidth: 0,
    enabled: true,
    // backgroundColor: 'red',
    itemDistance: 10, // 別legendとの距離
    // layout: 'horizontal', // horizontalがデフォルト
    // align: 'left',
    // verticalAlign: 'top',

    align: 'right',
    verticalAlign: 'top',
    // layout: 'horizontal',
    x: 0,
    // y: 100
  },

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }
});