<template>
  <div class="menu" :style="{ width: widthMenu }">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :unique-opened="true"
      :default-active="defaultMenuActive"
      background-color="rgb(45, 58, 75)"
      text-color="rgb(150, 156, 165)"
    >
      <!-- 内容 -->
      <template  v-for="(oneItem,oneIndex) in menuData" >
        <el-submenu :key="oneIndex"  :index="oneIndex + ''">
        <template slot="title">
          <!-- <i class="el-icon-location"></i> -->
          <i class="iconfont icon-caidan"></i>
          <span slot="title" v-show="widthMenu == '200px'">{{oneItem.name}}</span>
        </template>
        <!-- <el-menu-item index="1-1" @click="jump('/welcome')"
          ><i class="iconfont icon-shezhi"></i>首页欢迎</el-menu-item
        >
        <el-menu-item index="1-2" @click="jump('/users/history')"
          ><i class="iconfont icon-shezhi"></i>访客记录</el-menu-item
        > -->
         <!-- 内2 -->
         <template v-for="(twoItem, twoIndex) in oneItem.children">
         <el-menu-item :key="twoIndex" :index="oneIndex + '-' + twoIndex" @click="jump(twoItem.path)"
           ><i class="iconfont icon-shezhi"></i>{{twoItem.name}}</el-menu-item
        ></template>
      </el-submenu>
      </template>

    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    widthMenu: {
      type: String,
      default: "200px",
    },
  },
  data() {
    return {
      defaultMenuActive:"",

      isCollapse: false,

      menuData:[
        {
        name:'后台首页',
        children:[
          {name:'首页欢迎',path:'/welcome'},
          {name:'访客记录',path:'users/History'}
        ]
      },
      {
        name:'分类管理',
        children:[
          {name:'分类列表',path:'/cates'},
        ]
      },
       {
        name:'门店管理',
        children:[
          {name:'门店列表',path:'/stores'},
          // {name:'门店创建',path:'/stores/Create'}
        ]
      },
      {
        name:'门店商品',
        children:[
          {name:'商品列表',path:'/goods'},
        ]
      },
       {
        name:'订单管理',
        children:[
          {name:'订单列表',path:'/orders'},
          {name:'订单统计',path:'/orders/total'},
        ]
      },
       {
        name:'用户管理',
        children:[
          {name:'用户列表',path:'/users'},
          {name:'用户创建',path:'/users/create'}
        ]
      },
      {
        name:'角色管理',
        children:[
          {name:'角色列表',path:'/roles'},
          {name:'角色创建',path:'/roles/create'}
        ]
      },
      {
        name:'权限管理',
        children:[
          {name:'角色列表',path:'/auths'},
          {name:'角色创建',path:'/auths/Creare'}
        ]
      },
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
      watch: {
    $route: {
      handler(newData) {
        // console.log(this.menus);
        // console.log(data);
        this.menuData.forEach((oneMenu, oneIndex) => {
          if (oneMenu.children) {
            oneMenu.children.forEach((twoMenu, twoIndex) => {
              if (twoMenu.path == newData.path) {
                this.defaultMenuActive = `${oneIndex}-${twoIndex}`;
              }
            });
          }
        });
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.menu {
  width: 200px;
  height: 100%;
  background-color: brown;

  .el-menu {
    height: 100%;
    border: none;

    .icon-caidan {
      color: #909399;
      font-size: 18px;
      font-weight: bold;
      margin-right: 5px;
    }

    .icon-shezhi {
      font-size: 16px;
      margin-right: 3px;
    }
  }
}
</style>
