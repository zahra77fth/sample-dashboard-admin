export const state = () => ({
    todos: [],
    completed_todos: []
  })
  
  export const mutations = {
    add(state, text) {
      state.todos.push(text)
    },
    remove(state, { todo }) {
      state.completed_todos.push(todo);
      state.todos.splice(state.todos.indexOf(todo), 1)
    },
  }
  
  