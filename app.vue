<script setup lang="ts">
import "@/assets/main.css"
import ChatSidebar from "@/components/Chat/ChatSidebar.vue"
import ChatWindow from "@/components/Chat/ChatWindow.vue"
</script>

<template>
  <div class="chat-container">
    <chat-sidebar />
    <chat-window />
  </div>
</template>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  height: 100vh;
  width: 100%;
}
</style>
