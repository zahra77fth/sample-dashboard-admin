<template>
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
</template>
<style lang="scss" scoped>
.sider{
height: 100%;
width: 290px;
background-color: #f4f4f4;
}
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
</style>