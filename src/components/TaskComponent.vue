<template>
  <div class="task">
    <h2>Today</h2>
    <div class="todo-wrapper">

      <div class="task-wrapper">
        <div v-for="items in apiData" :key="items.id" class="tasks">
          <div class="form-element">
            <input class="check" type="radio" />
            <label class="check-label radio" for="option-1"> </label>
            {{ items.fields.task }}
          </div>
        </div>

        <RichText
          class="rich-text"
          :options="options"
          :send="submitTask"
          ref="richTextEditor"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { Button, RichText } from "@e9ine/vue_components";
import axios from "axios";

export default {
  name: "Task",
  components: {
    Button,
    RichText,
  },
  data() {
    return {
      seen: false,
      apiData: [],
      options: {
        content: "",
        placeholder: "Your Task",
      },
      richTextEditor: "",
    };
  },

  async mounted() {
    this.apiData = await this.fetchTasks();
  },

  methods: {
    async submitTask() {
      await axios.post(
        "https://api.airtable.com/v0/apphZGgDhpEPZGSgI/today?api_key=keyb5bZMwjL3cHJ3q",
        {
          fields: {
            task: this.options.content,
          },
        }
      );
      this.$nextTick(() => {
        this.$refs.richTextEditor.clearContent();
      });
    },

    async fetchTasks() {
      const res = await axios.get(
        "https://api.airtable.com/v0/apphZGgDhpEPZGSgI/today?api_key=keyb5bZMwjL3cHJ3q"
      );
      const data = await res.data.records;
      return data;
    },
  },
};
</script>

<style lang="scss" scoped>
.task {
  padding: 1rem 1rem;
}
.tasks {
  margin-top: 10px;
  cursor: pointer;
  font-size: 18px;
}
.rich-text {
  margin-top: 10px;
}
</style>