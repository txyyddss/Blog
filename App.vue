<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'

// 一言数据
const hitokoto = ref({
  hitokoto: '加载中...',
  from: '未知'
})

// 使用JSONP方式获取一言，绕过CORS限制
const fetchHitokoto = () => {
  return new Promise((resolve, reject) => {
    const callbackName = 'hitokoto_callback_' + Date.now()
    const script = document.createElement('script')
  
    // 设置全局回调函数
    ;(window as any)[callbackName] = (data: any) => {
      hitokoto.value = {
        hitokoto: data.hitokoto || '获取失败',
        from: data.from || '未知'
      }
      // 清理
      document.head.removeChild(script)
      delete (window as any)[callbackName]
      resolve(data)
    }
  
    // 创建script标签请求
    script.src = `https://v1.hitokoto.cn/?c=a&c=b&c=c&c=d&c=e&c=f&c=g&c=h&c=i&c=j&c=k&c=l&callback=${callbackName}`
    script.onerror = () => {
      // 如果JSONP也失败，使用备用方案
      hitokoto.value = {
        hitokoto: '路漫漫其修远兮，吾将上下而求索',
        from: '屈原《离骚》'
      }
      document.head.removeChild(script)
      delete (window as any)[callbackName]
      reject(new Error('Failed to fetch hitokoto'))
    }
  
    document.head.appendChild(script)
  })
}

// 备用方案：使用fetch with no-cors模式（虽然不能读取响应，但可以作为fallback）
const fetchHitokotoFallback = async () => {
  try {
    // 尝试使用代理服务或者其他支持CORS的API
    const proxyUrl = 'https://api.allorigins.win/get?url='
    const targetUrl = encodeURIComponent('https://v1.hitokoto.cn/?c=a&c=b&c=c&c=d&c=e&c=f&c=g&c=h&c=i&c=j&c=k&c=l')
  
    const response = await fetch(proxyUrl + targetUrl)
    const data = await response.json()
    const hitokotoData = JSON.parse(data.contents)
  
    hitokoto.value = {
      hitokoto: hitokotoData.hitokoto || '获取失败',
      from: hitokotoData.from || '未知'
    }
  } catch (error) {
    console.error('Hitokoto fetch failed:', error)
    // 使用默认的一言
    const defaultHitokoto = [
      { hitokoto: '路漫漫其修远兮，吾将上下而求索', from: '屈原《离骚》' },
      { hitokoto: '山重水复疑无路，柳暗花明又一村', from: '陆游《游山西村》' },
      { hitokoto: '海内存知己，天涯若比邻', from: '王勃《送杜少府之任蜀州》' },
      { hitokoto: '会当凌绝顶，一览众山小', from: '杜甫《望岳》' },
      { hitokoto: '长风破浪会有时，直挂云帆济沧海', from: '李白《行路难》' }
    ]
    const randomIndex = Math.floor(Math.random() * defaultHitokoto.length)
    hitokoto.value = defaultHitokoto[randomIndex]
  }
}

// 组合使用JSONP和备用方案
const getHitokoto = async () => {
  try {
    await fetchHitokoto()
  } catch (error) {
    console.warn('JSONP failed, trying fallback method')
    await fetchHitokotoFallback()
  }
}

// 初始加载和定时更新
onMounted(() => {
  getHitokoto()
})

useIntervalFn(() => {
  getHitokoto()
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
          <p class="hitokoto-quote">{{ hitokoto.hitokoto }}</p>
          <p class="hitokoto-source">—— {{ hitokoto.from }}</p>
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
  margin-top: 40px;
  padding: 10px;
  margin-bottom: 0px;
  border-radius: 8px;
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