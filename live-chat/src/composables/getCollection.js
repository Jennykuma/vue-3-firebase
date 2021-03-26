// get collection - get stuff from the collection

import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
  const documents = ref()
  const error = ref(null)

  // create reference to collection
  let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')
    
  // snapshot contains all the docs and data of those docs at the moment in time
  collectionRef.onSnapshot((snap) => { // first callback is if we get a correct snapshot
    let results = []
    snap.docs.forEach(doc => {
      // doc.data contains message, name, createdAt
      doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
    })
    documents.value = results
    error.value = null
  }, (err) => { // second callback is if there is an error
    console.log(err.message)
    documents.value = null
    error.value = "could not fetch data"
  })

  return { documents, error }
}

export default getCollection