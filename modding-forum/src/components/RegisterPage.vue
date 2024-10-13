<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: ''
    };
  },
  methods: {
    async register() {
      try {
        console.log('Wysyłam dane rejestracji:', { email: this.email });
        const response = await fetch('http://localhost:3000/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email
          })
        });
        const result = await response.json();
        console.log('Otrzymana odpowiedź z serwera:', result);
        if (response.ok) {
          this.message = 'Please check your email to confirm your registration.';
        } else {
          this.message = result.message || 'Registration failed.';
        }
      } catch (error) {
        console.log('Błąd rejestracji:', error);
        this.message = 'An error occurred: ' + error.message;
      }
    }
  }
};
</script>

<style scoped>
/* Style dla formularza */
form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
}

button {
  margin-top: 10px;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
