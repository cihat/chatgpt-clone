import { defineStore } from 'pinia'

type Message = {
  text: string,
  id: string,
}

export const useChat = defineStore({
  id: 'chat',
  state: () => ({
    prompt: 'Hi, I am Ollama. How can I help you?',
    loading: false,
    messages: [{
      text: 'Hi, I am Ollama. How can I help you?',
      id: '1',
    }, {
      text: 'Hi, I am Ollama. How can I help you?',
      id: '2',
    }, {
      text: 'Hi, I am Ollama. How can I help you?',
      id: '3',
    },]
  }),
  actions: {
    async receiveMessage(message: Message) {
      this.messages.push(message)
    }
  },

})
