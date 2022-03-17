<template>
<div class="rm-image__container">
  <img :src="src" :alt="alt"/>
</div>
</template>

<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.rm-image {
  &__container {
    object-fit: cover;

    img {
      width: inherit;
    }
  }
}
</style>
