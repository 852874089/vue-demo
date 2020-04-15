<template>
  <div>
    <h2>$emit/$on</h2>
    <p>这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件,巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级</p>
    <h2>距离三个兄弟组件传值，C组件或者A，B组件的数据</h2>
    <compoent-a></compoent-a>
    <compoent-b></compoent-b>
    <compoent-c></compoent-c>
  </div>
</template>

<script>
import rootvue from '../../eventroot/eventroot' // 引入空的vue实例作为中央事件总线（事件中心）
import CompoentA from './component/compoentA'
import CompoentB from './component/compoentB'
import CompoentC from './component/compoentC'
export default {
  name: 'index',
  components: {CompoentC, CompoentB, CompoentA}
}
</script>

<style scoped>

</style>
