<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 加载 Twikoo 脚本
  const twikooScript = document.createElement('script')
  twikooScript.src = 'https://cdn.jsdelivr.net/npm/twikoo@1.6.44/dist/twikoo.min.js'
  twikooScript.async = true
  
  twikooScript.onload = () => {
    // 脚本加载完成后初始化 Twikoo
    // @ts-ignore
    twikoo.init({
      envId: 'https://comments.1919801.xyz', // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
      el: '.comment', // 容器元素
      // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai
      // path: location.pathname, // 用于区分不同文章的自定义 js 路径
      // lang: 'zh-CN', // 手动设定评论区语言
    })
  }
  
  // 将脚本添加到页面
  document.head.appendChild(twikooScript)
})
</script>

<template>
  <div id="comment"></div>
</template>
