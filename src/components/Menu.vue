<template>
  <div>
    <ul>
      <li><router-link to="/TodoList">TodoList实例</router-link></li>
      <li><router-link to="/VueTodos">VueTodos实例</router-link></li>
      <li><router-link to="/Computed">computed计算属性</router-link></li>
      <li><router-link to="/pages/ParentSon">父子组件通讯方式</router-link></li>
      <li><router-link to="/pages/SonParent">子父组件通讯方式</router-link></li>
      <li><router-link to="/pages/EmitOn">$emit/$on父子，兄弟，跨级通信</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 3px 10px;
  width: 100%;
}
a {
  color: #42b983;
}
</style>
