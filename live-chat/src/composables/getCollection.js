// get collection - get stuff from the collection

import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
  const documents = ref()
  const error = ref(null)

  // create reference to collection
  let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')
    
  // snapshot contains all the docs and data of those docs at the moment in time
  const unsub = collectionRef.onSnapshot((snap) => { // first callback is if we get a correct snapshot
    console.log(snap)
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

  // fires whenever properties change
  // onInvalidate function runs whenever whatever component we're using this mounts
  watchEffect((onInvalidate) => {
    // unsub from previous collection when watcher is stopped (component unmounted)
    // ex: when we leave the chatroom
    onInvalidate(() => unsub())
  })

  return { documents, error }
}

export default getCollection