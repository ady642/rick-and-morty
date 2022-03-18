<template>
  <div v-if="character" class="character-details-view">
    <div class="character-details-view__left column">
      <arrow-back @click="goToCharacterListView()"/>
      <character-details-avatar
          :src="character.avatar"
      />
      <episode-label
        :episode-count="character.episodeCount"
      />
    </div>
    <div class="character-details-view__right column">
      <main-title
          :title="character.name"
      />
      <gender-label :gender="character.gender" />
      <location-label :location="character.location" />
      <character-card-status-tag
          :status="character.status"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import useSearchStore from "@/modules/Search/store/helpers";
import {computed, onMounted, ref} from "vue";
import ArrowBack from "@/Common/components/ArrowBacks/ArrowBack.vue";
import useSearchNavigator from "@/modules/Search/navigator/useSearchNavigator";
import CharacterCardStatusTag from "@/modules/Search/components/CharacterCard/CharacterCardStatusTag.vue";
import CharacterDetailsAvatar from "@/modules/Search/components/Avatars/CharacterDetailsAvatar.vue";
import MainTitle from "@/Common/components/Titles/MainTitle.vue";
import GenderLabel from "@/modules/Search/components/Labels/GenderLabel.vue";
import LocationLabel from "@/modules/Search/components/Labels/LocationLabel.vue";
import EpisodeLabel from "@/modules/Search/components/Labels/EpisodeLabel.vue";

const { characters, fetchCharacter } = useSearchStore()
const { goToCharacterListView } = useSearchNavigator()

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const numberId = computed(() => parseInt(props.id, 10))

const character = ref(characters().findByID(numberId.value))

onMounted(async () => {
  if(character.value) {
    return
  }

  await fetchCharacter(numberId.value)
  character.value = characters().findByID(numberId.value)
})
</script>

<style lang="scss" scoped>
.character-details-view {
  display: grid;
  grid-template-areas: 'left right right right';
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  &__left {
    grid-area: left;
  }
  &__right {
    grid-area: right;
  }

  .column {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }
}
</style>
