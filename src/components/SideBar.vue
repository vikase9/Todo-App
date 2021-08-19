<template>
    <div id="app" class="bg-gray-600 h-full">
        <router-link to="/" class="block text-white px-6 py-6" :class="{'bg-gray-800': $route.name == 'today'}">
            <span>Today</span>
        </router-link>
        <router-link to="/upcoming" class="block text-white px-6 py-6" :class="{'bg-gray-800': $route.name == 'tomorrow'}">
            <span>Upcoming</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    data() {
        return {
            open: true,
            dimmer: true,
        };
    },
    methods: {
        toggle() {
            this.open = !this.open;
        },
    },
};
</script>

<style></style>
