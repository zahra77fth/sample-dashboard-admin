<template>
    <v-container class="justify-center">
        <v-card >
                <v-card-title class="justify-center title">Create Account</v-card-title>
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
<style scoped lang="scss">
@import "../assets/form.scss";
</style>