<script setup lang="ts">
import { useChat } from '~/stores/useChat';

const { messages, loading } = useChat();

</script>
<template>
  <div class="chat-messages_wrapper">
    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <div v-for="message in messages" :key="message.id">
        <p class="text">{{ message.text }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-messages_wrapper {
  flex: 1;
  width: 48rem;
  margin: auto;
  max-height: calc(100vh - 100px);
  overflow: scroll;

  @media screen and (max-height: 1024px) {
    max-height: calc(100vh - 150px);

  }

  @media screen and (max-width: 1024px) {
    width: 40rem;
  }

  @media screen and (max-width: 768px) {
    width: 32rem;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  .text {
    font-size: 2rem;
    color: white;
  }

}
</style>
