<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo" class="shadow">
        {{ todo }}
        <span class="removeBtn" @click="deleteToDo">
          <font-awesome-icon
            icon="fa-solid fa-trash-arrow-up"
            class="deleteBtn"
          />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  data: function() {
    return {
      todos: []
    };
  },
  methods: {
    deleteToDo: function() {
      console.log("hi");
    }
  },
  created: function() {
    if (localStorage.length > 0) {
      console.log(localStorage);
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todos.push(localStorage.key(i));
        }
      }
    }
  }
};
</script>

<style>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
  justify-content: space-between;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  color: #de4343;
}
</style>
