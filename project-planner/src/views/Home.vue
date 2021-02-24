<template>
  <div class="home">
    <!-- $event is the data we send up -->
    <filterNav @filterChange="current = $event" :current="current"/>
    <!-- Will show if there are entries in projects -->
    <div v-if="projects.length">
      <!-- filteredProjects is a computed method that filters the projects to display -->
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete"  @complete="handleComplete" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject'
import FilterNav from '../components/FilterNav'

export default {
  name: 'Home',
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: 'all'
    }
  },
  computed: {
    filteredProjects() {
      if (this.current === 'completed')
        return this.projects.filter((project) => project.complete)
      if (this.current === 'ongoing')
        return this.projects.filter((project) => !project.complete)
      
      return this.projects
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
    },
    handleComplete(id) {
      // Update the local data of the chosen project
      let p = this.projects.find(project => {
        return project.id === id
      })
      p.complete = !p.complete
    }
  }
}
</script>
