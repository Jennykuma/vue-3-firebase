const app = Vue.createApp({
  // Returns a data object inside the function
  // These properties are then accessible from our template
  data() {
    return {
      showBears: true,
      bears: [
        { title: 'Rilakkuma', company: 'San-X' },
        { title: 'Korilakkuma', company: 'San-X' },
        { title: 'Kiiroitori', company: 'San-X' },
        { title: 'Chairoikoguma', company: 'San-X' }
      ]
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