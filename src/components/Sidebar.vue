<template>
    <div id="sidebar" class="bg-gray-600 h-full">
        <router-link to="/" class="block text-white px-6 py-6">
            <span>Today</span>
        </router-link>
        <router-link to="/tomorrow" class="block text-white px-6 py-6">
            <span>Tomorrow</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
};
</script>

<style></style>
