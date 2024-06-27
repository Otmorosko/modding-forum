<template>
  <div class="topic-list">
    <h2>Topics</h2>
    <ul>
      <li v-for="topic in topics" :key="topic.id">
        {{ topic.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopicList',
  data() {
    return {
      topics: [
        { id: 1, title: 'Topic 1' },
        { id: 2, title: 'Topic 2' },
        { id: 3, title: 'Topic 3' },
      ],
    };
  },
};
</script>

<style scoped>
.topic-list {
  max-width: 800px;
  margin: auto;
}
</style>
