<template>
  <ul
      class="rm-dropdown"
  >
    <div class="rm-dropdown__activator" @click="handleActivatorClick">
      <slot name="activator">
          {{ modelValue }}
      </slot>
    </div>

    <div v-show="displayList">
      <li
          v-for="item in list"
          :key="item"
          class="rm-dropdown__item"
          @click="handleItemClick(item)"
      >
        <slot :name="item">
          <span class="rm-dropdown__item__name">
            {{ item }}
          </span>
        </slot>
      </li>
    </div>

  </ul>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const emit = defineEmits(['update:modelValue'])

defineProps({
  list: {
    type: Array,
    required: true
  },
  modelValue: {
    type: [String, Object, Number, Boolean],
    required: true
  }
})

const displayList = ref(false)

const handleItemClick = (item: string) => {
  emit('update:modelValue', item)
  displayList.value = !displayList.value
}

const handleActivatorClick = () => {
  displayList.value = !displayList.value
}
</script>

<style lang="scss" scoped>
.rm-dropdown {
  &__activator {
    cursor: pointer
  }

  &__item {
    list-style-type: none;
    cursor: pointer;
   }
}
</style>
