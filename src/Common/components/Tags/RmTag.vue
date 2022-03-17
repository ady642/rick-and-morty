<template>
  <div class="rm-tag" :class="type">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (value: string): boolean => ['success', 'danger', 'info'].includes(value)
  }
})
</script>

<style lang="scss" scoped>
  .rm-tag {
    border-radius: $sm-radius;
    color: white;
    padding:6px;

    &.success {
      background: $success
    }

    &.danger {
      background: $danger
    }

    &.info {
      background: $info
    }
  }
</style>
