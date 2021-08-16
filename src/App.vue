<template>
  <div class="app">
    <Menu />
    <Task />
  </div>
</template>

<script>
import Task from "./components/TaskComponent.vue";
import Menu from "./components/Menu.vue";

export default {
  name: "app",
  components: {
    Task,
    Menu,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app {
  height: 100vh;
  position: relative;
}
</style>