---
layout: post
title: 拯救大内网环境下BT的上传速度
date: 2025-08-13 17:37:54
excerpt_type: html
categories: 折腾
tags:
    - BT
    - 家里云
    - 内网穿透
    - Lucky
---
<!-- more -->
# 安装必要的工具
[Lucky](https://lucky666.cn/docs/install),[Qbittorrent](https://www.qbittorrent.org/download),[Openwrt](https://openwrt.org/zh/docs/guide-quick-start/start)
# 打洞&转发
## 打洞
随便找个安装lucky的宿主机不再用的端口填入“穿透通道本地端口”，勾选“不使用lucky内置端口转发”
![](https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AAN0aJxd1kcMtKSR4SBtaVzUja08w20AAsvJMRtwL-hUDC4LboU-o6YBAAMCAAN5AAM2BA.jpeg)
等待打洞成功,记下两个端口
A:25140,B:30217
![](https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AAN1aJxeXPvgFLnmiBdbMZQRNT446PEAAtDJMRtwL-hUSDPQc93lyzgBAAMCAAN5AAM2BA.jpeg)
## 转发 
在Openwrt管理界面中新建转发规则,将A填入外部端口,B填入内部端口,内部IP选择运行Qbittorrent的IP,然后保存
![](https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AAN2aJxe1dJkSR-ms39c7ugHY4L16FMAAtPJMRtwL-hUr5efUDfGeZsBAAMCAAN3AAM2BA.jpeg)
# 自动更新端口
## Qbittorrent配置
进入Qb管理界面,取消勾选UPNP转发
![](https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AAN4aJxfysP3Rcg58DeDXcWYPTQ6TJcAAtTJMRtwL-hUVmP9HrLF4oIBAAMCAAN5AAM2BA.jpeg)
开启“对本地主机上的客户端跳过身份验证对IP”、“子网白名单中的客户端跳过身份验证”，填入你内网局域网的网段和子网掩码。
![](https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AAN5aJxgMudiS5Fj4ZsjYk7Sy60MrhsAAtXJMRtwL-hUHsx6c9eNFeQBAAMCAAN5AAM2BA.jpeg)
## 自动更新防火墙规则
首先.进入路由器SSH,运行uci show firewall,找到你刚添加的Redirect规则编号(应该是最后一行)
然后,修改脚本
```
uci set firewall.@redirect[你的规则编号].dest_port=${port}
uci commit firewall
/etc/init.d/firewall reload >/dev/null 2>&1
```
进入刚刚的STUN内网穿透界面,编辑,打开自定义脚本触发,填入修改好的脚本
![](https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AAN7aJxh3Bzc468FdgF0QS_mGsa4vG4AAtvJMRtwL-hUW4tXQL7ZYccBAAMCAAN4AAM2BA.jpeg)
## 自动更新QB端口
打开Webhook,填写,修改图片中红色直线标注的部分,保存
接口地址：http://qb的ip:qb的端口/api/v2/app/setPreferences
请求方法：post
请求头：Content-type:application/x-www-form-urlencoded
请求体：json={"listen_port":#{port}}
![](https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AAN8aJxiQP8dp5B8uqJDat-UTO48XiAAAtzJMRtwL-hULvsplkkuQqgBAAMCAAN5AAM2BA.jpeg)
# 大功告成
你会发现,原本几十K每秒的种子上传,现在可以跑满你的上传带宽了。QB界面最底下的小火苗,也变成了绿色的地球。
拓展阅读:[使用 cURL 自动修改 Transmission 的监听端口](https://www.bilibili.com/opus/924997717764079639)

*参考文章:[「LUCKY STUN穿透」使用 Webhook 自动修改 qbittorrent 的监听端口](https://www.bilibili.com/opus/895655343026077747) | [记一次使用Lucky给qbittorreent下载加速](https://post.smzdm.com/p/aklpzdke/) | [打通大内网第二期 让BT下载畅通无阻 （基于Lucky的STUN穿透）](https://zhuanlan.zhihu.com/p/668460346)*