---
aside: false
editLink: false
head:
  - - script
    - src: https://unpkg.com/klinecharts/dist/klinecharts.min.js
      defer: true
      id: klinecharts-script
---

# Tooltip

<script setup>
import Chart from '../../components/SampleChart.vue'
import data from '../../data/sample/tooltip/index.json'
</script>
<Chart :js="data['index.js']" :html="data['index.html']" :css="data['index.css']" title="Tooltip"/>

<!--@include: @/data/sample/tooltip/index.md-->
