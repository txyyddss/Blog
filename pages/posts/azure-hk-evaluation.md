---
layout: post
title: Azure HK B1s小鸡测评
date: 2025-08-04 20:10:56
categories: 测评
tags:
  - 小鸡
  - 香港
  - 微软
---
## TLDR
三网绕新加坡,速度尚可,部分流媒体解锁,广播机房IP
<!-- more -->
## 系统基础信息
| 项目 | 值 |
|------|------|
| **处理器** | Intel(R) Xeon(R) Platinum 8171M @ 2.60GHz |
| **CPU核心** | 1 @ 2095.175 MHz |
| **内存** | 907.6 MiB |
| **硬盘** | 65.8 GiB |
| **虚拟化** | Microsoft Hyper-V |
| **系统** | Ubuntu 22.04.5 LTS |
| **内核** | 6.15.8-joeyblog-bbrv3 |
| **位置** | 香港 (Microsoft Azure) |
| **ASN** | AS8075 Microsoft Corporation |

## 性能测试
### CPU性能 (YABS)
| 测试类型 | 得分 |
|----------|------|
| 单线程测试 | 824 Scores |

### 磁盘IO性能 (fio)
| 块大小 | 读速度 (IOPS) | 写速度 (IOPS) | 总速度 |
|--------|---------------|---------------|--------|
| **4k** | 2.45 MB/s (614) | 2.47 MB/s (618) | 4.92 MB/s (1.2k) |
| **64k** | 27.37 MB/s (427) | 27.77 MB/s (434) | 55.15 MB/s (861) |
| **512k** | 26.64 MB/s (52) | 28.50 MB/s (55) | 55.14 MB/s (107) |
| **1m** | 26.28 MB/s (25) | 28.84 MB/s (28) | 55.13 MB/s (53) |

## 网络质量检测
### IP质量评分 (IPv4)
| 指标 | 得分 | 风险等级 |
|------|------|----------|
| **SCAMALYTICS** | 8 | 低风险 |
| **ipapi** | 0.09% | 低风险 |
| **AbuseIPDB** | 0 | 低风险 |
| **IPQS** | 75 | 可疑IP |

### IP类型属性
| 属性 | 结果 |
|------|------|
| **使用类型** | 数据中心/托管 |
| **代理** | 否 (多数数据库) |
| **VPN** | 是 (部分数据库) |
| **Tor** | 否 |
| **黑名单记录** | 54/439 (2个黑名单) |

## 流媒体解锁测试
### IPv4解锁能力
| 服务 | 状态 | 地区 |
|------|------|------|
| **Netflix** | ✅ 原生解锁 | HK |
| **YouTube Premium** | ✅ 原生解锁 | HK |
| **Amazon Prime Video** | ✅ 原生解锁 | HK |
| **Disney+** | ❌ 屏蔽 | - |
| **ChatGPT** | ✅ 仅限APP | HK |
| **TikTok** | ❌ 失败 | - |

### IPv6解锁能力
| 服务 | 状态 | 地区 |
|------|------|------|
| **Netflix** | ✅ 原生解锁 | HK |
| **YouTube Premium** | ✅ 原生解锁 | HK |
| **Disney+** | ✅ 原生解锁 | HK |
| **ChatGPT** | ❌ 失败 | - |

## 网络性能测试
### 网站响应时间
| 网站 | 平均响应时间 |
|------|--------------|
| Google.com | 236.13 ms |
| Facebook.com | 401.30 ms |
| YouTube.com | 453.50 ms |
| Netflix.com | 1098.78 ms |
| chat.openai.com | 88.79 ms |
| **总平均** | 404.77 ms |

### 多线程测速 (Mbps)
| 节点 | 下载 | 上传 |
|------|------|------|
| 最近节点 | 1102.81 | 467.82 |
| 电信浙江杭州 | 822.25 | 44.06 |
| 移动四川成都 | 1421.08 | 747.99 |

### 单线程测速 (Mbps)
| 节点 | 下载 | 上传 |
|------|------|------|
| 电信浙江杭州 | 225.70 | 1.30 |
| 移动四川成都 | 263.00 | 172.20 |

## 回程路由追踪
<details>
<summary>查看完整路由追踪</summary>

```bash
# 中国广东电信回程
7   104.44.11.121   AS8075   [MSFT] 中国香港  34.23 ms
11  183.91.56.169   AS4134   新加坡  32.09 ms
12  202.97.35.101   AS4134   中国广东广州 75.59 ms
19  14.22.48.18     AS4134   中国广东 78.75 ms

# 中国广东联通回程
9   13.106.238.155  AS8075   新加坡  36.87 ms
11  219.158.38.213  AS4837   新加坡  33.68 ms
15  112.89.0.14     AS17816  中国广东东莞市 77.11 ms
23  157.148.134.3   AS134543 中国广东东莞 82.83 ms

# 中国广东移动回程
7   104.44.11.151   AS8075   中国香港  35.71 ms
11  223.119.81.117  AS58453  新加坡  34.05 ms
13  223.120.22.206  AS58453  中国广东广州 75.27 ms
26  183.232.239.3   AS9808   中国广东东莞 81.70 ms
```
</details>

## 测试信息
| 项目 | 内容 |
|------|------|
| **测试时间** | 2025-07-25 20:44:48 CST |
| **脚本版本** | YABS v2025-04-20 |
| **IP检测脚本** | xykt/IPQuality v2025-07-22 |
| **流媒体检测** | RegionRestrictionCheck |

<style>
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
    font-size: 0.9em;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  pre {
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
  }
  .success {
    color: #2ecc71;
    font-weight: bold;
  }
  .warning {
    color: #f39c12;
    font-weight: bold;
  }
  .error {
    color: #e74c3c;
    font-weight: bold;
  }
  details {
    margin: 1em 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  summary {
    font-weight: bold;
    cursor: pointer;
  }
</style>
