<template>
        <div class="contaier">
            <div class="navbar">
                <div class="navbar_menu-icon ">
                    <button class="icon-btn"><v-icon light class="icon_color icon_">mdi-dots-grid</v-icon></button><p style="padding: 0 0 0 8px">To Do</p>
                </div>
                <v-form class="todo">
                    <v-btn class="search-btn" small> <v-icon right>
                        mdi-magnify 
                        </v-icon>
                        <v-text-field
                            label=""
                        >
                            <template v-slot:progress>
                                <v-progress-linear
                                absolute
                                height="0"
                                ></v-progress-linear>
                                </template>
                        </v-text-field>
                    </v-btn>
                </v-form>
                <div class="navbar_right-icons">
                    <button class="icon-btn"><v-icon class="icon_color">mdi-cog-outline</v-icon></button>
                    <button class="icon-btn"><v-icon class="icon_color">mdi-help</v-icon></button>
                    <button class="icon-btn"><v-icon class="icon_color">mdi-cog-outline</v-icon></button>
                    <button class="info-btn" @click="visible = !visible"><div class="info_icon">AF</div></button>
                </div>
            </div>
            <Profile v-if="visible"></Profile>
        </div>
</template>
<script>
export default {
     data() {
       return{
            visible : false
       }
  },

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
    padding: 0 16px 0 0 ;
}
.v-input__slot{
    border-bottom: 0 !important;
    width: 0 !important;
}
.v-input__slot::after{
    border-bottom: 0 !important;
    width: 0 !important;
}
.icon_color{
  color: #f4f4f4;
}
.icon-btn,.info-btn{
    width: 48px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background-color: #013f72;
    }
}
.icon-btn:focus{
        background-color: white;
        .icon_color{
            color: black;
        }
    }
.navbar_right-icons ,.navbar_menu-icon{
    display: flex;
    flex-direction: row;
    height: 48px;
    text-align: center;
    vertical-align: middle;
    line-height: 48px;
}
.info_icon{
    width: 32px;
    height: 32px;
    border-radius: 25px;
    border-style: solid;
    border-color: white;
    border-width: 1px;
    text-align: center;
    vertical-align: middle;
    line-height: 32px;
}
.v-text-field{
    margin-left: 10px !important;
}
.search-btn{
    opacity: 75%;
    width: 400px;
    height: 32px !important;
    &:active{
    background-color: #f4f4f4 !important;

    }
}
.v-icon{
    margin: 0 !important;
}
.v-input__slot{
    border: 0 !important;
}
</style>