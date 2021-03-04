import { ref } from 'vue'

// Title of file should match the method
const getPosts = () => {
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

  return { posts, error, load }
}

// Export getPosts function so it can be imported in other files 
export default getPosts