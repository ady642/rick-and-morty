<template>
  <rm-card class="character-card">
    <rm-image class="character-card__avatar" :src="character.image" alt="character-image" />
    TEST TEST
  </rm-card>
</template>

<script lang="ts" setup>
import Character from "@/modules/Search/models/Inputs/Character";
import RmCard from '@/Common/components/Cards/RmCard.vue'
import RmImage from "@/Common/components/Images/RmImage.vue";

defineProps({
  character: Character
})
</script>

<style scoped lang="scss">
.character-card {
  display: flex;
  flex-direction: column;
  border-radius: 20px;

  &__avatar {
    border-radius: 20px;
    height: 40%
  }
}
</style>
