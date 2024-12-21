//导入模块
const Mock = require("mockjs");
const { random } = require("../utils");
//准备数据
let data = [];
for (let i = 1; i <= 8; i++) {
  data.push(
    Mock.mock({
      id: "@id",
      uname: "@ctitle(2, 4)",
      type: ["密保", "短信", "扫码"][random(0, 3)],
      area: "@province@city",
      create_at: "@datetime",
      updated_at: "@datetime",
    })
  );
}
//导出使用
export default Mock.mock({
  meta: {
    state: 200,
    msg: "操作成功",
  },
  data,
});
