<template>
  <rm-input
    class="character-search-input"
    v-model="searchValue"
    :placeholder="$t('character.filters.search.placeholder')"
  >
    <template #prefix>
      <search-icon />
    </template>
  </rm-input>
</template>

<script lang="ts" setup>
import RmInput from "@/Common/components/Inputs/RmInput.vue";
import {ref, watch} from "vue";
import SearchIcon from "@/Common/components/Icons/SearchIcon.vue";

const searchValue = ref('')

defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

watch(searchValue, () => {
  emit('update:modelValue', searchValue.value)
})
</script>

<style lang="scss" scoped>
.character-search-input {
  width: min-content;
}
</style>

