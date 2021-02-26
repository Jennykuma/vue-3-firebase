<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    console.log('setup')

    // Ref for paragraph tag
    const p = ref(null)
    console.log(p, p.value) // Will be null

    let name = 'mario'
    let age = 30

    const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = 'hello, ninjas'
    }

    return { name, age, handleClick, p } // Allowing these variables to be accessed inside the template
    // These variables are not reactive but the data inside data() is reactive
  }
}
</script>
