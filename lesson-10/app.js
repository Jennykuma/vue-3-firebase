const app = Vue.createApp({
  // Returns a data object inside the function
  // These properties are then accessible from our template
  data() {
    return {
      showBears: true,
      title: 'Rilakkuma',
      creator: 'Aki Kondo',
      age: 18
    }
  },
  // Any methods we want to run for this component should be placed in here
  methods: {
    toggleShowBears() {
      this.showBears = !this.showBears
    }
  }
})

app.mount('#app')