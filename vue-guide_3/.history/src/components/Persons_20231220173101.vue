<script setup lang="ts">
import PersonList from './PersonList.vue';
import PersonPostForm from './PersonPostForm.vue';


</script>

<template>
<div class="container">
  <PersonPostForm />
  <div class="list-container">
    <ul>
      <PersonList />
    </ul>
  </div>
</div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>