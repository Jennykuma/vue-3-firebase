<template>
  <h1>{{ title }}</h1>

  <!-- Template Refs allow us to store a refernece to a DOM element inside a variable -->
  <!-- Then when we have that reference, we can use regular JS methods + properties on it to change classes, text content, styles, etc -->
  <input text="text" ref="name">
  <button @click="handleClick">Click me</button>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'My First Vue App :)'
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name) // Gives a handle on the <input> field
      this.$refs.name.classList.add('active') // Add the class 'active' onto the input element
      this.$refs.name.focus() // Focuses on the input element
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
