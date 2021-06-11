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
                    <v-btn text @click='sub(todo)'>ADD</v-btn>
                </template>
            </v-text-field>
        <ul class="list-of-todos" style="list-style-type:none;">
            <li class="todo" v-for="(todo, index) in todos" :key="todo">
                <button class="btn__circle" @click="RemoveTodo(index)">
                </button>{{ todo }}
                </li>
        </ul>
        <ul class="list-of-complete-todos" style="list-style-type:none;">
            <li class="todo" v-for="complete in completed_todos" :key="complete">
                {{complete}}
            </li>
        </ul>
        </v-form>
    </v-app>
</template>

<script>

export default{
      data() {
    return {
    rating: 1,
      todo: ''  
    }
  },
computed:{
    todos(){
         return this.$store.state.todo.todos;
          },
    completed_todos(){
        return this.$store.state.todo.completed_todos;
    }

},
mounted(){
    
},
 methods:{
     sub(todo){
         if(todo){
            this.$store.commit("todo/add",this.todo);
            this.todo = '';
         }
    
     },RemoveTodo(todo){
         this.$store.commit("todo/remove",todo)
     }
 }
}
</script>

<style scoped lang="scss">
@import "../assets/_variables.scss";
.todo-input{
    width: calc(100vw - 290px);
    padding-right: 32px;
}
@include mediaScreen($value:1010px){
    .todo-input {
        width: 100vw;
        margin-bottom: 5px;
    }
}
.btn__circle{
    background-color:#fff;
    border:1px solid rgb(24, 105, 255);    
    height:20px;
    width: 20px;
    margin:0 35px 0 35px;
    border-radius:50%;
}
.todo{
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