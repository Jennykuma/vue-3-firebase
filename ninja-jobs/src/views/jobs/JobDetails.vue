<template>
  <!-- job is null at first, so we won't show the job stuff until job is assigned to data -->
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <!-- jobs/:id will be inside $route.params -->
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
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
    fetch('http://localhost:3000/jobs/' + this.id)
      .then((response) => response.json())
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style>

</style>