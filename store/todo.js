export const state = () => ({
    todos: [],
    completed_todos: [],
    not_completed_todos: []
  })
  
export const mutations = {
    ADD_TO_TODO(state, text) {
      state.todos.push({
        id: state.todos.length,
        title: text,
        completed: false
      })
    },
    TODO_STATUS(state, todo_id){

      if ((state.todos[todo_id].completed) = false) {
        state.not_completed_todos.push(state.todos[todo_id])
      }else{
        state.completed_todos.push(state.todos[todo_id])
      }
  },
  }


  
  