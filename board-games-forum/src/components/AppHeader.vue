<template>
  <header>
    <h1>Board Game Central</h1>
    <p class="tagline">Your Gateway to Endless Board Game Adventures and Strategies</p>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
header {
  padding: 40px;
  text-align: center;
  margin-top: 7%;
}

h1 {
  margin: 0;
  font-size: 5em;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.tagline {
  font-size: 1.5em;
  margin-top: 10px;
  color: #d3d3d3;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}
</style>
