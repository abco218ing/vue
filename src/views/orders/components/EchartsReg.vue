<template>
  <div style="width: 100%; height: 100%" ref="mychart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.initMyChart();
  },
  methods: {
    initMyChart() {
      // 基于准备好的dom，初始化echarts实例
      const mychart = echarts.init(this.$refs.mychart);
      // 指定图表的配置项和数据
      let option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      mychart.setOption(option);
    },
  },
};
</script>

<style></style>
