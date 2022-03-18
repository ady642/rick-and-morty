<template>
    <rm-header />
    <main class="rm-container">
      <slot />
      <rm-footer />
    </main>
</template>

<script lang="ts" setup>
import RmHeader from "@/Common/components/Headers/RmHeader.vue";
import RmFooter from "@/Common/components/Footers/RmFooter.vue";

</script>

<style scoped>
.rm-container {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}
</style>
