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
                    <v-btn text @click='add(todo)'>ADD</v-btn>
                </template>
            </v-text-field>
        <ul class="list-of-todos" style="list-style-type:none;" v-if="notCompleted[0] != undefined">
        <h6 style="margin-left:30px">Your tasks</h6>
            <li class="todo" v-for="(todo) in notCompleted" :key="`complete${todo.id}`" @click="showInfo(todo.id)">
                <v-btn text icon class="btn__circle" @click.stop="changeStatus(todo)"  >
                </v-btn>{{ todo.title }}
            </li>
        </ul>
        <ul class="list-of-todos" style="list-style-type:none;" v-if="completed[0] != undefined">
        <h6 style="margin-left:30px">Completed</h6>
            <div>
            <li class="todo" v-for="(complete) in completed" :key="`complete${complete.id}`"  @click="showInfo(complete.id)">
                <v-btn icon class="btn__complete-circle" @click.stop.prevent="changeStatus(complete)">
                </v-btn>
               <del> {{ complete.title }} </del>
            </li>
            </div>
        </ul>
        </v-form>
    </v-app>    
</template>

<script>
import { mapState } from 'vuex'
export default{
      data() {
    return {
      todo: '',
      visible : false
    }
  },
computed:{
    ...mapState('todo',["completed", "notCompleted"]),
    },
methods:{
    add(todo){
    if(todo){
        this.$store.dispatch("todo/add",todo)
        this.todo = ''}
    },
    changeStatus(id){
        this.$store.dispatch("todo/changeStatus",id);
    },
    showInfo(todo){
        this.$store.dispatch("todo/showInfo",todo);
    },
 }
}
</script>

<style scoped lang="scss">
@import "../assets/_variables.scss";
.form-of-todos{
    width: 100%;
    padding-right: 15px;
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
    height:20px !important;
    width: 20px !important;
    padding: 0 !important;
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