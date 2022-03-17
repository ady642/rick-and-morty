<template>
  <component class="country-flag" :is="countryFlag" />
</template>

<script lang="ts" setup>
import {computed} from "vue";
import FrenchFlag from '@/Common/components/Icons/Flags/FrenchFlag'
import EnglishFlag from '@/Common/components/Icons/Flags/EnglishFlag'

const props = defineProps({
  locale: {
    type: String,
    default: 'fr'
  }
})

const countryFlag = computed(() => props.locale === 'fr' ? FrenchFlag : EnglishFlag)
</script>

<style lang="scss" scoped>
.country-flag {
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
