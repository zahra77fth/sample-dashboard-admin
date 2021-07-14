<template>
    <v-container class="justify-center">
        <v-card >
                <v-card-title class="justify-center title">Forgot Password?</v-card-title>
                <v-card-subtitle class="text-center">Enter your account email address and we will send you a link to reset your password.</v-card-subtitle>
                 <v-card-text>
                    <v-form>  
                <v-text-field
                    label="Email"
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
        password: '',
                rules: {
          required: value => !!value || 'Required.',
                }
      }
    },
  }
</script>
<style scoped lang="scss">
@import "../assets/form.scss";
.v-application .primary {
    background-color:  --v-primary-base !important;
    border-color:  --v-primary-base !important;
}
</style>