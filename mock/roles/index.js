//导入模块
const Mock = require("mockjs");
const { random } = require("../utils");
//准备数据
let data = [];
for (let i = 1; i <= 8; i++) {
  data.push(
    Mock.mock({
      id: "@id",
      role_name: ["管理员", "老板", "财务", "人事"][random(0, 3)],
      role_desc: "@ctitle(2, 4)",
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
// console.log(data);
