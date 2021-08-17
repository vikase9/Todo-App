<template>
  <div class="app">
    <Menu />
    <div class="show-task">
      <i class="fas fa-plus plus-icon"></i><span>Show Task</span>
    </div>
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
  }
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
.show-task {
  padding-top: 6rem;
  padding-left: 1rem;
}
.plus-icon {
  font-size: 16px;
  color: rgb(245, 70, 70);
  padding: 2px;
}
.show-task:hover {
  cursor: pointer;
}

.show-task > span {
  margin-left: 8px;
  color: rgb(142, 143, 144);
}
.show-task:hover .plus-icon {
  background-color: rgb(245, 70, 70);
  color: white;
  border-radius: 50%;
}
.show-task span:hover {
  color: rgb(245, 70, 70);
}
</style>