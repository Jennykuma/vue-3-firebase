import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

// Title of file should match the method
const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  // Async function to get the data
  const load = async () => {
    try {
      // wait for it to finish and then store the response in res
      const res = await projectFirestore.collection('posts')
        .orderBy('createdAt', 'desc') // desc - newest will go first
        .get() // creates connection to the posts collection and grabs
      
      posts.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
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