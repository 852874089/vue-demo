<template>
  <div>
    <h2>
      C组件：{{ name }} , {{ age }}
    </h2>
  </div>
</template>

<script>
import rootvue from '../../../eventroot/eventroot'
export default {
  name: 'compoentC',
  data () {
    return {
      name: '',
      age: ''
    }
  },
  mounted () {
    rootvue.$on('data-a', name => {
      this.name = name // 箭头函数内部不会产生新的this，这边如果不用=>,this指代Event
    })
    rootvue.$on('data-b', age => {
      this.age = age // 箭头函数内部不会产生新的this，这边如果不用=>,this指代Event
    })
  }
}
</script>

<style scoped>

</style>
