<template>
    <div class="todo-info">
        <div class="detail-header card">
            <span @click="changeStatus(info)">
                <v-btn text icon class="btn__circle" v-if="!info.completed">
                </v-btn>
                <v-btn text icon class="btn__complete-circle" v-if="info.completed" >
                </v-btn>
            </span>
            <span class="title-status" >
                <div v-if="!editTitle">
                    <v-text-field
                    readonly
                    :value="info.title"
                    @input="updateTitle"
                    solo
                    dense
                    flat >
                        {{info}}
                    </v-text-field>
                </div>
                <div class="edit_border" v-if="editTitle">
                    <v-text-field
                        :value="info.title"
                        @input="updateTitle"
                        solo
                        flat
                        dense
                        >{{info}}
                    </v-text-field>
                </div>
            </span>
        </div>
        <div class="add-to-page card">
            <NuxtLink class="list-link" to="/todo-pages/myday">
                <v-list-item link >
                    <v-list-item-icon>
                        <v-icon>mdi-weather-sunny</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Add to My Day</v-list-item-title>
                </v-list-item>
            </NuxtLink>
        </div>
        <div class="calender card">
            <NuxtLink class="list-link" to="/todo-pages/important">
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-bell-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Remind me</v-list-item-title>
                </v-list-item>
            </NuxtLink>
            <NuxtLink class="list-link" to="/todo-pages/planned">
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-calendar-month-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Add due date</v-list-item-title>
                </v-list-item>
            </NuxtLink>
            <NuxtLink class="list-link" to="/todo-pages/assigned_to_me">
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-calendar-refresh-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Repeat</v-list-item-title>
                </v-list-item>
            </NuxtLink>
        </div>
        <div class="category card">
            <NuxtLink class="list-link" to="/todo-pages/assigned_to_me">
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-tag-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Pick a category</v-list-item-title>
                </v-list-item>
            </NuxtLink>
        </div>
        <div class="file card">
            <NuxtLink class="list-link" to="/todo-pages/assigned_to_me">
                <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-paperclip</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Add file</v-list-item-title>
                </v-list-item>
            </NuxtLink>
        </div>
        <div class="note card">
            <v-textarea
                outlined
            ></v-textarea>
        </div>
    </div>
</template>
<script>

export default{
      data() {
    return {
    rating: 1,
    editTitle: true
    }
  },
computed:{
    info(){
         return this.$store.state.todo.todoInfo;
          },
    
    
},
methods: {
    updateTitle (text) {
      console.log(text);
        this.$store.commit('todo/UPDATE_TITLE', text)
    },
    changeStatus(todo){
        this.$store.dispatch("todo/changeStatus",todo);
    },
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
.v-input_control{
    height: 70px !important;
}
.card{
    width: 100%;
    margin: 5px 10px 5px 10px;
    background-color: #fff;
}
.title{
    height: 48px;
    margin:  0 16px 0 18px;
    font-size:16px !important;

}
.detail-header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 16px;
}
.input:active{
     border: 1px solid rgb(0, 0, 0) !important;
}
.btn__circle{
    background-color:#fff;
    border:1px solid rgb(24, 105, 255);    
    height:20px !important;
    width: 20px !important;
    padding: 0 !important;
    margin-right: 10px;
    border-radius:50%;
    margin-bottom: 24px;
}
.btn__complete-circle{
    background-color:rgb(24, 105, 255);
    border:1px solid rgb(24, 105, 255);    
    height:20px;
    width: 20px;
    margin-right: 10px;
    border-radius:50%;
    margin-bottom: 24px;
}
.note{
    height: 150px;
}
.list-link{
  text-decoration: none !important;
}
</style>