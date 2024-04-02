<script setup lang="ts">
import { ref } from "vue";
import TweetPostForm from "./TweetPostForm.vue";

const tweets = ref([
  {
    id: 0,
    description: 'Hello, world!'
  },
  {
    id: 1,
    description: 'this is the second tweet'
  }
])
const inputtingDescription = ref<string>('')

const postTweet = () => {
  const tweet = { id: Math.random(), description: inputtingDescription.value }
  tweets.value.push(tweet)
  inputtingDescription.value = ""
}

const deleteTweet = (id: number) => {
  tweets.value = tweets.value.filter(t => t.id !== id)
}

</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <TweetPostForm />
    <div class="tweet-container">
      <p v-if="tweets.length <= 0">No tweets have been added</p>
      <ul>
        <TweetList />
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

input {
  margin-bottom: 16px;
}
</style>