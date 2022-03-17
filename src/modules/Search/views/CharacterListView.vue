<template>
  <h1 class="character-list__title">
    {{ $t('character.count', characterTotalCount()) }}
  </h1>
  <character-filters
    @filters-change="handleFiltersChange"
  />
  <div class="character-list">
    <character-card
      v-for="character in characters().collection"
      :key="character.id"
      :character="character"
    />
  </div>
</template>

<script lang="ts" setup>
import CharacterCard from '@/modules/Search/components/CharacterCard/CharacterCard.vue'
import useSearchStore from "@/modules/Search/store/helpers";
import {useStore} from "vuex";
import {onMounted} from "vue";
import CharacterFilters from "@/modules/Search/components/CharacterFilters/CharacterFilters.vue";
import CharactersFilters from "@/modules/Search/models/Query/CharactersFilters";

const store = useStore()
const { fetchCharacters, characters, characterTotalCount, setFilters } = useSearchStore(store)

const handleFiltersChange = async (filters: CharactersFilters) => {
  await setFilters(filters)
  await fetchCharacters()
}

onMounted(async () => {
  await fetchCharacters()
})
</script>

<style lang="scss" scoped>
.character-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 25px;

  &__title {
    font-size: $main-title;
    margin: 15px 0;
  }
}
</style>
