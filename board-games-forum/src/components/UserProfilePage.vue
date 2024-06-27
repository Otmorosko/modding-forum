<template>
  <div class="user-profile">
    <h2>User Profile</h2>
    <p>Username: {{ username }}</p>
    <p>Email: {{ email }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      username: 'JohnDoe',
      email: 'john.doe@example.com',
    };
  },
};
</script>

<style scoped>
.user-profile {
  max-width: 600px;
  margin: auto;
}
</style>
