<template>
    <div class="todo-content">
      <h5 class="page_title">Assidned to you</h5>
    </div>
</template>

<script>
export default {
  layout: "user-sider",
  
};
</script>
<style scoped>
.page_title{
  margin: 0;
  padding: 12px 16px 0px;
  color: #5ca52d;
}
.todo-content{
  width: calc(100vw - 290px);
  flex-shrink: 100;
}
</style>

