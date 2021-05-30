<template>
  <v-app>
    <div class="content">
        <div class="navbar">
            <div class="navbar_menu-icon">
            <v-icon light>mdi-menu-light</v-icon>
            To Do
            </div>
            <v-form class="todo">
                    <v-btn small> <v-icon dark right>
                    mdi-magnify 
                    </v-icon>
                    <v-text-field
                        label=""
                    ></v-text-field>
                    </v-btn>
                <div class="navbar_right-icons">
                
                </div>
            </v-form>
            <div class="navbar_user-info">

            </div>
        </div>    
        <div class="page-content">
            <div class="sider" >
                <div class="sider_header"></div>
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
.ground{

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
.v-btn{
    opacity: 80%;
    width: 400px;
}
.v-icon{
    margin: 0 !important;
}
.v-input__slot{
    border: 0 !important;

}
</style>