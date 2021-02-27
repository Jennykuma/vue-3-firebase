<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  setup() {
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

    // First argument: search (we watch this)
    // Second argument: function whenever we see that search has changed
    // Callback is called whenever search changes
    const stopWatch = watch(search, () => {
      console.log('watch function gooo')
    })

    // Callback is immediate once a ref changes
    const stopEffect = watchEffect(() => {
      console.log('watchEffect function ran', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value)) // Return an updated names value based on the search value
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }
  
    return { names, search, matchingNames, handleClick }
  }
}
</script>
