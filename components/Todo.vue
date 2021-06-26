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
            <li class="todo" v-for="todo in todos" :key="todo">
                <button class="btn__circle" @click="RemoveTodo(todo)">
                </button>{{ todo }}
                </li>
        </ul>
        
        <ul class="list-of-todos" style="list-style-type:none;">
            <li class="todo" v-for="complete in completed_todos" :key="complete">
                <button class="btn__complete-circle" @click="addToTodo(complete)">
                </button>
               <del> {{ complete }} </del>
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
      todo: '',
      complete:''
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
    
     },RemoveTodo(index){
         this.$store.commit("todo/remove",index)
     },
     addToTodo(complete){
            this.$store.commit("todo/addAgain",complete);
     }
 }
}
</script>

<style scoped lang="scss">
@import "../assets/_variables.scss";
.todo-input{
    width: calc(100vw - 290px);
    padding-right: 32px;
    padding-left: 12px;
}
@include mediaScreen($value:1010px){
    .todo-input {
        width: 100vw;
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