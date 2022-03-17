<template>
    <rm-header />
    <main class="rm-container">
      <slot />
      <footer>
        Made with love By Adrien Haik Martos
      </footer>
    </main>
</template>

<style scoped>
.rm-container {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}
</style>

<script lang="ts" setup>
import RmHeader from "@/Common/components/Headers/RmHeader.vue";

</script>
