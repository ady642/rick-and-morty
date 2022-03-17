<template>
  <div class="character-card__content">
    <div class="character-card__content__first-and-second">
      <span class="character-card__content__first-line">{{ name }}</span>
      <div class="character-card__content__second-line">
        <div class="character-card__content__second-line__status">
          <earth-icon />
          {{ status }}
        </div>
        <div class="character-card__content__second-line__location">
          <location-icon />
          {{ location }}
        </div>
      </div>
    </div>
    <rm-divider />
    <div class="character-card__content__third-line">
      <span class="character-card__content__third-line__episode">
        <camera-icon class="character-card__content__third-line__icon" />
        {{ episodeCount }} {{ $t('character.episodes') }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import EarthIcon from "@/Common/components/Icons/EarthIcon.vue";
import LocationIcon from "@/Common/components/Icons/LocationIcon.vue";
import RmDivider from "@/Common/components/Dividers/RmDivider.vue";
import CameraIcon from "@/Common/components/Icons/CameraIcon.vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: "",
  },
  episodeCount: {
    type: Number,
    default: 0,
  },
})
</script>

<style lang="scss" scoped>
.character-card__content {
  &__first-and-second {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 15px 10px;
  }

  &__first-line {
    font-weight: 600;
    font-size: $title;
  }
  &__second-line {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__status {
      color: $primary;
      font-size: $subtitle;
    }

    &__location {
      font-weight: bold;
      font-size: $captions;
      color: $grey;
      white-space: nowrap;
      overflow: hidden;
      max-width: 180px;
      text-overflow: ellipsis;
    }
  }
  &__third-line {
    font-weight: 600;
    font-size: $subtitle;
    padding: 15px 10px;

    &__icon {
      padding: 6px;
      border-radius: $sm-radius;
      background: $grey-light;
      color: black;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__episode {
      display: flex;
      align-items: center;
      column-gap: 10px;
      font-weight: normal;
      font-size: $subtitle;
    }
  }
}
</style>
