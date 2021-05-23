<template>
<div class="ground">
    <SignupCard />
    <div class="register-link"> 
       Already have an account? <NuxtLink to="/login">Sign In</NuxtLink>
    </div>
</div>
</template>

<script>

export default({
    layout: 'AdminSider'
})
</script>
<style scoped>
.ground{
    display: flex;
    flex-direction: column;
}
.register-link{
    margin-top: 48px; 
    margin-bottom: 48px;
}
</style>