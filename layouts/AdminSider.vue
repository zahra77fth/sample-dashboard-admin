<template>
  <v-app>
      <div class="content">
          <div class="sider" >
              <div class="Axon-text">
                  <div class="title">Axon Admid Pro</div>
                  <div class="welcome-text">Welcome! Let's build amazing things together.</div>
                  <div class="back-btn"><a><v-btn elevation="2" small  color="white">Take me back</v-btn></a></div>
              </div>
            <img class="pic" src="../assets/signin-illustration.svg">
    </div>
    <div class="ground">
        <Nuxt />
    </div>
      </div>
  </v-app>
</template>

<script>
export default {
 
}
</script>
<style scoped>
.content{
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.sider{
    height: 100%;
    width: 420px !important;
    position: relative;
    padding: 0 16px 0 16px;
    margin: 0 8px 0 8px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
}
@media only screen and (max-width: 960px)  {    
    .sider {
        display: none;
    }
}
.Axon-text{
padding: 16px;
margin-top: 80px;
}
.title{
    text-align: center;
    color: #0096c7;
    font-weight: 600;
    font-size: 2.5rem!important;
    line-height: 3.125rem;
    letter-spacing: normal!important;
    font-family: Quicksand,sans-serif!important;
}
.welcome-text{
    font-size: 1.16rem!important;
    font-weight: 800;
    letter-spacing: .0125em!important;
    text-align: center;
    margin: 16px 0 16px 0;
}
.back-btn{
    text-align: center;
    margin:32px 0 32px 0;
}
.pic{
    width: 100%;
    height: 248px;
}

.ground{
    flex-grow: 1!important;
    padding: 32px;
    background-color: #f2f5f8;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>