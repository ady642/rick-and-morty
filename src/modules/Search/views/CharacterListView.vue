<template>
  <div class="character-list">
    <character-card
      v-for="character in characters().collection"
      :key="character.id"
      :character="character"
    />
  </div>
</template>

<script lang="ts" setup>
import CharacterCard from '@/modules/Search/components/CharacterCard.vue'
import useSearchStore from "@/modules/Search/store/helpers";
import {useStore} from "vuex";
import {onMounted} from "vue";

const store = useStore()
const { fetchCharacters, characters } = useSearchStore(store)

onMounted(async () => {
  await fetchCharacters()
})
</script>

<style lang="scss" scoped>
.character-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
