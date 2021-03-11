<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList'
import TagCloud from '../components/TagCloud'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner'

export default {
  name: 'Home',
  components: { PostList, Spinner, TagCloud },
  setup() {

    // Initially, posts and error will be an empty array and null respectively
    const { posts, error, load } = getPosts() // returns posts, error and load
    
    load() // Invoke the load method and it will run the load method
    // After the method, posts and error are not empty based on the results

    return { posts, error }
  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }

  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>
