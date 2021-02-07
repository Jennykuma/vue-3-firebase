const app = Vue.createApp({
  // Returns a data object inside the function
  // These properties are then accessible from our template
  data() {
    return {
      bearUrl: 'http://www.san-x.jp/characters/rilakkuma.html',
      showBears: true,
      bears: [
        { title: 'Rilakkuma', company: 'San-X', img: 'assets/rilakkuma.png', isFave: true },
        { title: 'Korilakkuma', company: 'San-X', img: 'assets/korilakkuma.png', isFave: true },
        { title: 'Kiiroitori', company: 'San-X', img: 'assets/kiiroitori.png', isFave: false },
        { title: 'Chairoikoguma', company: 'San-X', img: 'assets/koguma.png', isFave: false }
      ]
    }
  },
  // Any methods we want to run for this component should be placed in here
  methods: {
    toggleShowBears() {
      this.showBears = !this.showBears
    },
    toggleFave(bear) {
      bear.isFave = !bear.isFave
    }
  }
})

app.mount('#app')