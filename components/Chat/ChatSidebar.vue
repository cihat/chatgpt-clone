<template>
  <div class="chat-sidebar-container">
    <div class="new-chat-container">
      <div class="logo"></div>
      <h3>New chat</h3>
      <div class="icon"></div>
    </div>

    <!-- TODO -->
    <div class="chat-list"></div>
  </div>
</template>

<style scoped lang="scss">
.chat-sidebar-container {
  padding: 0 12px;
  width: 260px;
  visibility: visible;
  background: var(--chat-sidebar-bg-color);

  @media screen and (max-width: 768px) {
    display: none;
  }

  .new-chat-container {
    background: var(--chat-new-chat-bg-color);
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 0 8px;
    gap: .5rem;
    padding-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    box-sizing: content-box;

    h3 {
      font-size: .875rem;
      line-height: 1.25rem;
      font-weight: 500;
      color: var(--text-primary);
      margin-right: auto;

    }

    .icon,
    .logo {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: white;
    }
  }

}
</style>
