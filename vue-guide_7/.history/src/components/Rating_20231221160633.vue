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
      <button :class="{active: isActiveButton === 'bad'}" @click="onClick('bad')" >Bad</button>
    </li>
    <li>
      <button :class="{active: isActiveButton === 'average'}" @click="onClick('average')" >Bad</button>
    </li>
    <li>
      <button :class="{active: isActiveButton === 'great'}" @click="onClick('great')" >Bad</button>
    </li>
  </ul>
</template>

<style scoped>

.active {
  color: pink;
}

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