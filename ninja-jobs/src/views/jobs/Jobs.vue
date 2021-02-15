<template>
  <h1>Jobs</h1>
  <!-- Will only output if jobs has entries in it -->
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <!-- Will link to Job Details, and pass the id param with job.id -->
      <router-link :to="{ name: 'JobDetails', params: { id: job.id }}">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading jobs...</p>
  </div>
</template>

<script>
export default {
  // npx json-server --watch .\data\db.json
  data() {
    return {
      jobs: []
    }
  },
  mounted() {
    // Fetch that data for us and return it in JSON format (asynchronous + returns a promise)
    fetch('http://localhost:3000/jobs')
      .then((response) => response.json()) // Get JSON data (asyncronous + returns a promise)
      .then(data => this.jobs = data) // Actual passed data (array of objects), set it to this.jobs
      .catch(err => console.log(err.message)) // Fire if we get an error
  }
}
</script>

<style>
  .job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .job h2:hover {
    background: #ddd;
  }
  .job a{
    text-decoration: none;
  }
</style>