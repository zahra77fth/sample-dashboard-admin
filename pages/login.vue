<template>
<div class="ground">
    <LoginCard />
    <div class="register-link"> 
        Don't have an account? <NuxtLink to="/signin">Create one here</NuxtLink>
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
}
</style>