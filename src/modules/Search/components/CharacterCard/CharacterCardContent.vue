<template>
  <div class="character-card__content">
    <div class="character-card__content__first-and-second">
      <span class="character-card__content__first-line ellipsify">{{ name }}</span>
      <div class="character-card__content__second-line">
        <gender-label
          :gender="gender"
        />
        <location-label
          class="character-card__content__second-line__location ellipsify"
          :location="location"
        />
      </div>
    </div>
    <rm-divider />
    <div class="character-card__content__third-line">
      <episode-label
          :episode-count="episodeCount"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import RmDivider from "@/Common/components/Dividers/RmDivider.vue";
import {PropType} from "vue";
import {GenderType} from "@/modules/Search/models/Inputs/Character";
import GenderLabel from "@/modules/Search/components/Labels/GenderLabel.vue";
import LocationLabel from "@/modules/Search/components/Labels/LocationLabel.vue";
import EpisodeLabel from "@/modules/Search/components/Labels/EpisodeLabel.vue";

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
  gender: {
    type: String as PropType<GenderType>,
    default: 'unknown'
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
    max-width: 280px;
  }
  &__second-line {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__location {
      max-width: 140px;
    }
  }
  &__third-line {
    font-weight: 600;
    font-size: $subtitle;
    padding: 15px 10px;
  }
}
</style>
