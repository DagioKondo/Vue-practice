<script setup lang="ts">
</script>

<template>
  <div class="form-container">
    <input v-model="inputtingDescription" />
    <button class="save-button" @click="postTweet()">post</button>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  padding: 24px 0;
  width: 60%;
  margin-bottom: 12px;
  border-radius: 4px;
}

</style>