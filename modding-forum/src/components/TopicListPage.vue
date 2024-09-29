<!-- src/components/TopicListPage.vue -->

<template>
  <div>
    <h2>Topics</h2>
    <ul>
      <li v-for="topic in topics" :key="topic.id">
        <router-link :to="{ name: 'TopicDetail', params: { id: topic.id } }">{{ topic.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: []
    };
  },
  async created() {
    try {
      const response = await fetch('http://localhost:3000/api/topics');
      const data = await response.json();
      this.topics = data;
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
};
</script>
