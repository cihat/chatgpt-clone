<script setup lang="ts">
import ChatMessages from "@/components/Chat/ChatMessages.vue"
import ChatHeader from "@/components/Chat/ChatHeader.vue"
import ChatInput from "@/components/Chat/ChatInput.vue"


</script>
<template>
  <div class="chat-window-container">
    <chat-header />
    <chat-messages />
    <chat-input />
  </div>
</template>

<style lang="scss" scoped>
.chat-window-container {
  background: var(--chat-window-bg-color);
  width: calc(100% - 260px);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
</style>
