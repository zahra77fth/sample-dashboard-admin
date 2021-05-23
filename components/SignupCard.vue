<template>
    <v-container class="justify-center">
        <v-card >
                <v-card-title class="justify-center welcome">Create Account</v-card-title>
                <v-card-subtitle class="text-center">Let's build amazing products</v-card-subtitle>
                 <v-card-text>
                    <v-form>  
                <v-text-field
                    label="Full name"
                    outlined
                 ></v-text-field>         
                <v-text-field
                    label="Email"
                    outlined
                 ></v-text-field>
               <v-text-field
                    label="Password"
                    outlined
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]"
                    :type="show ? 'text' : ''"
                     @click:append="show = !show"
                 ></v-text-field>
                 
                <v-btn
                    color="primary"
                    elevation="2"
                    block
                     x-large
                >create account</v-btn>
                <div class="caption">
                    OR SIGN UP WITH
                </div>
                <v-btn
                    class="btn-margin"
                    elevation="2"
                    block
                     x-large
                >
                <v-icon
                    right
                    dark
                        >
                 mdi-google
                </v-icon>  Google</v-btn>
                <v-btn
                    class="btn-margin"
                    elevation="2"
                    block
                     x-large
                ><v-icon
                    right
                    dark
                        >
                        mdi-facebook  
      </v-icon>
      facebook
      </v-btn>
                <div class="text-center"> 
                <a href="/auth/forgot-password" class="text-center"> Forgot password? </a>
                </div>
        </v-form>
        </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
  import {
    mdiGoogle,
    mdiFacebook,
  } from '@mdi/js'

  export default {
    data: () => ({
      icons: {
        mdiGoogle,
        mdiFacebook,
      },
    }),

    data () {
      return {
        show: false,
        password: '',
                rules: {
          required: value => !!value || 'Required.',
                }
      }
    },
  }
</script>
<style scoped>
.input{
    background-color: white !important;
    }
.welcome{
        font-weight: 100!important;
        letter-spacing: .0073529412em!important;
        font-size: 2.125rem!important;
        padding: 16px;
        margin-bottom: 16px;
         font-family: Quicksand,sans-serif!important;
}
.text-center{
        text-align: center!important;
}
.v-card{
    max-width: 480px !important;
    justify-content: center;
}
.container{
    padding: 0px;
    width: 480px !important;
}
.row{
    width: 100% !important;
    margin: 0px !important;
    justify-content: space-around !important;
}
.v-form{
    max-width: 437px !important;
    justify-content: center !important;
    justify-items: center !important;
}
.caption{
    font-size: .75rem!important;
    text-align: center;
    margin: 24px;
}
.v-application .primary {
    background-color: #0096c7 !important;
    border-color: #0096c7 !important;
}
.btn-margin{
    margin-bottom: 16px;
    background-color: #63ccff !important;
}

</style>