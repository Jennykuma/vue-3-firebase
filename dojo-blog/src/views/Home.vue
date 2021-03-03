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
import { ref } from 'vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const posts = ref([])
    const error = ref(null)

    // Async function to get the data
    const load = async () => {
      try {
        // Before going down to the next line, it will wait for the fetch to be complete
        // Once complete, the respons will be stored in data
        let data =  await fetch('http://localhost:3000/posts')
        
        // If data is not ok
        if (!data.ok) {
          throw Error('no data available')
        }

        // Take the data response and use JSON on it
        // Asynchronous, returns a promise. Once it's done, the value will be in posts.value
        posts.value = await data.json()
      
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    load()
  
    return { posts, error }
  }
}
</script>
