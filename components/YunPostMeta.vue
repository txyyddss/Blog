<script lang="ts" setup>
import type { Post } from 'valaxy'
import { useLayout } from 'valaxy'
import YunPostMeta from 'valaxy-theme-yun/components/YunPostMeta.vue'
import { useAddonVercount } from 'valaxy-addon-vercount'

defineProps<{
  frontmatter: Post
}>()

// 仅在 Post 布局显示
const isPost = useLayout('post')
const { page } = useAddonVercount()
</script>

<template>
  <YunPostMeta :frontmatter="frontmatter">
    <span v-if="isPost" class="yun-post-stat">
      <span>阅读数: {{ page.pv }}</span>
      <span style="margin-left: 0.5em;">访客数: {{ page.uv }}</span>
    </span>
  </YunPostMeta>
</template>