<template>
  <el-dialog
    title="分配权限"
    :visible.sync="state"
    width="30%"
    :before-close="handleClose"
  >
    <!-- 内容 -->
    <el-tree
      :data="roleData"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :props="defaultProps"
    >
    </el-tree>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="submitFn">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    state: {
      type: Boolean,
      dedault: false,
    },
  },
  data() {
    return {
      roleData: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    submitFn() {
      console.log("待开发");
    },
  },
};
</script>

<style></style>
