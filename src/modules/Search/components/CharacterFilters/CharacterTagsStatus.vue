<template>
  <div class="character-tags-status">
    <character-tag-status
        v-for="item in Object.values(Status)"
        :key="item"
        :type="modelValue === item ? getType(item): 'default'" :label="$t(`character.status.${item}`)"
        @click="handleTagClick(item)"
    />
  </div>
</template>

<script lang="ts" setup>
import {PropType} from "vue";
import {Status, StatusType} from "@/modules/Search/models/Inputs/Character";
import CharacterTagStatus from "@/modules/Search/components/CharacterFilters/CharacterTagStatus.vue";

const props = defineProps({
  modelValue: {
    type: String as PropType<StatusType>,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const getType = (status: StatusType) => {
  switch (status) {
    case Status.alive:
      return 'success'
    case Status.dead:
      return 'danger'
    case Status.unknown:
      return 'info'
    default:
      return 'info'
  }
}

const handleTagClick = (status: StatusType) => {
  emit('update:modelValue', status == props.modelValue ? '' : status)
}
</script>

<style lang="scss" scoped>
.character-tags-status {
  display: flex;
  column-gap: 10px;

  &__item {
    cursor: pointer;
  }
}
</style>
