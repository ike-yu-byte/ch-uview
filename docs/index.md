---
# https://vitepress.dev/reference/default-theme-home-page
layout: false

hero:
  name: "My Awesome Project33"
  text: "A VitePress Site"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<!-- 重定向方式更改首页 -->
<script>
  // 立即重定向到自定义 HTML 首页
  window.location.href = '/home.html';
</script>

<!-- 显示加载提示 -->
<div style="text-align: center; padding: 50px;">
  <h2>正在加载首页...</h2>
</div>

<!-- 或者iframe方式导入 -->
<iframe 
  src="/home.html" 
  style="width:100%; height:100vh; border:none;"
></iframe>
