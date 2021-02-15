<template>
  <h1>{{ job.title }}</h1>

  <!-- jobs/:id will be inside $route.params -->
  <p>The job id is {{ id }}</p>

  <p>{{ job.details }}</p>
</template>

<script>
export default {
  props: ['id'], // we are now accepting the params: { id: .. } as a prop, so no need for this.$routes.params.id
  data() {
    return {
      job: null
    }
  },
  mounted() {
    // Fetch that data for us and return it in JSON format (asynchronous + returns a promise)
    fetch('http://localhost:3000/jobs/' + this.id)
      .then((response) => response.json()) // Get JSON data (asyncronous + returns a promise)
      .then(data => this.job = data) // Actual passed data (array of objects), set it to this.jobs
      .catch(err => console.log(err.message)) // Fire if we get an error
  }
}
</script>

<style>

</style>