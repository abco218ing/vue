// 显示：订单编号、下单人、收货人、总额、订单状态、支付状态、配送状态、创建于

// 导入模块
const Mock = require("mockjs");
const { random } = require("../utils");

// 准备数据
let data = [];
for (let i = 1; i <= 5; i++) {
  data.push(
    Mock.mock({
      id: "@id",
      uname1: "@ctitle(2,4)",
      uname2: "@ctitle(2,4)",
      price: random(1000, 9999),
      order_state: [1, 0, 1, 0, 1, 0, 1, 0][random(0, 7)],
      pay_state: [1, 0, 1, 0, 1, 0, 1, 0][random(0, 7)],
      send_state: [1, 0, 1, 0, 1, 0, 1, 0][random(0, 7)],
      create_time: "@datetime",
    })
  );
}

// 导出生成的测试数据即刻
export default Mock.mock({
  meta: {
    state: 200,
    msg: "操作成功",
  },
  data,
});
