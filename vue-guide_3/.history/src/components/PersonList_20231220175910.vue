<script setup lang="ts">

</script>

<template>
  <li v-for="person in persons" :key="person.id" class="person-list">
    <span>{{ person.name }}</span>
    <span>{{ person.age }}</span>
  </li>
</template>

<style scoped>
</style>