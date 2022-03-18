<template>
  <div class="arrow-back">
    <arrow-left />
    <span class="arrow-back__label">
      {{ $t('common.backToResults') }}
    </span>
  </div>
</template>

<script lang="ts" setup>

import ArrowLeft from "@/Common/components/Icons/ArrowLeft.vue";
</script>

<style lang="scss" scoped>
.arrow-back {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  text-wrap: none;
  color: $grey;
  border-bottom: 1px solid $grey;
  padding-bottom: 4px;
  width: min-content;
  font-size: $captions;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &__label {
    margin-left: 6px;
    white-space: nowrap;
  }

  &:hover {
    color: $grey-900;
    border-bottom: 1px solid $grey-900;
  }
}
</style>
