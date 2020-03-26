<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  background-color: #fdfdf6;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
}
</style>
