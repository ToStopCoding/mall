<template>
  <div>
    <ul class="recommends">
      <li v-for="item in recommends">
        <a :href="item.link">
          <img :src="item.image" />
          <div>{{ item.title }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommends {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 8px 0 15px;
  border-bottom: 15px solid #eee;
}
.recommends li {
  flex: 1;
}
.recommends li img {
  width: 90%;
  margin-bottom: 5px;
}
</style>