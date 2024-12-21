// 编号、封面60x60、标题、好评、差评、总评、销量、联系方式、营业时间

// 导入模块
const Mock = require("mockjs");
const { random } = require("../utils");

// 准备数据
let data = [];
for (let i = 1; i <= 5; i++) {
  data.push(
    Mock.mock({
      id: "@id",
      img: "@image(60x60, @color)",
      title: "@ctitle(2,20)",
      comment_goods_count: random(0, 3),
      comment_bad_count: random(0, 3),
      comment_count: random(0, 3),
      sell_count: random(0, 3),
      mobile: "1@float(1000000000,9999999999,0,0)",
      work: "@datetime",
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
