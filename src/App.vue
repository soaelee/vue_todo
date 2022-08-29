<template>
  <div id="app">
    <Header />
    <Input @addToDo="addToDo" />
    <List :todos="todos" @removeToDo="removeToDo" @toggleToDo="toggleToDo" />
    <Footer @clearToDos="clearToDos" />
    <portal-target name="destination" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Input from "./components/Input.vue";
import List from "./components/List.vue";
export default {
  name: "App",
  data: function() {
    return {
      todos: []
    };
  },
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    Header,
    Footer,
    Input,
    List
  },
  created: function() {
    if (localStorage.length > 0) {
      console.log(localStorage);
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          const value = localStorage.getItem(localStorage.key(i));
          console.log(value);
          this.todos.push(JSON.parse(value));
        }
      }
    }
  },
  methods: {
    addToDo: function(todo) {
      const obj = { completed: false, item: todo };
      localStorage.setItem(todo, JSON.stringify(obj));
      this.todos.push(obj);
    },
    removeToDo: function(todo, index) {
      this.todos.splice(index, 1);
      localStorage.removeItem(todo);
    },
    toggleToDo: function(todo, index) {
      const newTodo = { ...todo, completed: !todo.completed };
      this.todos.splice(index, 1, newTodo);
      localStorage.setItem(todo.item, JSON.stringify(newTodo));
    },
    clearToDos: function() {
      this.todos = [];
      localStorage.clear();
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue";
}
body {
  text-align: center;
  background-color: #f6f6f6;
}
ul,
li {
  padding: 0;
  margin: 0;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
