<template>
  <v-app>
    <div class="content">
        <div class="navbar">
            <div class="navbar_menu-icon">
            <v-btn class="menu-btn" color="primary"><v-icon light>mdi-dots-grid</v-icon></v-btn>
            To Do
            </div>
            <v-form class="todo">
                    <v-btn class="search-btn" small> <v-icon dark right>
                    mdi-magnify 
                    </v-icon>
                    <v-text-field
                        label=""
                    ></v-text-field>
                    </v-btn>
                <div class="navbar_right-icons">
                <v-icon>mdi-cog-outline</v-icon>
                </div>
            </v-form>
            <div class="navbar_user-info">

            </div>
        </div>    
        <div class="page-content">
            <div class="sider" >
                <div class="sider_header"></div>
      <v-navigation-drawer
        permanent
      >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-weather-sunny</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Day</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Important</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-calendar-month-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Planned</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Asigned to you</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-home-variant-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Tasks</v-list-item-title>
          </v-list-item>
      </v-navigation-drawer>
            </div>
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
.navbar{
    height: 48px;
    background-color: #0078D7;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    color: #f4f4f4;
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
.sider{
height: 100%;
width: 290px;
background-color: #f4f4f4;
}
@media (max-width: 1010px){
.sider {
    width: 50px;
}}
.v-navigation-drawer{
    height: 100%;
    width: 290px !important;
    background-color: #f4f4f4;
}
@media (max-width: 1010px){
.v-navigation-drawer {
    width: 50px;
}}   

.sider_menu{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    color: #707d88 !important;
}
.todo{
    width: 480px;
    height: 100%;
    display: flex;
    justify-content: center;
}
.v-text-field{
    margin-left: 10px !important;
}
.search-btn{
    opacity: 80%;
    width: 400px;
}
.v-icon{
    margin: 0 !important;
}
.v-input__slot{
    border: 0 !important;
}
.menu-btn{
    width: 50px;
    background-color: #0078D7 !important;
}
</style>