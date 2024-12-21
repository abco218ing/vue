<!-- 
      <qf-Table :tableData="tableData" :columns="columns"></qf-Table>
 //表格
 columns: [
        { title: "编号", field: "id" },
        { title: "所属角色", field: "role_name" },
        { title: "用户名", field: "uname" },
        { title: "手机号", field: "mobile" },
        {
          title: "冻结",
          type: "switch",
          payload: {
            field: "state",
            change: (row) => console.log("冻结", row),
          },
        },
        { title: "更新于", field: "updated_time" },
        {
          title: "操作",
          type: "btn",
          width: "260",
          payload: [
            {
              name: "修改用户",
              type: "primary",
              click: (row) => {
                console.log("修改用户", row);
                // 显示弹框
                this.editState = true;
              },
            },
            {
              name: "分配角色",
              type: "success",
              click: (row) => {
                console.log("分配角色", row);
                // 显示弹框
                this.editRoleState = true;
              },
            },
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
 -->