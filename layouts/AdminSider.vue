<template>
  <v-app>
      <div class="content">
          <div class="sider" >
              <div class="Axon-text">
                  <div class="title text-center">Axon Admid Pro</div>
                  <div class="welcome-text text-center">Welcome! Let's build amazing things together.</div>
                  <div class="back-btn text-center"><a><v-btn elevation="2" small  color="white">Take me back</v-btn></a></div>
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
<style scoped lang="scss">
@import "../assets/_variables.scss";
.content{
    width: 100vw;
    height: 100%;
@include flex($justifyContent:space-between , $alignItems:center)
}
.sider{
    height: 100%;
    width: 420px !important;
    position: relative;
    padding: $boxing16;
    margin: $boxing8;
    background-color: white;
    flex-direction: column;
    flex-wrap: wrap;
    @include flex($justifyContent:space-between , $alignItems:stretch)
}
@include mediaScreen($value:960px){
        .sider {
        display: none;
    }
}
.Axon-text{
padding: 16px;
margin-top: 80px;
top: 0;
}
.title{
    color:map-get($colors, --v-anchor-base);
    font-weight: 600;
    font-size: 2.5rem!important;
    line-height: 3.125rem;
    letter-spacing: normal!important;
    font-family: Quicksand,sans-serif!important;
}
.welcome-text{
    font-size: 1.16rem!important;
    font-weight: 600;
    letter-spacing: .0125em!important;
    margin:16px 0 16px 0;
}
.back-btn{
    margin: 32px;
}
.text-center{
        text-align: center!important;
}
.pic{
    width: 100%;
    height: 248px;
}

.ground{
    flex-grow: 1!important;
    padding: 32px;
    height: 100%;
    background-color: map-get($colors, --v-surface-base);
@include flex($justifyContent:center , $alignItems:center)
}

</style>