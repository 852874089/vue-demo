<template>
  <div>
    <h2 ref="myTitle">{{ mes }}</h2>
    <!--子组件传过来的数据不好直接用数据更改父组件的数据mes，单向数据流应该新建一个数据 newMes赋值到mes-->
    <!--dom 操作获取数据 ref-->
    <h3>{{ message }}</h3>
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
      newMes: this.message
    }
  },
  methods: {
    getChildContent (str) {
      console.log(str)
      this.$refs.myTitle.innerHTML = str
      this.newMes = str
    }
  }
}
</script>

<style scoped>

</style>
