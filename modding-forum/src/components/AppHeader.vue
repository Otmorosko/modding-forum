<template>
  <div class="navbar-gradient">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/mods">Mods</router-link></li>
      <li><router-link to="/forum">Forum</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>