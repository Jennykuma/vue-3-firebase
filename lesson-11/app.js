const app = Vue.createApp({
  // Returns a data object inside the function
  // These properties are then accessible from our template
  data() {
    return {
      showBears: true,
      title: 'Rilakkuma',
      creator: 'Aki Kondo',
      age: 18,
      x: 0,
      y: 0
    }
  },
  // Any methods we want to run for this component should be placed in here
  methods: {
    toggleShowBears() {
      this.showBears = !this.showBears
    },
    handleEvent(e, data) { // e is the event object
      console.log(e, e.type)
      if (data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})

app.mount('#app')