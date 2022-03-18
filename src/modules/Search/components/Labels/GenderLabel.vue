<template>
  <div class="gender__label">
    <gender-icon />
    {{ genderTranslated }}
  </div>
</template>

<script lang="ts" setup>
import GenderIcon from "@/Common/components/Icons/GenderIcon.vue";
import useTranslation from "@/Common/composables/useTranslation";
import {computed} from "vue";

const props = defineProps({
  gender: {
    type: String,
    required: true
  }
})

const { t } = useTranslation()

const genderTranslated = computed(() => t(`character.gender.${props.gender}`))
</script>

<style lang="scss" scoped>
.gender__label {
  text-transform: capitalize;
  color: $primary;
  font-size: $subtitle;
}
</style>
