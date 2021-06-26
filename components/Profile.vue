<template>
    <v-card 
    class="card_profile mx-auto"
    max-width="344"
    outlined
  >
  <div class="text-overline mb-4">
          Axon
      <v-btn
        rounded
        text
      >
        Sign out
      </v-btn>
        </div>
    <v-list-item three-line>
        <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h6 mb-1">
          afagh fth
        </v-list-item-title>
        <v-list-item-subtitle>zhr77fth@gmail.com</v-list-item-subtitle>
        <v-list-item-subtitle><NuxtLink to="">my axon account</NuxtLink></v-list-item-subtitle>
        <v-list-item-subtitle><NuxtLink to="">my profile</NuxtLink></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  

    </v-card>
</template>
<style scoped lang="scss">
.card_profile {
    position: fixed;
    right: 0;
    top: 48px;
    z-index: 1;
    display: inherit;
}
.text-overline{
  padding-left: 20px;
  margin: 0 !important;
  display: flex;
  justify-content: space-between;
}
</style>