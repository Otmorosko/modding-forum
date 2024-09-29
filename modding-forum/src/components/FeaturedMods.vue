<template>
  <div class="mod-card">
    <img :src="imgSrc" alt="mod image" />
    <h3>{{ title }}</h3>
    <p class="category">{{ category }}</p> 
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    imgSrc: String,
    category: String, 
  },
};
</script>

<style scoped>
.mod-card {

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #999999;
  border-radius: 15px;
  padding: 15px;
  transition: transform 0.3s ease;
}

.mod-card img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 15px;
}

.mod-card h3 {
  text-align: center;
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.mod-card p {
  text-align: center;
  font-size: 1em;
  color: #555;
}

.category {
  font-style: italic;
  font-size: 0.9em;
  color: #666;
  margin-bottom: 10px;
}
</style>
