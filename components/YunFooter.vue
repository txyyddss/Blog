<script lang="ts" setup>
import { useAddonVercount } from 'valaxy-addon-vercount'
import { useAddonHitokoto } from 'valaxy-addon-hitokoto'

// 获取访问统计数据
const { page, site } = useAddonVercount()
// 获取一言数据
const { hitokoto } = useAddonHitokoto()
</script>

<template>
  <div class="stats-container">
    <!-- 统计数据卡片 -->
    <div class="stats-card">
      <h3 class="stats-title">📊 访问统计</h3>
      <div class="stat-grid">
        <div class="stat-row">
          <div class="stat-item page-stat">
            <div class="stat-icon">📖</div>
            <div class="stat-content">
              <span class="stat-label">文章阅读量</span>
              <span class="stat-value">{{ page.pv }}</span>
            </div>
          </div>
          <div class="stat-item page-stat">
            <div class="stat-icon">👁️</div>
            <div class="stat-content">
              <span class="stat-label">文章访问量</span>
              <span class="stat-value">{{ page.uv }}</span>
            </div>
          </div>
        </div>
        <div class="stat-row">
          <div class="stat-item site-stat">
            <div class="stat-icon">🌐</div>
            <div class="stat-content">
              <span class="stat-label">站点访问量</span>
              <span class="stat-value">{{ site.pv }}</span>
            </div>
          </div>
          <div class="stat-item site-stat">
            <div class="stat-icon">👥</div>
            <div class="stat-content">
              <span class="stat-label">站点访客数</span>
              <span class="stat-value">{{ site.uv }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 优雅的分隔线 -->
    <div class="elegant-divider">
      <div class="divider-line"></div>
      <div class="divider-icon">✨</div>
      <div class="divider-line"></div>
    </div>
    
    <!-- 一言卡片 -->
    <div class="hitokoto-card">
      <div class="quote-icon">💭</div>
      <blockquote class="hitokoto-content">
        <p class="hitokoto-text">{{ hitokoto.hitokoto }}</p>
        <footer class="hitokoto-source">{{ hitokoto.from }}</footer>
      </blockquote>
    </div>
  </div>
</template>

<style scoped>
.stats-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--va-c-bg-light) 0%, var(--va-c-bg-soft) 100%);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.05);
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid var(--va-c-divider-light);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.stats-container:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.15),
    0 4px 12px rgba(0, 0, 0, 0.08);
}

/* 统计卡片样式 */
.stats-card {
  background: var(--va-c-bg);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid var(--va-c-divider-light);
}

.stats-title {
  margin: 0 0 16px 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--va-c-text);
  text-align: center;
}

.stat-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.stat-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: linear-gradient(135deg, var(--va-c-bg-soft) 0%, var(--va-c-bg-mute) 100%);
  border-radius: 10px;
  border: 1px solid var(--va-c-divider-light);
  transition: all 0.3s ease;
  cursor: default;
}

.stat-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--va-c-brand-light);
}

.stat-icon {
  font-size: 1.5rem;
  opacity: 0.8;
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--va-c-text-light);
  font-weight: 500;
}

.stat-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--va-c-text);
}

.page-stat .stat-value {
  color: var(--va-c-brand);
}

.site-stat .stat-value {
  color: var(--va-c-brand-dark);
}

/* 分隔线样式 */
.elegant-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 8px 0;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--va-c-divider), transparent);
}

.divider-icon {
  font-size: 1rem;
  color: var(--va-c-text-light);
  opacity: 0.6;
}

/* 一言卡片样式 */
.hitokoto-card {
  background: var(--va-c-bg);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid var(--va-c-divider-light);
  position: relative;
  overflow: hidden;
}

.hitokoto-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--va-c-brand), var(--va-c-brand-light));
}

.quote-icon {
  position: absolute;
  top: 16px;
  right: 20px;
  font-size: 2rem;
  opacity: 0.1;
}

.hitokoto-content {
  margin: 0;
  position: relative;
}

.hitokoto-text {
  font-style: italic;
  font-size: 1.1rem;
  color: var(--va-c-text);
  line-height: 1.7;
  margin: 0 0 12px 0;
  position: relative;
  padding-left: 20px;
}

.hitokoto-text::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -8px;
  font-size: 2rem;
  color: var(--va-c-brand);
  opacity: 0.3;
  font-family: serif;
}

.hitokoto-source {
  display: block;
  font-size: 0.9rem;
  color: var(--va-c-text-light);
  text-align: right;
  font-style: normal;
  font-weight: 500;
}

.hitokoto-source::before {
  content: '—— ';
}

/* 响应式设计 */
@media (max-width: 768px) {
  .stats-container {
    padding: 16px;
    margin: 0 16px;
  }
  
  .stat-row {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .stat-item {
    padding: 12px;
  }
  
  .stats-card,
  .hitokoto-card {
    padding: 16px;
  }
  
  .hitokoto-text {
    font-size: 1rem;
    padding-left: 16px;
  }
}

@media (max-width: 480px) {
  .stat-item {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
  
  .stat-content {
    align-items: center;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .stats-container {
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.3),
      0 2px 8px rgba(0, 0, 0, 0.2);
  }
  
  .stats-container:hover {
    box-shadow: 
      0 12px 40px rgba(0, 0, 0, 0.4),
      0 4px 12px rgba(0, 0, 0, 0.25);
  }
}
</style>
