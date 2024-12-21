<template>
  <qf-card title="权限列表" url="/auths/Creare" btnTitle="创建">
    <el-input placeholder="输入关键字进行过滤" v-model="filterText"> </el-input>

    <el-tree
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      :expand-on-click-node="false"
      ref="tree2"
    >
      <!-- 自定义按钮 -->
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button type="text" size="mini" @click="EditFn(node, data)">
            编辑
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="handleDeleteFn(node, data)"
          >
            删除
          </el-button>
        </span>
      </span>
    </el-tree>
    <Edit :state="editState" @close="editState = false" />
  </qf-card>
</template>

<script>
import Edit from "./components/Edit.vue";

export default {
  components: {
    Edit,
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    },
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    EditFn(node, data) {
      console.log("编辑", node, data);
      this.editState = true;
    },
    handleDeleteFn(node, data) {
      console.log("删除", node, data);
      this.deleteFn();
    },
  },

  data() {
    return {
      editState: false,
      filterText: "",
      data: [
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
};
</script>

<style lang="scss" scoped>
::v-deep .el-tree-node__content {
  padding-top: 5px !important;
  padding-bottom: 5px !important;
}
</style>
