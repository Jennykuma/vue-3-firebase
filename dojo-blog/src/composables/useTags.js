import { ref } from 'vue'

const useTags = (posts) => {
  const tags = ref([])
  const tagSet = new Set()

  posts.forEach(item => {
    item.tags.forEach(tag => tagSet.add(tag)) // add each tag to the set
  })

  tags.value = [...tagSet]

  return { tags }
}

export default useTags