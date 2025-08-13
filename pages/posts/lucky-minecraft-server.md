---
layout: post
title: 让你的大内网家里云游戏服可以直连
date: 2025-08-13 17:04:43
excerpt_type: html
categories: 折腾
tags:
    - 游戏云
    - 家里云
    - 内网穿透
    - Lucky
---
<!-- more -->
# Lucky安装
[自行查看官方文档,略](https://lucky666.cn/docs/install)
确保你的路由器开启了FullCone和Upnp,或者将Lucky直接安装在路由器上
STUN打洞成功的前提是NAT1,使用国内三大运营商的宽带并使用路由器拨号就无需担心这点
# 穿透规则
进入Lucky后台,并进入STUN内网穿透
![](https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AANtaJxXdRt0nmY_XsED4AxcmMiYAzMAArvJMRtwL-hUSVLr2XtX00wBAAMCAAN3AAM2BA.jpeg)
点击添加穿透规则,进入以下界面
![](https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AANuaJxYA19qkpyLUv3S57rBZWzfjmoAArzJMRtwL-hU5E7qMszR0_oBAAMCAAN3AAM2BA.jpeg)
首先,确认你的游戏使用什么协议进行传输,选择IPV4-TCP/IPV4-UDP
然后,如果Lucky安装在路由器上,那么开启防火墙自动放行
如果安装在其他设备上,那么开启NAF-PMP并填入你路由器的ip
最后,在目标地址填入你游戏服务器的内网ip,在目标端口填入游戏服务器监听的端口,点击添加,等待蓝色部分出现
![](https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AANwaJxZNoghTOIs5T00rJb4SrKpoZ0AAr_JMRtwL-hUGLPDMHmFFG0BAAMCAAN4AAM2BA.jpeg)
# 使客户端知道端口
## 情况1:客户端支持解析SRV记录(以Minecraft为例)
首先依照[官方文档](https://lucky666.cn/docs/modules/ddns)配置好DDNS服务商,并为运行Lucky的主机配置好DDNS
然后点击添加记录,按照图片中填写并修改红色标注的部分
完成后,就可以在游戏客户端填写"你的域名"畅玩啦
![](https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AANxaJxarNYAAd7umIc9gDQjRWmsToNCAALAyTEbcC_oVI4wbFNaLeZ2AQADAgADeQADNgQ.jpeg)
## 其他情况
点击设置,打开OpenToken开关,复制生成的OpenToken
![](https://img.1919801.xyz/file/AgACAgUAAyEGAASJOwb3AANyaJxbfJ1A5E2K3p0uckB5XKwsw3oAAsXJMRtwL-hURN7zgwVpm8oBAAMCAAN3AAM2BA.jpeg)
当端口更改时,打开 https://你的Lucky网址/api/stunrulelist?openToken=你的Token
寻找PublicAddr,并复制就是你当前的打洞端口和IP
