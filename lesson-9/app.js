const app = Vue.createApp({
  // Returns a data object inside the function
  // These properties are then accessible from our template
  data() {
    return {
      title: 'Rilakkuma',
      creator: 'Aki Kondo',
      age: 18
    }
  },
  // Any methods we want to run for this component should be placed in here
  methods: {
    changeTitle(title) {
      //this.title = 'Bear in relaxed mood'
      this.title = title
    }
  }
})

app.mount('#app')