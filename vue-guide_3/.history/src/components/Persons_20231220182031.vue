<script setup lang="ts">
import { ref,Ref } from "vue";
import PersonList from './PersonList.vue';
import PersonPostForm from './PersonPostForm.vue';

export type Person = {
  id: number,
  name: string,
  age: number
}

const persons: Ref<Person[]> = ref([{ id: 0, name: 'John', age: 24 }, { id: 1, name: 'Mike', age: 26 }])
const registerPerson = (person: Person) => {
  persons.value.push(person)
}

const deltePerson = (id: number) => {

}

</script>

<template>
  <div class="container">
    <PersonPostForm @register="registerPerson"/>
    <div class="list-container">
      <ul>
        <PersonList :persons="persons" @delte="deletePerson"/>
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