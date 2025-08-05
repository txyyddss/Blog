import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonLive2d } from 'valaxy-addon-live2d'
import { addonHitokoto } from 'valaxy-addon-hitokoto'
import { addonVercount } from 'valaxy-addon-vercount'
import { addonTwikoo } from 'valaxy-addon-twikoo'



// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts
  siteConfig: {
    // 启用评论
    comment: {
      enable: true
    },
  },
  theme: 'yun',
  addons: [
    addonVercount(),
    addonHitokoto(),
    addonTwikoo({ 
      envId: "https://comments.1919801.xyz"
    }),
    addonLive2d({
      enableLive2D: ['Tia', 'Pio', 'Type95', 'HK416'],
      widthLimit: 290,
      live2DCollection: {
        Type95: {
          models: [
            'https://registry.npmmirror.com/weblive2d/latest/files/model/95type/95type_3702/normal/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/95type/95type_3702/destroy/index.json',
          ],
        },
        HK416: {
          models: [
            'https://registry.npmmirror.com/weblive2d/latest/files/model/HK416/HK416_3401/destroy/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/HK416/HK416_3401/normal/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/HK416/HK416_805/normal/index.json',
            'https://registry.npmmirror.com/weblive2d/latest/files/model/HK416/HK416_805/destroy/index.json',
          ],
        },
      },
      tools: {
        hitokoto: {
          visible: true,
        },
        asteroids: {
          visible: true,
        },
      },
      skipHello: true,
    }),
  ],
  themeConfig: {
    banner: {
      enable: true,
      title: 'TXの小站',
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2025,
      beian: {
        enable: true,
        icp: '粤ICP备114514号',
      },
    },
  },

  unocss: { safelist },
})
