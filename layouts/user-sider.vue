<template>

  <v-app>
    <div class="content">
      <div class="page-content">
        <Navbar />
          <div class="ground">
            <Sider></Sider>
            <Nuxt />
            <TodoInfo v-if="todoInfoVisible"></TodoInfo>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default{
computed:{
    todoInfoVisible(){
        return this.$store.state.todo.infoVisiblity;
          },
    },

}
</script>
<style scoped lang="scss">
@import "../assets/_variables.scss";
.ground{
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: map-get($colors, --v-surface-base);
  @include flex($justifyContent:left, $alignItems:stretch);
    align-content: stretch;
}

.Sider{
height: 100%;
width: 290px;
background-color: #f4f4f4;
}
@include mediaScreen($value:1010px){
        .Sider {
        width: 50px;
    }
}

.TodoInfo{
  width: 360px !important;
  height: 100%;
}
</style>