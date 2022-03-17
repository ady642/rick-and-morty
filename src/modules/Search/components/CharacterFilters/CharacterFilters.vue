<template>
  <section class="character-filters">
    <character-search-input
        v-model="filters.name"
    />
    <character-tags-status
        v-model="filters.status"
    />
  </section>
</template>

<script lang="ts" setup>
import CharactersFilters from "@/modules/Search/models/Query/CharactersFilters";
import CharacterSearchInput from "@/modules/Search/components/CharacterFilters/CharacterSearchInput.vue";
import {ref, watch} from "vue";
import useDebounce from "@/Common/composables/useDebounce";
import CharacterTagsStatus from "@/modules/Search/components/CharacterFilters/CharacterTagsStatus.vue";

const filters = ref(new CharactersFilters())

const emit = defineEmits(['filters-change'])

const { debouncedFunction } = useDebounce(
    () => emit('filters-change', filters.value),
    300
)

watch(filters, () => {
  debouncedFunction()
}, { deep: true })
</script>

<style lang="scss" scoped>
.character-filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
