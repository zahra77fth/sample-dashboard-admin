<template>
    <v-container class="justify-center">
        <v-card >
                <v-card-title class="justify-center title">Welcome</v-card-title>
                <v-card-subtitle class="text-center">Sign in to your account</v-card-subtitle>
                 <v-card-text>
                    <v-form>           
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
                    to="/todo-pages/tasks"
                    color="primary"
                    elevation="2"
                    block
                     x-large
                >Sign in</v-btn>
                <div class="caption">
                    OR SIGN IN WITH
                </div>
                <v-btn
                    class="btn-margin"
                    elevation="2"
                    block
                     x-large
                >Google</v-btn>
                <v-btn
                    class="btn-margin"
                    elevation="2"
                    block
                     x-large
                >facebook</v-btn>
                <div class="text-center"> 
                <NuxtLink to="/forget-password" class="text-center"> Forget password? </NuxtLink>
                </div>
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
<style scoped lang="scss">
@import "../assets/form.scss";
</style>