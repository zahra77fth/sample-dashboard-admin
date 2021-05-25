<template>
    <v-container class="justify-center">
        <v-card >
                <v-card-title class="justify-center title">Forgot Password?</v-card-title>
                <v-card-subtitle class="text-center">Enter your account email address and we will send you a link to reset your password.</v-card-subtitle>
                 <v-card-text>
                    <v-form>  
                <v-text-field
                    label="Full name"
                    outlined
                 ></v-text-field>                        
                <v-btn
                    color="primary"
                    elevation="2"
                    block
                     x-large
                >request password reset</v-btn>
        </v-form>
        </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
  export default {
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
.title{
        font-weight: 100!important;
        letter-spacing: .0073529412em!important;
        font-size: 2.125rem!important;
        padding: 16px;
        margin-bottom: 16px;
         font-family: Quicksand,sans-serif!important;
}
.input{
    background-color: white !important;
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

</style>