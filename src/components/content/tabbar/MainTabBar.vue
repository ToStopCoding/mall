<template>
  <!-- 
    如果是import导入的 可以直接使用别名 参考 build -> webpack.base.conf.js 
    如果是通过src的 则需要添加~   eg:src="~@/assets/img/tabbar/home.svg"
  -->
  <tab-bar>
    <tab-bar-item path="/homemall" activeColor="rgb(255, 87, 119)">
      <img slot="tabbar-icon" src="../../../assets/img/tabbar/home.svg" />

      <img
        slot="tabbar-icon-active"
        src="../../../assets/img/tabbar/home_active.svg"
      />

      <div slot="tabbar-text">首页</div>
    </tab-bar-item>

    <tab-bar-item path="/categorymall" activeColor="rgb(255, 87, 119)">
      <img slot="tabbar-icon" src="../../../assets/img/tabbar/category.svg" />
      <img
        slot="tabbar-icon-active"
        src="../../../assets/img/tabbar/category_active.svg"
      />
      <div slot="tabbar-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cartmall" activeColor="rgb(255, 87, 119)">
      <img slot="tabbar-icon" src="../../../assets/img/tabbar/shopcart.svg" />
      <img
        slot="tabbar-icon-active"
        src="../../../assets/img/tabbar/shopcart_active.svg"
      />
      <div slot="tabbar-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profilemall" activeColor="rgb(255, 87, 119)">
      <img slot="tabbar-icon" src="../../../assets/img/tabbar/profile.svg" />
      <img
        slot="tabbar-icon-active"
        src="../../../assets/img/tabbar/profile_active.svg"
      />
      <div slot="tabbar-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./components/common/tabbar/TabBar.vue";
import TabBarItem from "./components/common/tabbar/TabBarItem.vue";

export default {
  components: { TabBar, TabBarItem },
  name: "MainTabBar",
};
</script>

<style>
</style>