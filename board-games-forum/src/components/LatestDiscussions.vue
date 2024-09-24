<template>
    <div class="discussion-card">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LatestDiscussions',
    props: {
      title: String,
      description: String
    }
  };
  </script>
  
  <style scoped>
  .discussion-card {
    padding: 20px;
    background-color: #fff;
    color: #000;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  