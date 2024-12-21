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
      uname: "@ctitle(2, 4)",
      mobile: "1@float(1000000000,9999999999,0,0)",
      state: [true, false, true, false, true, false, true, false, true][
        random(0, 3)
      ],
      updated_time: "@datetime",
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
// 9586 编号
// 普通用户 所属角色
// 66666 用户名
// 手机号
// 冻结
// 1970 - 01 - 01 08: 00: 00 更新于
