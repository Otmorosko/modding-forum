<template>
    <div class="landing-page">
      <header class="header-section">
        <img src="/path/to/logo.png" alt="ModMasters Logo" class="logo" />
        <div class="content">
          <h1>Discover, discuss, and enhance your gaming experience</h1>
          <p>Enhance your gaming experience with community-made modifications and collaboration.</p>
          <button class="join-btn" @click="goToRegister">Join Now</button>
          <button class="login-btn" @click="goToLogin">Log In</button>
        </div>
        <div class="image-container">
          <img src="https://via.placeholder.com/400x300" alt="Game Screenshot" />
        </div>
      </header>
      <footer class="footer-section">
        <p>Explore the endless possibilities of game modifications.</p>
        <p>&copy; 2024 Game Mods Hub</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
    methods: {
      goToRegister() {
        this.$router.push('/register');
      },
      goToLogin() {
        this.$router.push('/login');
      }
    }
  };
  </script>
  
  <style scoped>
  @import '../styles/LandingPage.scss';
  </style>
  