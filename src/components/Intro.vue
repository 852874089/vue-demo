<template>
  <div>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {
      msg: 'zjhe的vue.js学习笔记'
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
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
