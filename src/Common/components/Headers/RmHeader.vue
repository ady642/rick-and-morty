<template>
  <div class="rm-header">
    <div class="rm-header__content">
      <rm-image class="rm-header__logo" :src="Logo" alt="Logo" />
      <locale-switcher />
    </div>
  </div>
</template>

<script lang="ts" setup>
import RmImage from "@/Common/components/Images/RmImage.vue";
import Logo from "@/assets/logo.png"
import LocaleSwitcher from "@/Common/components/LocaleSwitcher/LocaleSwitcher.vue";

</script>

<style lang="scss" scoped>
.rm-header {
  display: flex;
  box-shadow: 0 7px 14px rgb(0 0 0 / 4%);
  border-bottom: 1px solid $grey-light;
  margin-bottom: 20px;
  padding-bottom: 10px;

  &__content {
    display: flex;
    width: 80%;
    margin: auto;
  }

  &__logo {
    display: flex;
    flex: 1;
    width: clamp(200px, 80%, 500px);
  }
}
</style>
