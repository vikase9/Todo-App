<template>
  <div class="task">
    <h2>Today</h2>
    <div class="todo-wrapper">
      <div class="show-task">
        <i class="fas fa-plus plus-icon"></i><span>Show Task</span>
      </div>

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
          :send="send"
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
      apiData: null,
      options: {
        content: "",
        placeholder: "Your Task",
      },
      richTextEditor: "",
    };
  },

  created() {
    axios
      .get(
        "https://api.airtable.com/v0/apphZGgDhpEPZGSgI/today?api_key=keyb5bZMwjL3cHJ3q"
      )
      .then((response) => {
        this.apiData = response.data.records;
        console.log(this.apiData);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    send() {
      if (!this.options.content) {
        alert("Please Add Task");
        return;
      }
      // submitPost
      axios.post(
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
  },
};
</script>

<style lang="scss" scoped>
.task {
  padding: 7rem 2rem;
}
.plus-icon {
  font-size: 16px;
  color: rgb(245, 70, 70);
  padding: 2px;
}
.show-task {
  margin: 14px 0;
}
.show-task:hover {
  cursor: pointer;
}

.show-task span {
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
.tasks {
  margin-top: 10px;
  cursor: pointer;
  font-size: 18px;
}
.rich-text {
  margin-top: 10px;
}
</style>