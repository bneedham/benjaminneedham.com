<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h2 class="green">{{ msg }}</h2>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 400;
}
</style>
