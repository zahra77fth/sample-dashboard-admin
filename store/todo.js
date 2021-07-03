export const state = () => ({
    todos: [],
    completed_todos: [],
    info: "todo name"
  })
  
  export const mutations = {
    add(state, text) {
      state.todos.push(text)
    },
    remove(state, todo) {
      state.completed_todos.push(todo);
      state.todos.splice(state.todos.indexOf(todo), 1)
    },
    addAgain(state, todo) {
      state.todos.push(todo)
      state.completed_todos.splice(state.completed_todos.indexOf(todo), 1)
    },
    showInfo(state, todo_name){
      state.info = todo_name;
    }
  }
  
  