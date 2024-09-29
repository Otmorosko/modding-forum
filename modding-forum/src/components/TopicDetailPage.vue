<!-- src/components/TopicDetailPage.vue -->

<template>
  <div>
    <h2>{{ topic.title }}</h2>
    <p>{{ topic.content }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topic: {}
    };
  },
  async created() {
    const topicId = this.$route.params.id;
    try {
      const response = await fetch(`http://localhost:3000/api/topics/${topicId}`);
      const data = await response.json();
      this.topic = data;
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
};
</script>
