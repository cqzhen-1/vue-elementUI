<template>
  <div style="height:100%" ref="echart">echarts</div>
</template>

<script>
// echart.vue是子组件，home.vue是父组件
// 父组件会向子组件传值
import echarts from "echarts";
export default {
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          // legend: {},
          series: [],
        };
      },
    },
    isAxisChart: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption;
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
  watch: {
    //监听从home.vue传进来的chartData的值
    chartData: {
      handler: function() {
        this.initChart();
      },
      deep: true,
    },
    //折叠菜单自适应尺寸，折叠菜单需要时间，因此定义一个定时器
    isCollapse() {
      setTimeout(() => {
        this.resizeChart();
      }, 300);
    },
  },
  data() {
    return {
      echart: null,
      axisOption: {
        //每条线代表什么
        legend: {
          textStyle: {
            color: "#333",
          },
        },
        //悬浮提示
        tooltip: {
          tigger: "axis", //触发时机：坐标轴触发
        },
        //偏移设置:偏移左边15%，默认是10%
        grid: {
          left: "15%",
        },
        xAxis: {
          type: "category",
          data: [],
          //x坐标轴颜色
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          //x坐标轴文字颜色
          axisLabel: {
            color: "#333",
          },
        },

        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: [
          "#2ec7c9",
          "#b6a2de",
          "#5ab1ef",
          "#ffb980",
          "#d87a80",
          "#8d98b3",
          "#e5cf0d",
          "#97b552",
          "#95706d",
          "#dc69aa",
          "#07a2a4",
          "#9a7fd1",
          "#588dd5",
          "#15994e",
          "#c05050",
          "#59678c",
          "#c9ab00",
          "#7eb00a",
          "#6f5553",
          "#c14089",
        ],
        series: [],
      },
      normalOption: {
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
        ],
        tooltip: {
          trigger: "item",
        },
        series: [],
      },
    };
  },
  methods: {
    initChart() {
      this.initChartData();
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    initChartData() {
      //先判断xdata是否有值，进而确定isAxisChart的值
      if (this.chartData.xData != null) {
        this.isAxisChart = true;
      } else {
        this.isAxisChart = false;
      }

      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
      } else {
        this.normalOption.series = this.chartData.series;
      }
    },

    //自适应尺寸
    resizeChart() {
      this.echart ? this.echart.resize() : "";
    },
  },
  mounted() {
    window.addEventListener("resize", this.resizeChart);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeChart);
  },
};
</script>

<style lang="scss" scoped></style>
