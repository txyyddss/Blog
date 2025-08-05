import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonLive2d } from 'valaxy-addon-live2d'
import { addonHitokoto } from 'valaxy-addon-hitokoto'
import { addonVercount } from 'valaxy-addon-vercount'



// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',
  addons: [
    addonVercount(),
    addonHitokoto(),
    addonLive2d({
      enableLive2D: ['Tia', 'Pio'],
      live2DCollection: {
        XiaoYun: {
          message: '来自云游君的小云 ~',
          models: ['https://cdn.jsdelivr.net/npm/@yunyoujun/live2d@latest/小云.model3.json'],
        },
        // https://github.com/fghrsh/live2d_api
        Tia: {
          message: '来自 Potion Maker 的 Tia 酱 ~',
          models: 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model/Potion-Maker/Tia/index.json',
        },
        Pio: {
          message: '来自 Potion Maker 的 Pio 酱 ~',
          models: 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model/Potion-Maker/Pio/index.json',
        },
      },
    })
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
