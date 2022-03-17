<template>
  <rm-dropdown
    v-model="$i18n.locale"
    :list="getCountriesWithoutCurrentLocale($i18n.locale)"
  >
    <template #activator>
      <div class="locale-switcher__activator">
        <country-flag :locale="$i18n.locale" />
      </div>
    </template>
    <template #fr>
      <div class="locale-switcher__item">
        <country-flag locale="fr" />
      </div>
    </template>
    <template #en>
      <div class="locale-switcher__item">
        <country-flag locale="en" />
      </div>
    </template>
  </rm-dropdown>
</template>

<script lang="ts" setup>
import CountryFlag from './CountryFlag.vue'
import RmDropdown from "@/Common/components/Dropdowns/RmDropdown.vue";

const countries = ['fr', 'en'] as const

const getCountriesWithoutCurrentLocale = (currentLocale: 'fr' | 'en') => {
  return countries.filter(locale => currentLocale !== locale)
}

</script>

<style lang="scss" scoped>
@mixin locale-switcher__element($border-default-color) {
  transition: all 0.2s ease-in-out;
  border: 2px solid $border-default-color;
  padding: 8px;
  border-radius: $sm-radius;

  &:hover {
    border: 2px solid $primary;
  }
}

.locale-switcher {
  &__activator {
     @include locale-switcher__element($grey-light)
  }

  &__item {
    @include locale-switcher__element(transparent)
  }
}
</style>
