import { ref } from 'vue'

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      // simulate delay
      // New promise will be resolved or rejected at some point
      // Until it is resolved/rejected, we wait for it 
      await new Promise(resolve => {
        setTimeout(resolve, 2000) // Wait 2000ms then call the resolve function
      })


      let data =  await fetch('http://localhost:3000/posts/' + id)
      
      if (!data.ok) {
        throw Error('that post does not exist')
      }

      post.value = await data.json()
    
    }
    catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { post, error, load }
}

export default getPost