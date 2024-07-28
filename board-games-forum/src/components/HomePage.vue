<!-- src/components/HomePage.vue -->

<template>
  <div>
    <AppHeader />
    <router-link to="/login">Go to Login Page</router-link>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue';

export default {
  name: 'HomePage',
  components: {
    AppHeader
  }
};
</script>

<style>

</style>
