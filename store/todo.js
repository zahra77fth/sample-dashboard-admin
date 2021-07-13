export const state = () => ({
  completed: [],
  notCompleted: [],
  todos: [],
  infoVisiblity: false,
  todoInfo: {},
  myDay: [],
  important: {},
})

export const mutations = {
  ADD_TO_TODO(state, text) {
    state.notCompleted.push(
      {
        id: state.todos.length + 1,
        title: text,
        completed: false,
        isMyDay: false,
        important: false
      }
    )
    state.todos.push(
      {
        id: state.todos.length + 1,
        title: text,
        completed: false,
        myDay: false,
        important: false
      }
    )
  },
  TODO_STATUS(state, todo) {
    if ((state.todos[(todo.id) - 1].completed)) {
      state.todos[(todo.id) - 1].completed = false
      state.completed.splice((state.completed.indexOf(todo)), 1)
      state.notCompleted.push(state.todos[(todo.id) - 1])

    } else {
      state.todos[(todo.id) - 1].completed = true
      state.notCompleted.splice((state.notCompleted.indexOf(todo)), 1)
      state.completed.push(state.todos[(todo.id) - 1])
    }
  },
  INFO_VISIBLITY(state, todoId) {
    state.todoInfo = state.todos[todoId - 1]
    state.infoVisiblity = true

  },
  UPDATE_TITLE(state, text) {
    if (!(state.todoInfo.completed)){
      for (let i = 0; i < state.notCompleted.length; i++) {
        if(state.notCompleted[i].id == state.todoInfo.id){
          state.notCompleted[i].title = text
          state.todos[state.todoInfo.id -1].title = text
        }
      }
    }else{
      state.todos[state.todoInfo.id -1].title = text
    }
  },
  HIDE_INFO(state){
    state.infoVisiblity = false
  },
  ADD_MY_DAY(state,todo){
    if (!(todos.isMyDay)){
      state.todos[todo.id - 1].isMyDay = true;
      state.myDay.push(state.todos[todo.id - 1])
        }
      }
    }
// export const getters = {
//   notCompleted: state => {
//     return state.todos.filter(todo => !todo.completed);
//   },
//   completed: state => {
//     return state.todos.filter(todo => todo.completed);
//   }
// }
export const actions = {
  add(vuexContext, todo) {
    vuexContext.commit('ADD_TO_TODO', todo);
  },
  changeStatus(vuexContext,id){
    vuexContext.commit("TODO_STATUS",id);
},
  showInfo(vuexContext,todo){
  vuexContext.commit("INFO_VISIBLITY",todo);
},
  hideInfo(vuexContext){
    vuexContext.commit("HIDE_INFO");
  }
}