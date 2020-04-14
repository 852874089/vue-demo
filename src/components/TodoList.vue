<template>
  <div>
  <div id="todoList">
    <input type="text" v-model="additem.inputValue" />
    <button v-on:click="handleBtnClick">提交</button>
    <ul>
       <li v-for="item in list" v-bind:key="item.id">{{item.inputValue}}</li>
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
      if (this.additem.inputValue === '') {
        alert('请在输入框里面输入信息！')
      } else {
        this.list.push(this.additem)
        this.additem = { inputValue: '' }
      }

      console.log(this.additem.inputValue)
    }
  }
}
</script>

<style scoped>

</style>
