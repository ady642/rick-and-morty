<template>
  <div class="rm-tag" :class="type">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  type: {
    type: String,
    default: 'default',
    validator: (value: string): boolean => ['success', 'danger', 'info', 'default'].includes(value)
  }
})
</script>

<style lang="scss" scoped>
  .rm-tag {
    border-radius: $sm-radius;
    color: white;
    padding:6px;
    transition: background 0.3s ease-in-out;

    &.success {
      background: $success
    }

    &.danger {
      background: $danger
    }

    &.info {
      background: $info
    }

    &.default {
      background: $grey-500
    }
  }
</style>
