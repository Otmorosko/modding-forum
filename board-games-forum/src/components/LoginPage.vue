<!-- src/components/LoginPage.vue -->

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      message: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:3000/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });
        if (response.ok) {
          this.message = 'User logged in successfully!';
        } else {
          const errorData = await response.json();
          this.message = errorData.message || 'Login failed.';
        }
      } catch (error) {
        this.message = 'An error occurred: ' + error.message;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import '../styles/_variables.scss';


h1 {
  color: $primary-color;
}
</style>