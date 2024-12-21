<template>
  <qf-card title="分类列表">
    <qf-Table :tableData="tableData" :columns="columns"> </qf-Table>
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
  </qf-card>
</template>

<script>
import tableData from "~mock/cates/index.js";
console.log(tableData);
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
      tableData,
      params: {
        date: [],
        uname: "",
        pageNum: 1,
      },

      columns: [
        { title: "分类编号", field: "cat_id" },
        { title: "分类名称", field: "name" },
        {
          title: "分类层级",
          type: "tag",
          payload: {
            field: "level",
            color: "success",
          },
        },
      ],
    };
  },
};
</script>

<style></style>
