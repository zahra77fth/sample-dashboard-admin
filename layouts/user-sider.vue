<template>
  <v-app>
    <div class="content">
      <div class="page-content">
        <Navbar />
        <Sider />
        <div class="ground">
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
.backgroundLines {
    margin: 0 24px;
    flex: 1;
    background: linear-gradient(180deg, white, white 52px, #e5e5e5 52px, #e5e5e5 52px);
    background-image: linear-gradient(white, white 52px, rgb(229, 229, 229) 52px, rgb(229, 229, 229) 52px);
    background-position-x: initial;
    background-position-y: initial;
    background-size: 100% 53px;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    background-size: 100% 53px;
    box-shadow: inset 0 1px 0 0 #e5e5e5;
}
</style>