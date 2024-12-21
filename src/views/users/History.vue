<template>
  <div class="history">
    <el-card class="box-card">
      <!-- 头部 -->
      <div slot="header" class="clearfix">
        <span>访客记录</span>
      </div>
      <!-- 头部 -->
      <!-- 内容部分 -->
      <el-row>
        <el-col :span="6">
          <el-input
            placeholder="请输入用户名"
            v-model="params.uname"
            class="input-with-select"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
            ></el-button> </el-input
        ></el-col>
        <el-col :span="10">&nbsp;</el-col>
        <el-col :span="8"
          ><el-date-picker
            v-model="params.date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker
        ></el-col>
      </el-row>
      <!-- 内容部分 -->
      <!-- 表格 -->
      <QfTable :tableData="tableData" :columns="columns" />
      <!-- 表格 -->
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params.pageNum"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
      <!-- 分页 -->
    </el-card>
  </div>
</template>

<script>
import QfTable from "@/components/qf-table/Index.vue";
import tableData from "~mock/users/history";
console.log(tableData);
export default {
  components: {
    QfTable,
  },
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
      params: {
        date: [],
        uname: "",
        pageNum: 1,
      },
      columns: [
        { title: "编号", field: "id" },
        { title: "姓名", field: "uname" },
        { title: "登录方式", field: "type" },
        { title: "登录城市", field: "area" },
        { title: "登录时间", field: "create_at" },
        { title: "上一次登录时间", field: "updated_at" },
      ],
      tableData: tableData.data,
    };
  },
};
</script>

<style lang="scss" scoped>
// .history {

// }
</style>
