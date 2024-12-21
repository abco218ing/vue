import Vue from "vue";

// 混入
Vue.mixin({
  methods: {
    jump(path) {
      if (path === this.$route.path) return;
      return this.$router.push(path);
    },
    deleteFn(row, success, error) {
      console.log("公共的删除信息，删除当前行数据：", row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // this.$message({
          //   type: "success",
          //   message: "删除成功!",
          // });
          console.log("delete sure");
          if (success) success();
        })
        .catch(() => {
          // this.$message({
          //   type: "info",
          //   message: "已取消删除",
          // });
          console.log("delete cancel");
          if (error) success();
        });
    },
  },
});
