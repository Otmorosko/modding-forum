<template>
    <div class="mod-card">
      <img :src="imgSrc" alt="mod image" />
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FeaturedMods',
    props: {
      title: String,
      description: String,
      imgSrc: String
    }
  };
  </script>
  
  <style scoped>
  .mod-card {
    padding: 20px;
    background-color: #fff;
    color: #000;
    text-align: center;
  }
  
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
  }
  
  h3 {
    margin-top: 10px;
    font-size: 1.5em;
  }
  
  p {
    font-size: 1em;
    margin-top: 5px;
  }
  </style>
  