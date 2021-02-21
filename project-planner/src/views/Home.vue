<template>
  <div class="home">
    <!-- Will show if there are entries in projects -->
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject'

export default {
  name: 'Home',
  components: { SingleProject },
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err))
  },
  methods: {
    handleDelete(id) {
      // Take out the deleted project from our data
      this.projects = this.projects.filter((project) => {
        return project.id !== id
      })
    }
  }
}
</script>
