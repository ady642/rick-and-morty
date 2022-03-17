<template>
  <ul class="pagination">
    <li
        class="pagination__number pagination__button"
        @click="handlePrevClick"
    >{{ $t('common.previous') }}</li>
    <li
        v-for="number in pagesEllipsis"
        :key="number"
        class="pagination__number"
        :class="{ active: number === currentPage }"
        @click="handlePageClick(number)"
    >
      {{ number }}
    </li>
    <li @click="handleNextClick" class="pagination__number pagination__button">{{ $t('common.next') }}</li>
  </ul>
</template>

<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps({
  currentPage: {
    type: Number,
    default: 1
  },
  totalCharacters: {
    type: Number,
    default: 1
  },
  itemsPerPage: {
    type: Number,
    default: 10
  }
})

const emit = defineEmits(['update:modelValue'])

const pagesEllipsis = computed(() => {
  const pages = Array.from({length: totalPages.value}, (_, i) => 1 + i)

  if(pages.length < 6) {
    return pages
  }

  if(props.currentPage < 4 || props.currentPage > 40) {
    return [1, 2, 3, '...', pages[totalPages.value - 2], pages[totalPages.value - 1]]
  }

  return [1, 2, 3, '...', pages[props.currentPage - 1],'...', pages[totalPages.value - 2], pages[totalPages.value - 1]]
})

const handlePrevClick = () => {
  if(props.currentPage === 1) {
    return
  }

  emit('update:modelValue', props.currentPage - 1)
}

const totalPages = computed(() => Math.ceil(props.totalCharacters / props.itemsPerPage))

const handlePageClick = (page: number | string) => {
  if(typeof page !== "number") {
    return
  }

  emit('update:modelValue', page)
}

const handleNextClick = () => {
  if(props.currentPage === totalPages.value) {
    return
  }

  emit('update:modelValue', props.currentPage + 1)
}
</script>

<style lang="scss" scoped>
.pagination {
  list-style-type: none;
  margin-left: 0;
  display: flex;
  column-gap: 8px;
  padding: 0;

  &__number {
    cursor: pointer;

    &.active {
      font-weight: bold;
      color: $primary;
      border-bottom: 3px solid $primary;
    }
  }

  &__button {
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>
