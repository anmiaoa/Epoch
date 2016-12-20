* @media css媒体查询
  1. 语法
  ```
    媒体查询包含了一个媒体类型 和如CSS3规范中描述的包含一个或多个表达式的媒体属性，
    这些媒体属性会被解析成真或假。如果媒体查询中的媒体类型与文档要展示的设备相符则
    查询结果为真，并且媒体查询中的所有表达式为真。
   
    <!-- link元素中的CSS媒体查询 -->
    <link rel="stylesheet" media="(max-width: 800px)" href="example.css" />
    
    <!-- 样式表中的CSS媒体查询 -->
    <style>
    @media (max-width: 600px) {
      .facet_sidebar {
        display: none;
      }
    }
    </style>
  ```
  2. 逻辑操作符
    操作符 not，and，only 可以用来构建复杂的媒体查询
    - and 将多个媒体查询组合，都满足时才会发回为真
    - not 对媒体查询结果取反
    - only 只有媒体查询结果为真时匹配样式
    - , 多个语句中间用 , 分割，可以做类似 or 的操作
    
    ```
    使用 not 或 only 时，必须明确指定媒体类型 screen（屏幕）、print（打印）、handheld（手持设备）、tv（电视）
    
    width 显示区域的宽度
    height 显示区域的高度
    device-width 设备宽度
    device-height 设备高度
    orientation 设备的方向 portrait landscape
    aspect-radio 设备显示区域的宽高比  16／9
    device-aspect-radio 设备的宽度和设备高度的宽高比）
    
    
    @media (min-width: 700px) { ... }   //屏幕宽度大于700时触发
    
    @media (min-width: 500px) and (orientain: landscape) {}   //横屏且宽度大于700
    
    @media tv @ (min-width: 500px) and (orientain: landscape) {}   //在 tv 上横屏且宽度大于700
    
    @media min-width: 700px, handheld and (orientain: landscape) {}   //屏幕宽度大于700px 或横屏的手持设备
    
    ```
    
* devicePixelRatio 设备像素比
  ```
  即设备物理像素和独立像素（css中的像素）比，借鉴PPK大神的理念
  浏览器默认viewport，称为layout viewport，可通过document.documentElement.clientWidth 获取
  可视区域的viewport，称为visual viewport，window.innerWidth获取
  理想的viewport，称为ideal viewport
  
  移动端默认的viewport为layout viewport，可通过meta标签改为ideal viewport
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  
  上述的meta标签效果是让 viewport的宽度等于设备的宽度，同时禁止缩放
  
  meta viewport标签的属性
  width 设置layout viewport 的宽度，整数或‘device-width’
  initial-scale 设置页面的初始缩放值 
  minimum-sacle 设置页面最小缩放值
  maximum-sacle 设置页面最大缩放值
  height 设置layout viewport 的高度，基本不会使用
  user-scalable 是否允许用户缩放 值为为 ‘no’或‘yes’，0 和 1 同样表示
  
  设置 width=device-width 可以把 layout viewport 变成 ideal viewport，即：
  <meta name="viewport" content="width=device-width“>
  但这种情况iphone无论横屏、竖屏都是竖屏是的ideal viewport宽度
  
  <meta name="viewport" content="initial-scale=1" >
  同样可以设置viewport 为ideal viewport，原因是缩放是相对于ideal viewprot实现的，但是winphone 上的ie出现了横竖屏都是竖屏时的ideal viewport宽度。
  
  当时当设置了 width 以及 initial-scale时，如果遇到冲突，取两者最大值
  <meta name="viewport" content="width=400, initial-scale=1">
  这种情况会取 ideal viewport的宽度和 width值比较，取最大值
  
  所以为了防止iphone和winphone的错误情况出现，两个属性都添加上去
  <meta name="viewport" content="width=device-width， initial-scale=1" >
  
  
  ```
  
  
  * touch事件
    - Touch对象代表一个触点，可以通过event.touches[0]获取，每个触点包含位置，大小，形状，压力大小，和目标 element属性。
  ```
  {
      screenX: 511, 
      screenY: 400,//触点相对于屏幕左边沿的Y坐标
      clientX: 244.37899780273438, 
      clientY: 189.3820037841797,//相对于可视区域
      pageX: 244.37, 
      pageY: 189.37,//相对于HTML文档顶部，当页面有滚动的时候与clientX=Y 不等
      force: 1,//压力大小，是从0.0(没有压力)到1.0(最大压力)的浮点数
      identifier: 1036403715,//一次触摸动作的唯一标识符
      radiusX: 37.565673828125, //能够包围用户和触摸平面的接触面的最小椭圆的水平轴(X轴)半径
      radiusY: 37.565673828125,
      rotationAngle: 0,//它是这样一个角度值：由radiusX 和 radiusY 描述的正方向的椭圆，需要通过顺时针旋转这个角度值，才能最精确地覆盖住用户和触摸平面的接触面
      target: {} // 此次触摸事件的目标element
  }
  ```
  