---
aside: false
editLink: false
head:
  - - script
    - src: https://unpkg.com/klinecharts/dist/klinecharts.min.js
      defer: true
      id: klinecharts-script
---

# 时区

<script setup>
import Chart from '../components/SampleChart.vue'
import data from '../data/sample/timezone/index.json'
</script>
<Chart :js="data['index.js']" :html="data['index.html']" :css="data['index.css']" title="时区"/>

<!--@include: @/data/sample/timezone/index.md-->