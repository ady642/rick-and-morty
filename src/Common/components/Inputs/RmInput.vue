<template>
  <div class="rm-input__container">
    <slot name="prefix" />
    <input
      v-model="value"
      class="rm-input__element"
      @input="handleInputChange"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const value = ref('')

defineProps({
  placeholder: String
})
const emit = defineEmits(['update:modelValue'])

const handleInputChange = (event: InputEvent & { target: { value: string } }) => {
  emit('update:modelValue', event.target?.value)
}
</script>

<style lang="scss" scoped>
.rm-input {
  &__container {
    border-radius: $radius;
    padding: 10px 20px;
    border: 2px solid $grey;
    display: flex;
    flex-wrap: nowrap;
    align-items: baseline;
    transition: border 0.2s ease-in-out;

    &:focus-within {
      border: 2px solid $grey-900;
    }
  }

  &__element {
    border: none;
    outline: none;
    margin-left: 5px;
  }
}
</style>
