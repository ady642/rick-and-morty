<template>
    <rm-image class="character-details__avatar" :src="src" alt="character-image" />
</template>

<script lang="ts" setup>
import RmImage from "@/Common/components/Images/RmImage.vue";

defineProps({
  src: { type: String, required: true}
})
</script>

<style lang="scss" scoped>
.character-details__avatar {
  width: min-content;
  overflow: hidden;
  border-radius: $radius;
}
</style>
