<template>
    <div>
      <h2>{{ mes }}</h2>
      <ul>
        <li @click="getContent" v-for="item in list" :key="item.id">{{ item }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'slider',
  props: {
    list: {
      type: Array,
      // 设置默认值 没有接收到父组件传递过来的数据就展示默认值
      default: ['选项一111', '选项二222', '选项三333']
    }
  },
  data () {
    return {
      mes: '第二层子组件'
    }
  },
  methods: {
    getContent (event) {
      // 子组件选择li把数据传给父组件
      // console.log(this)
      // console.log(event.target.innerHTML)
      this.$emit('changeContent', event.target.innerHTML)
    }
  }
}
</script>

<style scoped>

</style>
