<template>
  <rm-tag class="character-tag-status">
    <earth-icon />
    <span class="character-tag-status">
      {{ label }}
    </span>
  </rm-tag>
</template>

<script lang="ts" setup>
import RmTag from "@/Common/components/Tags/RmTag.vue";
import EarthIcon from "@/Common/components/Icons/EarthIcon.vue";

defineProps({
  label: {
    type: String,
    required: true
  }
})

</script>

<style lang="scss" scoped>
.character-tag-status {
  text-transform: capitalize;
  cursor: pointer;
  margin-left: 5px;
  font-size: $subtitle
}
</style>
