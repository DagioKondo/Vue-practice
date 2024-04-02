<script setup lang="ts">

</script>

<template>
  <li v-for="person in persons" :key="person.id" class="person-list">
    <span>{{ person.name }}</span>
    <span>age: {{ person.age }}</span>
    <button>
      <span>delete</span>
    </button>
  </li>
</template>

<style scoped>
</style>