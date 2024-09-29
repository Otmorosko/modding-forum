<template>
  <div>
    <!-- NavBar -->
    <nav class="navbar-gradient">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/mods">Mods</a></li>
        <li><a href="/forum">Forum</a></li>
      </ul>
    </nav>

    <!-- Main Content -->
    <div class="main-content">
      <router-view />
    </div>

    <!-- Footer -->
    <footer>
      <p>&copy; 2024 Game Mods Hub</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
};
</script>

<style scoped>

</style>
