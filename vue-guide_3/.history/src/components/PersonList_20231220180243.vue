<script setup lang="ts">
import { Person } from './Persons.vue'

type Props = {
  persons: Person[]
}

defineProps<Props>()
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