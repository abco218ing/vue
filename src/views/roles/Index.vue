<template>
  <div class="roles">
    <el-card class="box-card">
      <!-- 头部 -->
      <div slot="header" class="clearfix">
        <span>角色列表</span>
        <el-button
          class="right"
          type="primary"
          round
          @click="jump('/roles/Create')"
          >创建角色</el-button
        >
      </div>
      <!-- 头部 -->
      <!-- 内容部分 -->

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
    <!-- 编辑弹框 -->
    <Edit :state="editState" @close="editState = false" />
    <EditAuth :state="editAuthState" @close="editAuthState = false" />
  </div>
</template>

<script>
import QfTable from "@/components/qf-table/Index.vue";
import tableData from "~mock/roles/index.js";
import Edit from "./components/Edit.vue";
import EditAuth from "./components/EditAuth.vue";
export default {
  components: {
    QfTable,
    EditAuth,
    Edit,
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
      // 编辑表单数据
      editState: false,
      editAuthState: false,
      // 筛选模型
      params: {
        date: [],
        uname: "",
        pageNum: 1,
      },
      columns: [
        { title: "编号", field: "id" },
        { title: "角色名称", field: "role_name" },
        { title: "角色描述", field: "role_desc" },
        {
          title: "操作",
          type: "btn",
          width: "260",
          payload: [
            {
              name: "编辑角色",
              type: "primary",
              click: (row) => {
                console.log("修改用户", row);
                // 显示弹框
                this.editState = true;
              },
            },
            {
              name: "分配权限",
              type: "success",
              click: (row) => {
                console.log("分配角色", row);
                // 显示弹框
                this.editAuthState = true;
              },
            },
            {
              name: "删除",
              type: "danger",
              click: (row) => {
                console.log("删除", row);
                this.deleteFn(row);
              },
            },
          ],
        },
      ],
      tableData: tableData.data,
    };
  },
};
</script>
