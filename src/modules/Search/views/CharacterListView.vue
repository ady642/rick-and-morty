<template>
  <h1 class="character-list__title">
    {{ $t('character.count', characterTotalCount()) }}
  </h1>
  <character-filters
    @filters-change="handleFiltersChange"
  />
  <span v-if="characters().isLoading">
    Loading...
  </span>
  <div v-else class="character-list">
    <character-card
        v-for="character in characters().collection"
        :key="character.id"
        :character="character"
        @click="goToCharacterDetailsView(character.id)"
    />
  </div>
  <rm-pagination
    :current-page="paginator().currentPage"
    :items-per-page="paginator().itemsPerPage"
    :total-characters="paginator().totalCharacters"
    @update:modelValue="handlePageChange"
  />
</template>

<script lang="ts" setup>
import CharacterCard from '@/modules/Search/components/CharacterCard/CharacterCard.vue'
import useSearchStore from "@/modules/Search/store/helpers";
import {onMounted} from "vue";
import CharacterFilters from "@/modules/Search/components/CharacterFilters/CharacterFilters.vue";
import CharactersFilters from "@/modules/Search/models/Query/CharactersFilters";
import RmPagination from "@/Common/components/Paginations/RmPagination.vue";
import useSearchNavigator from "@/modules/Search/navigator/useSearchNavigator";

const { fetchCharacters, characters, characterTotalCount, setFilters, setCurrentPage, paginator } = useSearchStore()

const { goToCharacterDetailsView } = useSearchNavigator()

const handleFiltersChange = async (filters: CharactersFilters) => {
  await setCurrentPage(1)
  await setFilters(filters)
  await fetchCharacters()
}

const handlePageChange = async(page: number) => {
  await setCurrentPage(page)
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
