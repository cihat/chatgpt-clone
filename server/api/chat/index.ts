import ollama from 'ollama';
import type { Message } from '~/types/chat';

export default eventHandler(async (event) => {
  const propmt = await readBody(event)

  const messages: Message[] = [
    {
      role: "user",
      content: propmt || "Hi, I am Ollama. How are you?"
    }
  ]

  const respont = await ollama.chat({
    model: "llama2:latest",
    messages,
    stream: true
  })

  const stream = new ReadableStream({
    async pull(controller) {
      const { value, done } = await respont.next()

      if (done) controller.close()
      else controller.enqueue(value.message.content)
    }
  })

  return sendStream(event, stream);
})
