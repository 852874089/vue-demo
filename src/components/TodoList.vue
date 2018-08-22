<template>
  <div>
  <div id="todoList">
    <input type="text" v-model="additem.inputValue" />
    <button v-on:click="handleBtnClick">提交</button>
    <ul>
       <li v-for="item in list">{{item.inputValue}}</li>
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
      additem: {inputValue: ''}
    }
  },

  methods: {
    handleBtnClick: function () {
      this.list.push(this.additem)
      this.additem = {inputValue: ''}
    }
  }
}
</script>

<style scoped>

</style>
