<template>
  <div>
    <h2>{{ mes }}</h2>
    <h3>{{ newMes }}</h3>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item }}</li>
    </ul>
    <slider @changeContent="getChildContent" :list="list"></slider>
  </div>
</template>

<script>
import Slider from './component/slider'
export default {
  name: 'bar',
  components: {
    Slider
  },
  // props接收父组件的数据
  props: [
    'list'
  ],
  data () {
    return {
      mes: '第一层子组件',
      newMes: ''
    }
  },
  methods: {
    getChildContent (str) {
      console.log(str)
      this.newMes = str
    }
  }
}
</script>

<style scoped>

</style>
