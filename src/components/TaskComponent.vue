<template>
    <div class="task  bg-gray-100 h-full">
        <div class="show-task"><i class="fas fa-plus plus-icon"></i><span>Show Task</span></div>
        <h2 class="">Today</h2>

        <div class="todo-wrapper">
            <div class="task-wrapper">
                <div v-for="(item, index) in apiData" :key="index" class="tasks bg-white shadow-sm py-4 px-4">
                    <div class="form-element">
                        <span v-html="item"> </span>
                    </div>
                </div>

                <RichText class="rich-text" :options="options" :send="submitTask" ref="richTextEditor" />
            </div>
        </div>
    </div>
</template>
<script>
import {Button, RichText} from '@e9ine/vue_components';
import axios from 'axios';

export default {
    name: 'Task',
    components: {
        Button,
        RichText,
    },
    data() {
        return {
            seen: false,
            apiData: [],
            options: {
                content: '',
                placeholder: 'Your Task',
            },
            richTextEditor: '',
            interval: null,
        };
    },

    async created() {
        this.apiData = await this.fetchTasks();
    },

    methods: {
        async submitTask() {
            if (!this.options.content) {
                alert('Fill the form');
                return;
            }
            await axios.post('https://api.airtable.com/v0/apphZGgDhpEPZGSgI/today?api_key=keyb5bZMwjL3cHJ3q', {
                fields: {
                    task: this.options.content,
                },
            });
            this.apiData.push(this.options.content);
        },

        async fetchTasks() {
            const res = await axios.get('https://api.airtable.com/v0/apphZGgDhpEPZGSgI/today?api_key=keyb5bZMwjL3cHJ3q');
            const data = res.data.records.map(record => {
                return record.fields.task;
            });
            return data;
        },
    },
};
</script>

<style lang="scss" scoped>
.show-task {
    padding-top: 4rem;
    padding-bottom: 1rem;
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
.task {
    padding: 0 20%;
}
.tasks {
    margin-top: 16px;
    cursor: pointer;
    font-size: 18px;
}
.rich-text {
    margin-top: 12px;
}
</style>
