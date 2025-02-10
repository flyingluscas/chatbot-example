<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { createId } from '@paralleldrive/cuid2'
import { pushToRealTimeDatabase, watchRealTimeDatabase } from '@/firebase';

const chatId = ref(createId())
const input = ref("")
const chat = ref(null)
const loading = ref(false)
const messages = ref([])

const chatRealTimeDatabasePath = `chats/${chatId.value}`

async function scrollToBottom() {
  await nextTick(() => {
    if (chat.value) {
      chat.value.scrollTop = chat.value.scrollHeight
    }
  })
}

function toggleLoading() {
  loading.value = !loading.value
}

watchRealTimeDatabase(chatRealTimeDatabasePath, (data: any) => {
  messages.value = Object.values(data)
})

pushToRealTimeDatabase(chatRealTimeDatabasePath, { text: "Como posso ajudar?", sender: "bot" })

async function sendMessage() {
  if (!input.value.trim()) {
    return
  }

  toggleLoading()

  const text = input.value.trim()

  await pushToRealTimeDatabase(chatRealTimeDatabasePath, {
    text,
    sender: "user",
  })

  input.value = ""

  toggleLoading()

  await scrollToBottom()
}
</script>

<template>
  <div class="container">
    <h1 class="title">AI ChatBot</h1>

    <div ref="chat" class="messages">
      <div v-for="message in messages" class="message" :class="message.sender">
        <span>{{ message.text }}</span>
      </div>
    </div>

    <form @submit.prevent="sendMessage">
      <input type="text" placeholder="Digite sua mensagem..." v-model="input" :disabled="loading">
    </form>
  </div>
</template>

<style scoped>
.container {
  width: 700px;
}

.title {
  text-align: center;
}

.messages {
  margin: 30px;
  padding: 10px;
  border-radius: 10px;
  background-color: #292929;
  max-height: 70vh;
  overflow-y: auto;
}

.message {
  margin: 10px;
  display: flex;

  justify-content: left;
}

.message.user {
  justify-content: right;
}

.message span {
  padding: 10px;
}

.message.bot span {
  background-color: #4C585B;
  border-radius: 10px 10px 10px 0;
}

.message.user span {
  background-color: #3674B5;
  border-radius: 10px 0 10px 10px;
}

form {
  display: flex;
  margin: 0 30px;
  justify-content: center;
}

form input {
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 10px;
  background-color: #353535;
}

form input:disabled::placeholder {
  color: #212121;
}

form input:focus {
  outline: none;
}

form input::placeholder {
  color: white;
}
</style>
