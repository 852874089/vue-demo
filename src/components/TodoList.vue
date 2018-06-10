<template>
  <div>
  <div id="todoList">
    <input type="text" v-model="inputValue" />
    <button v-on:click="handleBtnClick">提交</button>
    <ul>
       <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default{
  name: 'TodoList',
  data () {
    return {
      list: [],
      inputValue: ''
    }
  },

  methods: {
    handleBtnClick: function () {
      this.list.push(this.inputValue)
      this.inputValue = ''
    }
  }
}
</script>

<style scoped>

</style>
