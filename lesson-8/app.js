const app = Vue.createApp({
  // Returns a data object inside the function
  // These properties are then accessible from our template
  data() {
    return {
      title: 'Rilakkuma',
      creator: 'Aki Kondo',
      age: 18
    }
  }
})

app.mount('#app')