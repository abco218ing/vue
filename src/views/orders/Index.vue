<template>
  <qf-card title="订单列表" style="position: relative">
    <!-- <el-button
      type="primary"
      round
      style="position: absolute; right: 10px; top: 10px"
      >导出数据</el-button
    > -->
    <!-- 筛选 -->
    <el-row>
      <el-input
        placeholder="订单编号"
        v-model="params.uname"
        style="width: 200px"
        class="input-with-select"
      >
      </el-input>
      <el-input
        placeholder="下单人"
        style="width: 200px"
        v-model="params.uname"
        class="input-with-select"
      >
      </el-input>

      <el-input
        placeholder="收货人"
        style="width: 200px"
        v-model="params.uname"
        class="input-with-select"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>

      <el-date-picker
        v-model="params.date"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        style="float: right"
      >
      </el-date-picker>
    </el-row>
    <!-- 筛选 -->

    <!-- 表格 -->
    <qf-table :tableData="tableData" :columns="columns" />
    <!-- 表格 -->

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="params.pagenum"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
    <!-- 分页 -->
  </qf-card>
</template>

<script>
import tableData from "~mock/orders";

export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  data() {
    return {
      // 筛选模型
      params: {
        uname: "",
        date: [],
        pagenum: 1,
      },
      // 表数据
      tableData: tableData.data,
      // 表格列
      columns: [
        { title: "编号", field: "id", width: "200" },
        { title: "下单人", field: "uname1", width: "100" },
        { title: "收货人", field: "uname2", width: "100" },
        { title: "总额", field: "price", width: "100" },
        {
          title: "订单状态",
          type: "tag",
          width: "100",
          payload: {
            field: "order_state",
            color: "info",
            filterName: "orderStatusFilter",
          },
        },
        {
          title: "支付状态",
          width: "100",
          type: "tag",
          payload: {
            color: "info",
            field: "pay_state",
            filterName: "payStatusFilter",
          },
        },
        {
          title: "配送状态",
          width: "100",
          type: "tag",
          payload: {
            color: "info",
            field: "send_state",
            filterName: "shippingStatusFilter",
          },
        },
        { title: "创建于", field: "create_time", width: "180" },
        {
          title: "操作",
          width: "120",
          fixed: "right",
          type: "btn",
          payload: [
            {
              // name: "修改",
              icon: "el-icon-edit",
              type: "primary",
              click: (row) => {
                console.log("修改", row);

                // 1 显示弹框
                this.editState = true;
                // 2.
              },
            },
            {
              //   name: "删除",
              icon: "el-icon-delete",
              type: "danger",
              click: (row) => this.deleteFn(row),
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
