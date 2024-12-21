import Vue from "vue";

// 使用
// {{变量}}
// {{变量 | 过滤器名称}}
// 管道前面的数据 默认是第一个形参

// 过滤商品分类
Vue.filter("cateFilter", (data) => {
  let tmp = ["一级分类", "二级分类", "三级分类"];
  return tmp[parseInt(data) - 1];
});

// 过滤商品分类提示
Vue.filter("elTagTypeFilter", (data) => {
  let tmp = ["", "success", "info", "warning", "danger"];
  return Number(data) ? tmp[data] : data;
});

// 商品标题截取
Vue.filter("substrFilter", (data, length = 17) => {
  if (data.length > length) data = data.substr(0, length) + "...";
  return data;
});

// 订单状态。0，未确认；1，已确认；2，已取消；3，无效；4，退货；
Vue.filter("orderStatusFilter", (data) => {
  return ["未确认", "已确认", "已取消", "无效", "退货"][data];
});

// pay_status: 2, // 支付状态；0，未付款；1，付款中；2，已付款
Vue.filter("payStatusFilter", (data) => {
  return ["未付款", "付款中", "已付款"][data];
});

// 商品配送情况，0，未发货；1，已发货；2，已收货；3，备货中
Vue.filter("shippingStatusFilter", (data) => {
  return ["未发货", "已发货", "已收货", "备货中"][data];
});
