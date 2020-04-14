<template>
  <div>
    <br>
    <div @click="changeTitle">{{ title }}</div>
    <h2>{{ value }}</h2>
    <input type="text" v-model="value1" placeholder="这是参数1">
    <input type="text" v-model="value2" placeholder="这是参数2">
  </div>
</template>

<script>
export default {
  name: 'son',
  data () {
    return {
      title: '我是子组件  点击我传递参数',
      value: '这是要传递的参数',
      value1: '这是参数1',
      value2: '这是参数2'
    }
  },
  methods: {
    changeTitle () {
      this.$emit('titleChanged', this.value) // 单个参数
      this.$emit('titleChanged', [this.value, this.value1, this.value2]) // 自定义事件  传递值“子向父组件传值”
    }
  }
}
</script>

<style scoped>

</style>
