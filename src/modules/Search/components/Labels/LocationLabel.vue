<template>
  <div class="location-label">
    <location-icon />
    {{ location }}
  </div>
</template>

<script lang="ts" setup>
import LocationIcon from "@/Common/components/Icons/LocationIcon.vue";

defineProps({
  location: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.location-label {
  font-weight: bold;
  font-size: $captions;
  color: $grey;
}
</style>
