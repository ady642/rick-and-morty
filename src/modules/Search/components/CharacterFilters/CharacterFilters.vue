<template>
  <character-search-input
    v-model="filters.name"
  />
</template>

<script lang="ts" setup>
import CharactersFilters from "@/modules/Search/models/Query/CharactersFilters";
import CharacterSearchInput from "@/modules/Search/components/CharacterFilters/CharacterSearchInput.vue";
import {ref, watch} from "vue";

const filters = ref(new CharactersFilters())

const emit = defineEmits(['filters-change'])

watch(filters, () => {
  emit('filters-change', filters.value)
}, { deep: true })
</script>

<style scoped>

</style>
