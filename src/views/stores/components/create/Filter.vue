<template>
  <qf-form width="80px" :formConfig="formConfig"></qf-form>
</template>

<script>
// 标题、所属分类、所属地区、封面60x60、相册
// 商家特色筛选
// 人均价筛选
// 优惠活动筛选
// 起送、夜间配送、人均、电话☎️、营业时间、地址（腾讯地图定位获取）

export default {
  data() {
    return {
      // 表单配置
      formConfig: [
        {
          label: "所属分类",
          field: "cate_id",
          type: "cascader",
          payload: {
            change: (val) => console.log("所属分类", val),
            options: [
              {
                value: "zhinan",
                label: "指南",
                children: [
                  {
                    value: "shejiyuanze",
                    label: "设计原则",
                    children: [
                      {
                        value: "yizhi",
                        label: "一致",
                      },
                      {
                        value: "kekong",
                        label: "可控",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          rules: [{ required: true, message: "所属分类必须", trigger: "blur" }],
        },
        {
          label: "所属地区",
          field: "area_id",
          type: "cascader",
          payload: {
            change: (val) => console.log("所属地区", val),
            options: [
              {
                value: "zhinan",
                label: "指南",
                children: [
                  {
                    value: "shejiyuanze",
                    label: "设计原则",
                    children: [
                      {
                        value: "yizhi",
                        label: "一致",
                      },
                      {
                        value: "kekong",
                        label: "可控",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          rules: [{ required: true, message: "所属地区必须", trigger: "blur" }],
        },
        {
          label: "商家特色",
          field: "filter3",
          type: "select",
          payload: [
            { label: "特色1", value: "特色1" },
            { label: "特色2", value: "特色2" },
            { label: "特色3", value: "特色3" },
          ],
          rules: [{ required: true, message: "商家特色必须", trigger: "blur" }],
        },
        {
          label: "人均价",
          field: "filter1",
          type: "select",
          payload: [
            { label: "特色1", value: "特色1" },
            { label: "特色2", value: "特色2" },
            { label: "特色3", value: "特色3" },
          ],
          rules: [{ required: true, message: "人均价必须", trigger: "blur" }],
        },
        {
          label: "优惠活动",
          field: "filter2",
          type: "select",
          payload: [
            { label: "特色1", value: "特色1" },
            { label: "特色2", value: "特色2" },
            { label: "特色3", value: "特色3" },
          ],
          rules: [{ required: true, message: "优惠活动必须", trigger: "blur" }],
        },
      ],
    };
  },
};
</script>

<style></style>
