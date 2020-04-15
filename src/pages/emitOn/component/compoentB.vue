<template>
  <div>
    <h4>组件B: {{ age }}</h4>
    <button  @click="send">数据发送到C组件</button>
  </div>
</template>

<script>
import rootvue from '../../../eventroot/eventroot'
export default {
  name: 'compoentB',
  data () {
    return {
      age: '20'
    }
  },
  methods: {
    send () {
      rootvue.$emit('data-b', this.age)
    }
  }
}
</script>

<style scoped>

</style>
