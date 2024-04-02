<script setup lang="ts">
import { defineProps } from "vue";
type Tweet = {
  id: number,
  description: string
}

type Props = {
  tweets: Tweet[]
}

const deleteTweet = (id: number) => {
emit('delete-tweet')
}

defineProps<Props>()
const emit = defineEmits(['delete-tweet'])

</script>

<template>
  <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
    <span>{{ tweet.description }}</span>
    <button @click="deleteTweet(tweet.id)" class="delete-button">delete</button>
  </li>
</template>

<style scoped>
.tweet-list {
  list-style: none;
  margin-bottom: 12px;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  background-color: aqua;
  padding: 8px 20px;
  width: 300px;
}

.delete-button {
  color: #fff;
  font-weight: bold;
  background-color: #c28c4f;
  border-radius: 2px;
  border: none;
  width: 60px;
  height: 22px;
  margin-top: 8px;
}

.delete-button:hover {
  background-color: #b86a10;
}

</style>