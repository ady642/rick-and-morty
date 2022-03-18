<template>
  <h1 class="main-title">
    {{ title }}
  </h1>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.main-title {

}
</style>
