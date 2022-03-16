<template>
  <div class="home">
    {{ characters() }}
  </div>
</template>

<script lang="ts" setup>
import useSearchStore from "@/modules/Search/store/helpers";
import {useStore} from "vuex";
import {onMounted} from "vue";

const store = useStore()
const { fetchCharacters, characters } = useSearchStore(store)

onMounted(async () => {
  await fetchCharacters()
})
</script>
