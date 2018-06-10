<template>
  <div id="Computed">
    <h2>计算属性，方法，侦听</h2>
    <div>
      {{fullName}}
      {{age}}
    </div>
  </div>
</template>

<script>
export default{
  name: 'Computed',
  data () {
    return {
      firstName: 'DeLL',
      lastName: 'Lee',
      age: 28
    }
  },
  computed: {
    fullName: function () {
      console.log('计算了一次')
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>

<style scoped>

</style>
