<template>
    <div class="app">
        <Tailwind />
        <router-view></router-view>
    </div>
</template>

<script>
import TodayTask from './components/TodayTask.vue';
import Tailwind from './components/tailwind.vue';

export default {
    name: 'app',
    components: {
        Tailwind,
        TodayTask,
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