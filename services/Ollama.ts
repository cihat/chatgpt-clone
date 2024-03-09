import ollama from 'ollama'
// import type { Model, Messages, Options } from '@/types/ollama'
import type { Message, ChatRequest, ModelResponse, Options } from 'ollama'

class Ollama {
  model: string;
  options: any;
  constructor(model: string = 'llama2:latest', options?: any = {}) {
    this.model = model
    this.options = options
  }

  // chat
  chat(messages: [Message]) {
    return eventHandler(async (event: any) => {
      const response = ollama.chat({
        model: this.model,
        messages: [...messages],
        stream: true,
      })

      const stream = new ReadableStream({
        async pull(controller) {
          const { done, value } = await response.next();
          if (done) {
            controller.close();
          } else {
            controller.enqueue(value.message.content);
          }
        }
      })

      return sendStream(event, stream)
    })
  }
}

export default new Ollama('llama2:latest', {})
