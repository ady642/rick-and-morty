<template>
    <span class="episode-label">
      <camera-icon class="episode-label__icon" />
      {{ $t('character.episodes', episodeCount) }}
    </span>
</template>

<script lang="ts" setup>
import CameraIcon from "@/Common/components/Icons/CameraIcon.vue";

defineProps({
  episodeCount: {
    type: Number,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.episode-label {
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-weight: normal;
  font-size: $subtitle;

  &__icon {
    padding: 6px;
    border-radius: $sm-radius;
    background: $grey-light;
    color: black;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
