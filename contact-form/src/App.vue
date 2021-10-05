<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Form></Form>
  </div>
</template>

<script>
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    Form,
  },
};
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  background: linear-gradient(#b5dac9, #c6d5e7);
  height: 100vh;
  margin: 0;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #35495e;
}

img {
  height: 200px;
  margin: 0 auto;
  display: block;
  animation: appear 2s;
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
