<template>
  <div class="app">
    <Tailwind />
    <Task />
  </div>
</template>

<script>
import Task from "./components/TaskComponent.vue";
import Tailwind from "./components/tailwind.vue";

export default {
  name: "app",
  components: {
    Tailwind,
    Task,
  },
};
</script>

<style scoped>
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