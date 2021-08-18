<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
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