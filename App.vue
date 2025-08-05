<script setup lang="ts">
import { onMounted } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import { useAddonHitokoto } from 'valaxy-addon-hitokoto'

// 一言功能
const { hitokoto, fetchHitokoto } = useAddonHitokoto()

useIntervalFn(() => {
  fetchHitokoto()
}, 6000)

// Twikoo 评论系统初始化
onMounted(() => {
  // 加载 Twikoo 脚本
  const twikooScript = document.createElement('script')
  twikooScript.src = 'https://cdn.jsdelivr.net/npm/twikoo@1.6.44/dist/twikoo.min.js'
  twikooScript.async = true

  twikooScript.onload = () => {
    // 脚本加载完成后初始化 Twikoo
    // @ts-ignore
    twikoo.init({
      envId: 'https://comments.1919801.xyz',
      el: '.comment',
      // region: 'ap-guangzhou',
      // path: location.pathname,
      // lang: 'zh-CN',
    })
  }

  document.head.appendChild(twikooScript)
})
</script>

<template>
  <!-- 美化的一言横幅 -->
  <div class="hitokoto-banner">
    <div class="hitokoto-container">
      <div class="hitokoto-content">
        <div class="quote-icon">❝</div>
        <div class="hitokoto-text">
          <p class="hitokoto-quote">{{ hitokoto.hitokoto || '加载中...' }}</p>
          <p class="hitokoto-source">—— {{ hitokoto.from || '未知' }}</p>
        </div>
        <div class="quote-icon quote-end">❞</div>
      </div>
      <div class="hitokoto-decoration">
        <div class="decoration-line"></div>
      </div>
    </div>
  </div>

  <!-- 评论区 -->
  <div id="comment"></div>
</template>

<style scoped>
.hitokoto-banner {
  margin-top: 50px;
  padding: 20px;
  margin-bottom: 0px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;

  /* 液态玻璃效果 */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.hitokoto-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 50%, 
    rgba(255, 255, 255, 0.1) 100%);
  pointer-events: none;
}

.hitokoto-banner::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.4), 
    transparent);
}

.hitokoto-container {
  position: relative;
  z-index: 1;
}

.hitokoto-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: var(--va-c-text, #2c3e50);
  text-align: center;
}

.quote-icon {
  font-size: 2rem;
  opacity: 0.6;
  font-family: serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.quote-end {
  align-self: flex-end;
}

.hitokoto-text {
  flex: 1;
  max-width: 600px;
}

.hitokoto-quote {
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0 0 8px 0;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: var(--va-c-text, #2c3e50);
}

.hitokoto-source {
  font-size: 0.9rem;
  opacity: 0.7;
  margin: 0;
  font-style: italic;
  color: var(--va-c-text-light, #666);
}

.hitokoto-decoration {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

.decoration-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(102, 126, 234, 0.4), 
    transparent);
  border-radius: 1px;
}

/* 悬停效果 */
.hitokoto-banner:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hitokoto-banner {
    margin-top: 20px;
    padding: 15px;
    margin-bottom: 20px;
  }

  .hitokoto-content {
    flex-direction: column;
    gap: 10px;
  }

  .quote-icon {
    font-size: 1.5rem;
  }

  .hitokoto-quote {
    font-size: 1.1rem;
  }

  .quote-end {
    align-self: center;
  }
}

/* 淡入动画 */
.hitokoto-banner {
  animation: fadeInGlass 0.8s ease-out;
}

@keyframes fadeInGlass {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    backdrop-filter: blur(20px);
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .hitokoto-banner {
    background: rgba(0, 0, 0, 0.1);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .hitokoto-banner:hover {
    background: rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .hitokoto-content {
    color: var(--va-c-text, #fff);
  }

  .hitokoto-source {
    color: var(--va-c-text-light, #ccc);
  }
}
</style>