<template>
    <div>
      <h2>{{ mes }}</h2>
      <ul>
        <li v-for="item in parentData" :key="item.id">{{ item }}</li>
      </ul>
      <!--与子组件titleChanged自定义事件保持一致-->
      <son v-on:titleChanged="updateTitle"></son>
      <!--updateTitle($event)接受传递过来的文字-->
    </div>
</template>

<script>
import Son from './component/son'
export default {
  name: 'index',
  components: {
    Son
  },
  data () {
    return {
      mes: '子组件向父组件传值（通过事件形式）',
      title: '传递的是一个值',
      parentData: []
    }
  },
  methods: {
    updateTitle (data) {
      debugger
      this.parentData = data
    }
  }
}
</script>

<style scoped>

</style>
