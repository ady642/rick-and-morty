<template>
  <div class="character-card__avatar">
    <rm-image class="character-card__avatar__image" :src="src" alt="character-image" />
  </div>
</template>

<script lang="ts" setup>
import RmImage from "@/Common/components/Images/RmImage.vue";

defineProps({
  src: { type: String, required: true}
})
</script>

<style lang="scss" scoped>
.character-card__avatar {
  overflow: hidden;
  border-top-left-radius: $radius;
  border-top-right-radius: $radius;
  height: 40%;
}
</style>
