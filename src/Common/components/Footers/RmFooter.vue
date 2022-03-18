<template>
  <footer class="rm-footer">
    <div>{{ $t('common.madeWith') }}<heart-icon class="rm-footer__heart" />{{ $t('common.byMe') }}</div>
    <div><a class="rm-footer__link" href="https://gitlab.com/ady642/rickandmorty">Source</a></div>
  </footer>
</template>

<script lang="ts" setup>
import HeartIcon from "@/Common/components/Icons/HeartIcon.vue";

</script>

<style lang="scss" scoped>
.rm-footer {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
  column-gap: 10px;

  &__heart {
    margin: 0 6px;
    color: $danger
  }

  &__link {
    color: $primary
  }
}
</style>
