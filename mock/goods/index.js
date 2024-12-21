//导入模块
const Mock = require("mockjs");
const { random } = require("../utils");
//准备数据
let data = [];
for (let i = 1; i <= 8; i++) {
  data.push(
    Mock.mock({
      id: "@id",
      store: "@ctitle(2,4)",
      img: "@image(60x60,@color)",
      title: "@ctitle(6,20)",
      goods_number: random(1000, 9999),
      market_price: random(100, 999),
      shop_price: random(100, 999),
      create_time: "@datetime",
      state: [1, 0, 1, 0, 1, 0, 1, 0][random(0, 7)],
    })
  );
}
// 导出使用;
export default Mock.mock({
  meta: {
    state: 200,
    msg: "操作成功",
  },
  data,
});
