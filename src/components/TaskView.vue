<template>
    <div class="task bg-gray-100 h-full">
        <div @click="showTask" class="show-task"><i class="fas fa-plus plus-icon"></i>
        <span v-if="seen">Hide Task</span>
        <span v-else>Show Task</span>
        </div>
        <div v-if="seen">
            <h2>
                <span class="text-lg font-bold">{{ this.day }},</span> <span class="text-sm">{{ new Date() | moment('dddd MMMM Do') }}</span>
            </h2>

            <div class="todo-wrapper">
                <div class="task-wrapper">
                    <RichText class="rich-text" :options="options" :send="submitTask" ref="richTextEditor" />
                    <div v-cloak v-for="(item, index) in apiData" :key="index" class="tasks bg-white shadow-sm py-4 px-4" v-on:click="delteTask(item, index)">
                        <div class="form-element flex justify-center">
                            <span class="font-serif" v-html="item"> </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {Button, RichText} from '@e9ine/vue_components';
import axios from 'axios';

export default {
    name: 'TodayTask',
    props: {
        day: {
            type: String,
        },
    },
    components: {
        Button,
        RichText,
    },
    data() {
        return {
            title: 'vikas',
            seen: false,
            apiData: [],
            options: {
                content: '',
                placeholder: 'Your Task',
            },
            richTextEditor: '',
        };
    },

    async mounted() {
        await this.fetchTasks();
    },

    methods: {
        showTask() {
            this.seen = !this.seen
        },
        async submitTask() {
            if (!this.options.content) {
                alert('Fill the form');
                return;
            }
            await axios.post(`https://api.airtable.com/v0/apphZGgDhpEPZGSgI/${this.day}?api_key=keyb5bZMwjL3cHJ3q`, {
                fields: {
                    task: this.options.content,
                },
            });
            this.apiData.push(this.options.content);
            this.$nextTick(() => {
                this.$refs.richTextEditor.clearContent();
            });
        },

        async fetchTasks() {
            const res = await axios.get(`https://api.airtable.com/v0/apphZGgDhpEPZGSgI/${this.day}?api_key=keyb5bZMwjL3cHJ3q`);
            const data = res.data.records.map(record => {
                return record.fields.task;
            });
            this.apiData = data;
        },
        delteTask(task, index) {
            alert('confirm delete...');
            this.apiData.splice(this.apiData.indexOf(task), 1);
        },
    },
    watch: {
        async day() {
            await this.fetchTasks();
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
    padding: 0 15%;
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
