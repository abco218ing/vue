<template>
  <qf-card title="门店列表"
 
   >
   <!--  url="/stores/create"  btnTitle="创建" -->
    <!-- 内容 -->
    <qf-table :tableData="tableData" :columns="columns" />
    <!-- 内容 -->

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
import tableData from "~mock/stores";
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
        pagenum: 1,
      },
      // 表数据
      tableData: tableData.data,
      // 表格列
      columns: [
        { title: "编号", field: "id" },
        { title: "封面", type: "img", payload: { field: "img" } },
        {
          title: "标题",
          field:"title",
          // type: "tips",
          // payload: { field: "title" },
          width: "160",
        },
        { title: "好评", field: "comment_good_count" },
        { title: "差评", field: "comment_bad_count" },
        { title: "总评", field: "comment_count" },
        { title: "销量", field: "shell_count" },
        { title: "联系方式", field: "mobile", width: "120" },
        { title: "营业时间", field: "work", width: "170" },
        {
          fixed: "right",
          title: "操作",
          width: "260",
          type: "btn",
          payload: [
            {
              name: "修改门店",
              type: "primary",
              click: (row) => {
                console.log("修改", row);

                // 1 显示弹框
                this.editState = true;
                // 2.
              },
            },
            {
              name: "删除",
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
