<template>
    <div class="app flex">
        <div class="w-2/12">
            <Sidebar />
        </div>
        <div class="flex-grow">
            <TaskView :day="$route.name" />
        </div>
    </div>
</template>

<script>
import TaskView from '../components/TaskView.vue';
import Sidebar from '../components/Sidebar.vue';

export default {
    name: 'TodoView',
    components: {
        Sidebar,
        TaskView,
    },
    created() {
        this.$route;
    },
};
</script>
