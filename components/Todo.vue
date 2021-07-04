<template>
    <v-app>
        <v-form class="form-of-todos">
            <v-text-field
                v-model="todo"
                class="todo-input"
                label="Add todo"
                flat
                solo>
                <template #append>
                    <v-btn text @click='addTodo(todo)'>ADD</v-btn>
                </template>
            </v-text-field>
        <ul class="list-of-todos" style="list-style-type:none;">
            <li class="todo" v-for="todo in not_completed_todos" :key="todo">
                <button class="btn__circle" @click="change_todo_status(todo.id)" >
                </button>{{ todo.title }}
                </li>
        </ul>
        
        <ul class="list-of-todos" style="list-style-type:none;">
            <div >
            <li class="todo" v-for="complete in computed_todos" :key="complete">
                <button class="btn__complete-circle" @click="change_todo_status(complete.id)">
                </button>
               <del> {{ complete.title }} </del>
            </li>
            </div>
        </ul>
        </v-form>
    </v-app>
    
</template>

<script>

export default{
      data() {
    return {
      todo: '',
      visible : false
    }
  },
computed:{
    not_completed_todos(){
        return this.$store.state.todo.not_completed_todos;
          },
    computed_todos(){
        return this.$store.state.todo.completed_todos;
    }
    },
methods:{
    addTodo(todo){
        if(todo){
            this.$store.commit("todo/ADD_TO_TODO",this.todo);
            this.todo = '';
        }
    },
    change_todo_status(todo){
         this.$store.commit("todo/TODO_STATUS",todo);
    },
 }
}
</script>

<style scoped lang="scss">

@import "../assets/_variables.scss";
.form-of-todos{
    width: 100%;
}
.todo-input{
    padding-right: 32px;
    padding-left: 12px;
}
@include mediaScreen($value:1010px){
    .todo-input {
        margin-bottom: 5px;
        height: 30px !important;
    }
}
.btn__circle{
    background-color:#fff;
    border:1px solid rgb(24, 105, 255);    
    height:20px;
    width: 20px;
    margin-right: 35px;
    border-radius:50%;
}
.btn__complete-circle{
    background-color:rgb(24, 105, 255);
    border:1px solid rgb(24, 105, 255);    
    height:20px;
    width: 20px;
    margin-right: 35px;
    border-radius:50%;
}
.todo{
    padding-left: 40px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 2px solid rgb(214, 214, 214);
    width: 100%;
}

.list-of-todos{
    padding: 0;
}
</style>