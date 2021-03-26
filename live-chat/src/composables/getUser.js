import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const user = ref(projectAuth.currentUser)

// _user is what we get back everytime there is an auth change
projectAuth.onAuthStateChanged(_user => {
  console.log('User state change. Current user is: ', _user)
  user.value = _user
})

const getUser = () => {
  return { user }
}

export default getUser