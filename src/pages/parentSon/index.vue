<template>
    <div>
      <h2>{{ mes }}</h2>
      <bar :list="list"></bar>
    </div>
</template>

<script>
import Bar from './component/bar'
export default {
  name: 'index',
  components: {
    Bar
  },
  data () {
    return {
      list: ['选项一', '选项二', '选项三'],
      mes: '父子组件通讯'
    }
  }
}
</script>

<style scoped>

</style>
