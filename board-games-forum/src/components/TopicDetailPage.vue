<template>
  <div class="topic-detail">
    <h2>{{ topic.title }}</h2>
    <p>{{ topic.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'TopicDetail',
  data() {
    return {
      topic: {
        title: 'Sample Topic',
        content: 'This is the content of the topic.',
      },
    };
  },
};
</script>

<style scoped>
.topic-detail {
  max-width: 800px;
  margin: auto;
}
</style>
