export default {
  data: {
    card_list: [
      {
        name: '销售额',
        current: 100,
        next: 120,
        icon: 'Money'
      },
      {
        name: '订单量',
        current: 60,
        next: 98,
        icon: 'Goods'
      },
      {
        name: '成交量',
        current: 50,
        next: 70,
        icon: 'Coin'
      },
      {
        name: '退款数量',
        current: 1,
        next: 0,
        icon: 'ShoppingBag'
      },
    ],
    echarts_result: {
      barOptions:{
        title: {
          text: '柱状图'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 43, 49, 60, 32],
            type: 'bar',
            stack: 'x'
          },
          {
            data: [5, 4, 3, 5, 10, 59,100],
            type: 'bar',
            stack: 'x'
          }
        ]
      },
      lineOptions: {
        title: {
          text: '折线图'
        },
        tooltip: {},
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 28, 43, 49, 20,90],
            type: 'line',
            stack: 'x',
            areaStyle: {}
          },
          {
            data: [5, 4, 3, 5, 60,10,56],
            type: 'line',
            stack: 'x',
            areaStyle: {}
          }
        ]
      },
      pieOptions: {
        title: {
          text: '饼图'
        },
        tooltip: {},
        series: [
        {
          type: 'pie',
          data: [
            {
              value: 352,
              name: '直接访问'
            },
            {
              value: 223,
              name: '联盟广告'
            },
            {
              value: 680,
              name: '搜索引擎'
            }
          ]
        }
      ]
      }
    }
  }
}