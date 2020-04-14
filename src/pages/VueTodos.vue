<template>
    <div>
      <h2>{{ title }}</h2>
      <ul class="todos">
        <li v-for="todo in todos" :key="todo.id">
          <label>
            {{ todo.value }}
          </label>
          <time>{{ todo.create | dateFormat}}</time>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'vue-todos',
  data () {
    return {
      title: 'vue-todos',
      days: '',
      todos: [
        {
          id: '1',
          value: '任务一',
          create: new Date().getTime()
        },
        {
          id: '2',
          value: '任务二',
          create: Date.now()
        },
        {
          id: '3',
          value: '任务三',
          create: Date.now() + 300000

        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
