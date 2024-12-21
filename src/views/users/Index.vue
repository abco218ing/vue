<template>
  <div class="users">
    <el-card class="box-card">
      <!-- 头部 -->
      <div slot="header" class="clearfix">
        <span>用户列表</span>
        <el-button
          class="right"
          type="primary"
          round
          @click="jump('/users/Create')"
          >创建用户</el-button
        >
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
      <qf-Table :tableData="tableData" :columns="columns"></qf-Table>
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
    <EditRole :state="editRoleState" @close="editRoleState = false" />
  </div>
</template>

<script>
import tableData from "~mock/users/index.js";
import Edit from "./components/Edit.vue";
import EditRole from "./components/EditRole.vue";
export default {
  components: {
    Edit,
    EditRole,
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    deleteFn(row) {
      console.log("删除信息", row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  data() {
    return {
      // 编辑表单数据
      editState: false,
      editRoleState: false,
      // 筛选模型
      params: {
        date: [],
        uname: "",
        pageNum: 1,
      },
      columns: [
        { title: "编号", field: "id" },
        { title: "所属角色", field: "role_name" },
        { title: "用户名", field: "uname" },
        { title: "手机号", field: "mobile" },
        {
          title: "冻结",
          type: "switch",
          payload: {
            field: "state",
            change: (row) => console.log("冻结", row),
          },
        },
        { title: "更新于", field: "updated_time" },
        {
          title: "操作",
          type: "btn",
          width: "260",
          payload: [
            {
              name: "修改用户",
              type: "primary",
              click: (row) => {
                console.log("修改用户", row);
                // 显示弹框
                this.editState = true;
              },
            },
            {
              name: "分配角色",
              type: "success",
              click: (row) => {
                console.log("分配角色", row);
                // 显示弹框
                this.editRoleState = true;
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

<style lang="scss" scoped>
// .history {

// }
</style>
