<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive"><slot name="tabbar-icon"></slot></div>
    <div v-else><slot name="tabbar-icon-active"></slot></div>
    <div :style="StyleColor"><slot name="tabbar-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "rgb(255, 87, 119)",
    },
  },
  data() {
    return {
      //   isActive: true,
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    StyleColor() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
      //   console.log("HHHHHHH");
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
}
.tabbar-text {
  font-size: 12px;
  color: #333;
  margin-top: 3px;
}
</style>