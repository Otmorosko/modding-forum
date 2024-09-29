<!-- src/App.vue -->

<template>
  <div id="app">
    <div class="navbar-gradient"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
#app {
  position: relative;
}
</style>
