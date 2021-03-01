<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from '../components/SinglePost'

export default {
  props: ['posts'],
  components: { SinglePost },
  setup(props) {
    console.log(props.posts)

    // Lifecycle hooks for the component
    onMounted(() => console.log('component mounted'))
    onUnmounted(() => console.log('component unmounted'))
    onUpdated(() => console.log('component updated'))
  }
}
</script>

<style>

</style>