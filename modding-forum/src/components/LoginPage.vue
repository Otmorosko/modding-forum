<template>
  <div class="login-page">
    <h2>Login</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit" class="login-btn">Login</button>
    </form>
    <p v-if="message" class="message">{{ message }}</p>
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
          const responseData = await response.json();
          localStorage.setItem('authToken', responseData.token); 
          this.message = 'User logged in successfully!';
          this.$router.push('/home'); 
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

.login-page {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: $primary-color;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.login-btn {
  width: 100%;
  padding: 12px;
  background-color: $primary-color;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: darken($primary-color, 10%);
}

.message {
  text-align: center;
  color: red;
  margin-top: 15px;
}
</style>
