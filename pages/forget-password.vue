<template>
  <div class="ground">
    <ForgetPasswordCard />
    <div class="register-link">
      <NuxtLink to="/login">Back to sign In</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: "AdminSider",
};
</script>
<style scoped>
.ground {
  display: flex;
  flex-direction: column;
}
.register-link {
  margin-top: 48px;
  margin-bottom: 48px;
}
</style>
