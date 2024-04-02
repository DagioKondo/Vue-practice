<script setup lang="ts">
import { ref } from "vue";

const isActiveButton = ref<string>('')
const onClick = (buttonType: string) => {
  isActiveButton.value = buttonType
}

</script>

<template>
  <ul>
    <li>
      <button>Bad</button>
    </li>
    <li>
      <button>Average</button>
    </li>
    <li>
      <button>Great</button>
    </li>
  </ul>
</template>

<style scoped>

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border:  1px solid gray;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

</style>