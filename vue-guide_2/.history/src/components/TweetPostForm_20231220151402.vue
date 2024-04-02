<script setup lang="ts">
</script>

<template>
  <div>
    <input v-model="inputtingDescription" />
    <button class="save-button" @click="postTweet()">post</button>
  </div>
</template>

<style scoped></style>