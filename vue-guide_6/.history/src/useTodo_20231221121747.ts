import { ref } from 'vue'

type Todo = {
  id: number,
  title: string
}

const defaultTodos = [{ id: 0, title: 'first' }, { id: 1, title: 'second' }]
export const todos = ref<Todo[]>(defaultTodos)