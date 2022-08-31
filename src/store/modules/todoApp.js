const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      console.log(localStorage);
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          const value = localStorage.getItem(localStorage.key(i));
          console.log(value);
          arr.push(JSON.parse(value));
        }
      }
    }
    return arr;
  }
};

const state = {
  todos: storage.fetch()
};

const getters = {
  storedTodos(state) {
    return state.todos;
  }
};

const mutations = {
  addToDo(state, todo) {
    const obj = { completed: false, item: todo };
    localStorage.setItem(todo, JSON.stringify(obj));
    state.todos.push(obj);
  },
  removeToDo(state, { todo, index }) {
    state.todos.splice(index, 1);
    localStorage.removeItem(todo);
  },
  toggleToDo(state, { todo, index }) {
    const newTodo = { ...todo, completed: !todo.completed };
    state.todos.splice(index, 1, newTodo);
    localStorage.setItem(todo.item, JSON.stringify(newTodo));
  },
  clearToDos(state) {
    state.todos = [];
    localStorage.clear();
  }
};

export default { state, getters, mutations };
