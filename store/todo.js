export const state = () => ({
    todos: []
  })
  
export const mutations = {
    ADD_TO_TODO(state, text) {
      state.todos.push({
        id: state.todos.slice(-1)[0].id + 1,
        title: text,
        completed: false
      })
    },
    COMPLETE_TODO(state, todo){
      todo.completed = !todo.completed
  },
  }

  
  