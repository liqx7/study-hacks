import _ from "lodash";

import echarts from "echarts/lib/echarts";
require("echarts/map/js/china");
// // 引入折线图/柱状图等组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/visualMap");
require("echarts/lib/component/geo");
require("echarts/lib/chart/map");
// 引入柱状图
// require("echarts/lib/chart/bar");
// // 引入提示框和标题组件
// require("echarts/lib/component/tooltip");

// require("echarts/lib/component/visualMap");

// require("echarts/lib/component/geo");

if (module.hot) {
  module.hot.accept();
}

function component() {
  var element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "Webpack", "are u ok"], " ");

  var chart = document.createElement("div");
  chart.id = "main";
  element.style.width = "1200px";
  element.style.height = "1400px";
  chart.style.width = "1200px";
  chart.style.height = "1000px";
  element.appendChild(chart);

  return element;
}

document.body.appendChild(component());

window.onload = function() {
  var myChart = echarts.init(document.getElementById("main"));

  var mapDonateList = [
    { name: "北京", value: 13 },
    { name: "天津", value: 2 },
    { name: "河北", value: 3 },
    { name: "山西", value: 3 },
    { name: "内蒙古", value: 0 },
    { name: "辽宁", value: 0 },
    { name: "吉林", value: 0 },
    { name: "黑龙江", value: 0 },
    { name: "上海", value: 0 },
    { name: "江苏", value: 2 },
    { name: "浙江", value: 1 },
    { name: "安徽", value: 0 },
    { name: "福建", value: 0 },
    { name: "江西", value: 0 },
    { name: "山东", value: 0 },
    { name: "河南", value: 0 },
    { name: "湖北", value: 0 },
    { name: "湖南", value: 0 },
    { name: "广东", value: 0 },
    { name: "广西", value: 0 },
    { name: "海南", value: 0 },
    { name: "重庆", value: 0 },
    { name: "四川", value: 0 },
    { name: "贵州", value: 0 },
    { name: "云南", value: 0 },
    { name: "西藏", value: 0 },
    { name: "陕西", value: 0 },
    { name: "甘肃", value: 0 },
    { name: "青海", value: 0 },
    { name: "宁夏", value: 0 },
    { name: "新疆", value: 0 },
    { name: "台湾", value: 0 },
    { name: "香港特别行政区", value: 0 },
    { name: "澳门特别行政区", value: 0 }
  ];

  var option = {
    tooltip: {
      triggerOn: "click",
      backgroundColor: "rgba(0,0,0,0.6)",
      // borderColor: '#E0E0E0',
      // borderWidth: 2,
      color: "#fff",
      padding: 10,
      textStyle: {
        color: "#fff"
      },
      formatter: function(e, t, n) {
        let v = e.value;
        if (isNaN(e.value)) {
          v = 0;
        }
        return (
          "<div style='font-size:13px;line-height:18px;margin-bottom:2px' >" +
          e.name +
          "</div>" +
          "<div style='font-size:11px;line-height:16px' >爱心捐赠数：" +
          v +
          "</div>"
        );
      }
    },
    visualMap: {
      min: 0,
      max: 1000,
      right: 10,
      bottom: 90,
      itemWidth: 10,
      itemHeight: 10,
      padding: 0,
      textStyle: {
        fontSize: 10,
        lineHeight: 40
      },
      showLabel: !0,
      // text: ["高", "低"],
      pieces: [
        {
          gt: 50,
          label: ">50",
          color: "#214FC5"
        },
        {
          gte: 20,
          lte: 49,
          label: "20-49",
          color: "#386CF2"
        },
        {
          gte: 10,
          lt: 19,
          label: "10-19",
          color: "#7099FF"
        },
        {
          gt: 5,
          lt: 9,
          label: "5-9",
          color: "#AAC2FF"
        },
        {
          gt: 0,
          lt: 5,
          label: "1-5",
          color: "#E1EAFF"
        }
      ],
      show: !0
    },
    geo: {
      map: "china",
      roam: !1,
      scaleLimit: {
        min: 1,
        max: 2
      },
      zoom: 1.2,
      top: 50,
      label: {
        normal: {
          show: !0,
          fontSize: "10",
          color: "rgba(0,0,0,0.7)"
        }
      },
      itemStyle: {
        normal: {
          //shadowBlur: 50,
          //shadowColor: 'rgba(0, 0, 0, 0.2)',
          borderColor: "rgba(0, 0, 0, 0.2)"
        },
        emphasis: {
          areaColor: "#FFD500",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          borderWidth: 0
        }
      }
    },
    series: [
      {
        name: "确诊病例",
        type: "map",
        geoIndex: 0,
        data: mapDonateList
      }
    ]
  };
  // 绘制图表
  myChart.setOption(option);
};
