<script lang="ts" setup>
import { useAddonVercount } from 'valaxy-addon-vercount'

const { site } = useAddonVercount()
</script>

<template>
  <div class="vercount-container">
    <span>访问数: {{ site.pv }} | 访客数: {{ site.uv }}</span>
  </div>
</template>

<style scoped>
.vercount-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}
</style>