<template>
    <div class="todo-info">
        <div class="name-todo card">

        </div>
        <div class="add-to-page card">
            <v-text-field
                class="todo-input"
                v-model="todoTitle"
                flat
                solo>
                {{todoTitle}}
            </v-text-field>
        </div>
        <div class="calender card">

        </div>
        <div class="category card">

        </div>
        <div class="file card">

        </div>
        <div class="note card">

        </div>
    </div>
</template>
<script>

export default{
      data() {
    return {
    rating: 1,
    }
  },
computed:{
    info(){
         return this.$store.state.todo.info;
          }
}
}
</script>

<style lang="scss" scoped>
.todo-info{
    height: 100vh;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    width: 360px;
    box-sizing: border-box;
    padding-right: 16px;
    padding-top: 10px;
}
.card{
    width: 100%;
    height: 80px;
    margin: 5px 10px 5px 10px;
    background-color: #fff;
}
</style>