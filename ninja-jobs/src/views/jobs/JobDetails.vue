<template>
  <h1>Job Details Page</h1>

  <!-- jobs/:id will be inside $route.params -->
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
  props: ['id'] // we are now accepting the params: { id: .. } as a prop, so no need for this.$routes.params.id
}
</script>

<style>

</style>