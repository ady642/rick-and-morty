<template>
  <default-layout>
    <router-view/>
    <rm-loading v-if="areCharactersLoading()"/>
  </default-layout>
</template>

<script lang="ts" setup>
import DefaultLayout from "@/Common/layouts/DefaultLayout.vue";
import useSearchStore from "@/modules/Search/store/helpers";
import RmLoading from "@/Common/components/Loadings/RmLoading.vue";

const { areCharactersLoading } = useSearchStore()
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
