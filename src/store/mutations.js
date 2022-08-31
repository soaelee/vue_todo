const addToDo = (state, todo) => {
  const obj = { completed: false, item: todo };
  localStorage.setItem(todo, JSON.stringify(obj));
  state.todos.push(obj);
};
const removeToDo = (state, { todo, index }) => {
  state.todos.splice(index, 1);
  localStorage.removeItem(todo);
};
const toggleToDo = (state, { todo, index }) => {
  const newTodo = { ...todo, completed: !todo.completed };
  state.todos.splice(index, 1, newTodo);
  localStorage.setItem(todo.item, JSON.stringify(newTodo));
};
const clearToDos = state => {
  state.todos = [];
  localStorage.clear();
};

export { addToDo, removeToDo, toggleToDo, clearToDos };
