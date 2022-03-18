<template>
  <rm-card class="character-card">
    <character-card-status-tag
        class="character-card__tag"
      :status="character.status"
    />
    <character-card-avatar :src="character.avatar" />
    <character-card-content
        :name="character.name"
        :status="character.status"
        :location="character.location"
        :episode-count="character.episodeCount"
        :gender="character.gender"
    />
  </rm-card>
</template>

<script lang="ts" setup>
import Character from "@/modules/Search/models/Inputs/Character";
import RmCard from '@/Common/components/Cards/RmCard.vue'
import CharacterCardContent from "@/modules/Search/components/CharacterCard/CharacterCardContent.vue";
import CharacterCardAvatar from "@/modules/Search/components/CharacterCard/CharacterCardAvatar.vue";
import CharacterCardStatusTag from "@/modules/Search/components/CharacterCard/CharacterCardStatusTag.vue";

defineProps({
  character: Character
})
</script>

<style scoped lang="scss">
.character-card {
  display: flex;
  flex-direction: column;
  border-radius: $radius;
  background: white;
  box-shadow: 0 7px 14px rgb(0 0 0 / 4%);
  border: 1px solid $grey-light;
  width: 300px;
  position: relative;
  cursor: pointer;

  @media screen and (min-width: $sm) {
    width: auto
  }
}
</style>

<style lang="scss">
.character-card {
  &__tag {
    position: absolute;
    top: 20px;
    left: 20px;
  }
}
</style>
