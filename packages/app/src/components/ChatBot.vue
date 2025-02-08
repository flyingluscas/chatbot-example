<template>
  <div class="container">
    <h1 class="title">AI ChatBot</h1>

    <div class="messages">
      <div class="message bot">
        <span>Como posso ajudar?</span>
      </div>

      <div class="message user">
        <span>Hello!</span>
      </div>

      <div class="message bot">
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
      </div>

      <div class="message user">
        <span>Hello!</span>
      </div>

      <div class="message bot">
        <span>Hi</span>
      </div>

      <div class="message user">
        <span>Hello!</span>
      </div>
    </div>

    <form>
      <input type="text" placeholder="Digite sua mensagem...">
    </form>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
}

.title {
  text-align: center;
}

.messages {
  margin: 30px;
  padding: 10px;
  border-radius: 10px;
  background-color: #292929;
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

form input:focus {
  outline: none;
}

form input::placeholder {
  color: white;
}
</style>
