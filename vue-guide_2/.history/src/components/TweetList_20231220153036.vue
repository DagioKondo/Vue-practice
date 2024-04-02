<script setup lang="ts">
import { defineProps } from "vue";
type Tweet = {
  id: number,
  description: string
}

type Props = {
  tweets: Tweet[]
}

const tweets: any = []

const deleteTweet = (id: number) => {

}

</script>

<template>
  <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
    <span>{{ tweet.description }}</span>
    <button @click="deleteTweet(tweet.id)" class="delete-button">delete</button>
  </li>
</template>

<style scoped></style>