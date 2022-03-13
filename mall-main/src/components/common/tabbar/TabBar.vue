<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  display: flex;

  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;

  background-color: #f6f6f6;

  box-shadow: 0px -1px 10px rgba(59, 58, 58, 0.2);

  text-align: center;
  height: 49px;
}
</style>