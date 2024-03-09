<script setup lang="ts">
import { useChat } from "~/stores/useChat";
import { ref } from "vue";

const { prompt } = useChat();

const chatData = ref("");
const loading = ref(false);

const handleSendButton = () => {
  loading.value = true
  console.log("prompt", prompt)
  fetch("/api/chat", {
    method: "post",
    body: JSON.stringify({ prompt }),
  }).then(res => {
    loading.value = false
    const reader = res.body?.getReader()

    return reader?.read().then(function read(result: any): any {
      if (result.done) return chatData.value

      const decodedText = new TextDecoder().decode(result.value) as string
      chatData.value += decodedText

      return reader?.read().then(read)
    })
  })
}
</script>

<template>
  <form class="chat-input-wrapper" @submit.prevent="handleSendButton">
    <textarea v-model="prompt" class="chat-input" tabindex="0" rows="1" placeholder="Message ChatGPT…" />
    <div class="send-button">
      <button type="submit" :disabled="loading" @click="handleSendButton">↑</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.chat-input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 8px;
  width: 48rem;
  overflow: hidden;
  margin: auto;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  .chat-input {
    width: 100%;
    height: 3.25rem;
    padding: 8px;
    overflow-y: hidden;
    border-radius: 8px;
    border: none;
    background: var(--chat-input-bg-color);
    color: var(--text-primary);
    margin: auto;
    border: 1px solid var(--chat-input-border-color);
  }

  .send-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--icon-bg-color);

    button {
      width: 100%;
      height: 100%;
      border: none;
      background: none;
      color: var(--icon-color);
      font-size: 1.5rem;
      cursor: pointer;
      font-weight: bold;
    }
  }
}
</style>
