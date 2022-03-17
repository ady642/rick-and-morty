<template>
  <span :class="iconName"></span>
</template>

<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const iconName = computed(() => `icon-${props.name}`)
</script>
