<template>
  <div class="chat">
    <h2>Live Chat</h2>
    <div class="messages">
      <div v-for="message in messages" :key="message.id">
        <strong>{{ message.user }}:</strong> {{ message.text }}
      </div>
    </div>
    <input type="text" v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message" />
  </div>
</template>

<script>
export default {
  name: 'ChatComponent',
  data() {
    return {
      messages: [],
      newMessage: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.messages.push({
          user: 'You',
          text: this.newMessage,
        });
        this.newMessage = '';
      }
    },
  },
};
</script>

<style scoped>
.chat {
  max-width: 600px;
  margin: auto;
}
.messages {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
}
</style>
