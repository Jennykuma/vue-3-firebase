<template>
  <h1>Job Details Page</h1>

  <!-- jobs/:id will be inside $route.params -->
  <p>The job id is {{ $route.params.id }}</p>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id // use 'this' to reference the component
    }
  }
}
</script>

<style>

</style>