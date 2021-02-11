<template>
  <div class="block" v-if="showBlock">
    click me
  </div>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
      showBlock: false
    }
  },
  mounted() { // Lifecycle Hooks - mounted() fires only when it's mounted to the DOM component
    setTimeout(() => {
      this.showBlock = true
    }, this.delay)
  },
  updated() { // updated() fires only when any data inside our component is updated
    console.log('component updated')
  },
  unmounted() { // unmounted() fires - good for when using vue router and navigating away from a page
    console.log('component unmounted')
  }
}
</script>

<style>
  .block {
    width: 400px;
    border-radius: 20px;
    background:#0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
  }
</style>