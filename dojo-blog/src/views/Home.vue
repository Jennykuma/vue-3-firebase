<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    const p = ref(null)

    // Just because these are constants doesn't mean the values can't change
    // It means the reference object is a constant, but the v alue inside can change
    // Access the value ex: name.value, age.value
    const name = ref('mario')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'luigi'
      age.value = 35
    }

    return { name, age, handleClick, p }
  }
}
</script>
