---
title: Margin.Padding和Border
date: 2016-08-11 01:33:09
tags:
- CSS
- 盒模型
categories:
- 读书笔记
- CSS实战手册
---
## 理解盒模型

> 万物皆盒

* **padding**是指**内容与其边框线之间**的空间,例如将照片与其边框线隔开的那部分空间.
* **border**是指**盒子周边**的直线.可以四个边周围都有一条边框线,也可以只有任意一边有边框线,或者其他任意几个边有边框线.
* **background-color**是用来**填充**边框内部空间,包括padding区域.
* **margin**是指**一个标签和另一个标签**之间的间隔.
<!--more--> 
  _有些标签会有**预设**的top margin和bottom margin)_

  ![截图 2016-08-06 09时36分55秒.jpg](http://obpfwfwbx.bkt.clouddn.com/CSS_mpb.jpg)

## 用Margin和Padding控制空间
   _使用peracentage(百分比),以**外围元素**的宽度作为基础.**top margin**值20%是指容器宽度20%_
   * ### Margin和padding的快捷属性

   > 1.margin和padding必须按照top,right,bottom,left;
     2.margin:0;
     3.2值表示上下和左右
   * ### 边距冲突

   >1.top margin和bottom margin冲突,不会相加,会运用**较大**的那个,可用**padding**替代
    2.`display:inline-block`变为**行内方框**
    3.`vertical-align:middle`居中(垂直)
    4.`<img>`添加padding和margin会**增大**框
    5.margin垂直方向非浮动**"边距折叠"**会造成只有一个边距,加border或者padding可以解决;水平方向浮动或者定位都不会发生
   * ### 用margin负值消除空格

   * ### 显示行内盒子和块级盒子
      >1.块级标签会产生一些空格,而行内标签没有
      >2.行内元素无法通过margin,padding调整高度
      >3.`display:inline`**块转行**
      >4.`displya:block`**行转块**
      >5.`dispaly:none`**隐藏**

## 添加边框
>环绕在元素周围的(直线) **`color,width,style`**三个属性

   * ### border属性的快捷设定法
   >属性**顺序没有要求**
   * ### 单独格式化各条边框
   >`top,bottom,left,right`以及`width,style,color`可以**结合**或者**各自**设置
   利用**层叠**可以简化
   用**none**属性值取消边框

## 设置背景色
>background-color,显示在边框线下边

## 确定高度和宽度
>一般用**px**,百分比是以**外围**元素为基础的

***min_xxx元素必须达到的宽度,max_xxx元素不能比之更高宽***
   * 计算盒子的实际宽度和高度
   >实际宽度是**4元素**相加
   高度问题要用**不同字体大小**去测试
   * 用Overflow属性控制溢出文本
   >`overflow:scroll`加滚动条,`overflow:auto`自动,`overflow:hidden`**隐藏**超出

## 用浮动元素包围内容
>**left**.让元素滑到左边
 **right**.让元素滑到右边
 **none**.关闭 也就是默认

 _**常规流**是指**从左到右,从上到下**,而**float**是打破这常规的杀器,也是通常用于**排版**_

 浏览器把行级元素当块级处理 在浮动时

   * ### Backgroud(背景).Border(边框)和Float(浮动)
     1.`overflow:hidden`
     2.加边框
   总而言之就是**清理浮动**带来的问题
   * ### 停止浮动(clear)
   >clear指示元素**不要包围浮动**,本质是迫使它落到浮动项目下方
     >* left:左浮动下
     >* right:右浮动下
     >* both:双边下
     >* none:完全不管就是默认
