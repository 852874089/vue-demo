<template>
  <div>
    <h4>组件A： {{ name }}</h4>
    <button @click="send">数据发送给C组件</button>
  </div>
</template>

<script>
import rootvue from '../../../eventroot/eventroot'
export default {
  name: 'compoentA',
  data () {
    return {
      name: 'zjhe'
    }
  },
  methods: {
    send () {
      rootvue.$emit('data-a', this.name)
    }
  }
}
</script>

<style scoped>

</style>
