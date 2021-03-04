<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from '../components/PostList'
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
  components: { PostList },
  setup() {

    // Initially, posts and error will be an empty array and null respectively
    const { posts, error, load } = getPosts() // returns posts, error and load
    
    load() // Invoke the load method and it will run the load method
    // After the method, posts and error are not empty based on the results

    return { posts, error }
  }
}
</script>
