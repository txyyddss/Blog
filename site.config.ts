import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://myblog.1919801.xyz/',
  lang: 'zh-CN',
  title: 'TX的小站',
  author: {
    name: 'TX',
    avatar: '/avatar.png',
    intro: '关于我'
  },
  description: '一个鸽子,咕咕咕',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: '主页',
      link: 'https://1919801.xyz',
      icon: 'i-ri-home-2-fill',
      color: 'black',
    },
    {
      name: 'QQ',
      link: 'https://qm.qq.com/q/8tS63qc4qQ',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/txyyddss',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '微信',
      link: 'weixin://dl/chat?ROGYYDS_TX',
      icon: 'i-ri-wechat-2-line',
      color: '#1AAD19',
    },
    {
      name: 'Telegram',
      link: 'https://t.me/txmiaomiaowu',
      icon: 'i-ri-telegram-2-fill',
      color: 'white',
    },
    {
      name: 'E-Mail',
      link: 'mailto:tx@1919801.xyz',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: '友链接力',
      link: 'https://www.travellings.cn/go.html',
      icon: 'icon i-ri-train-line',
      color: 'black',
    },
  ],
  encrypt: {
    enable: false,
  },
  mediumZoom: { enable: true },
  vanillaLazyload: {
    enable: true,
  },
  codeHeightLimit: 300,
  statistics: {
    enable: true,
    readTime: {
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },
  search: {
    enable: true,
    type: 'fuse',
  },
  fuse: {
    /**
     * 设置搜索的文件路径
     */
    // pattern: 'pages/**/*.md',
    options: {
      keys: ['title', 'tags', 'categories', 'excerpt', 'content'],
      /**
       * @default 0.6
       * @see https://www.fusejs.io/api/options.html#threshold
       * 设置匹配阈值，越低越精确
       */
      // threshold: 0.6,
      /**
       * @default false
       * @see https://www.fusejs.io/api/options.html#ignoreLocation
       * 忽略位置
       * 这对于搜索文档全文内容有用，若无需全文搜索，则无需设置此项
       */
      ignoreLocation: true,
    },
  },

  sponsor: {
    enable: true,
    title: '赞助点米呗义父！',
    methods: [
      {
        name: '微信支付',
        url: 'https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AANTaJCBi9_fumDcD28GSnBW_f6nuqQAAlHIMRuOWoBUOsE714oqn9ABAAMCAAN4AAM2BA.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
