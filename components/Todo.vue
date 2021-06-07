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
                    <button @click='sub'>ADD</button>
                </template>
            </v-text-field>
        <ul class="list-of-todos" style="list-style-type:none;">
            <li class="todo" v-for="(todo, index) in todos" :key="todo"><button href="#" class="btn__circle" @click="RemoveTodo(index)"></button>{{ todo }}</li>
        </ul>
        </v-form>
    </v-app>
</template>

<script>

export default{
computed:{
    todos(){
         return (this.$store.state.todos);
          }

},
mounted(){
    
},
 methods:{
     sub(){
         if(this.todo){
             this.$store.commit("ADD_TODO",this.todo);
             this.todo = '';
         }
     },
     RemoveTodo(index){
       this.todos.splice(index, 1);
     },
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
    }
}
.btn__circle{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: aqua;
}
</style>