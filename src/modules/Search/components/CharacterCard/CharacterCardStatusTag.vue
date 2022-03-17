<template>
  <rm-tag class="character-card__status-tag" :type="type">
    <earth-icon />
    <span class="character-card__status">
      {{ statusTranslated }}
    </span>
  </rm-tag>
</template>

<script lang="ts" setup>
import RmTag from "@/Common/components/Tags/RmTag.vue";
import {computed, PropType} from "vue";
import useTranslation from "@/Common/composables/useTranslation";
import EarthIcon from "@/Common/components/Icons/EarthIcon.vue";
import {Status, StatusType} from "@/modules/Search/models/Inputs/Character";

const props = defineProps({
  status: {
    type: String as PropType<StatusType>,
    required: true
  }
})

const type = computed(() => {
  switch (props.status) {
    case Status.alive:
      return 'success'
    case Status.dead:
      return 'danger'
    case Status.unknown:
      return 'info'
    default:
      return 'info'
  }
})

const { t } = useTranslation()

const statusTranslated = computed(() => t(`character.status.${props.status}`))
</script>

<style lang="scss" scoped>
.character-card__status {
  text-transform: capitalize;
  margin-left: 5px;
  &-tag {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: $captions
  }
}
</style>
