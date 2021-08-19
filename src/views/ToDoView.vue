
<template>
    <div class="app flex">
        <div class="w-2/12">
            <SideBar/>
        </div>
        
        <div class="flex-grow">
            <TaskView :period="$route.name"/>
        </div>
    </div>
</template>

<script>
import TaskView from '@/components/TaskView.vue';
import SideBar from '@/components/SideBar.vue';

export default {
    name: 'ToDoView',
    components: {
        SideBar,
        TaskView,
    },
    created(){

    }
};
</script>
