<template>

  <v-app>
    <div class="content">
      <div class="page-content">
        <Navbar />
        <div class="ground">
          <Sider />
          <Nuxt />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
 
}
</script>
<style scoped lang="scss">
@import "../assets/_variables.scss";
.ground{
    height: 100%;
    margin: 0;
    background-color: map-get($colors, --v-surface-base);
@include flex($justifyContent:left, $alignItems:flex-start)
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
.content{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
}
.page-content{
    width: 100%;
    height: 100%;
}

.todo{
    width: 480px;
    height: 100%;
    display: flex;
    justify-content: center;
}
</style>