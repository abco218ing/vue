<template>
  <qf-card title="商品列表">
    <qf-Table :tableData="tableData" :columns="columns"></qf-Table>
  </qf-card>
</template>

<script>
import tableData from "~mock/goods";
export default {
  data() {
    return {
      columns: [
        { title: "编号", field: "id" },
        { title: "所属门店", field: "store" },
        { title: "封面", type: "img", payload: { field: "img" } },
        { title: "标题", field: "title", width: "210px" },
        { title: "库存", field: "goods_number" },
        { title: "市场价", field: "market_price" },
        { title: "促销价", field: "shop_price" },
        { title: "创建于", field: "create_time", width: "180px" },
        {
          title: "状态",
          type: "switch",
          payload: {
            field: "state",
            change: (row) => console.log("冻结", row),
          },
        },
        {
          title: "操作",
          type: "btn",
          width: "260",
          payload: [
            // {
            //   name: "修改商品",
            //   type: "primary",
            //   click: (row) => {
            //     console.log("修改用户", row);
            //     // 显示弹框
            //     this.editState = true;
            //   },
            // },
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

<style></style>
