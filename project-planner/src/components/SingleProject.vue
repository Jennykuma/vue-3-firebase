<template>
  <!-- Will get the 'complete' class if project.complete is true -->
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="toggleDetails">{{ project.title }}</h3>
      <div class="icons">
        <span class="material-icons">edit</span>
        <span @click="deleteProject" class="material-icons">delete</span>
        <span @click="toggleComplete" class="material-icons tick">done</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return {
      showDetails: false,
      uri: 'http://localhost:3000/projects/' + this.project.id // store the endpoint of the project for reuse 
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails
    },
    deleteProject() {
      // Makes a delete request to the JSON server
      // Looks for the project with this id inside our projects resource and delete it
      fetch(this.uri, { method: 'DELETE' })
        .then(() => this.$emit('delete', this.project.id))
        .catch(err => console.log(err))
    },
    toggleComplete() {
      fetch(this.uri, { 
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }, // Sending data of type JSON with this request
        body: JSON.stringify({ complete: !this.project.complete }) // Toggle the completion of the project. Has to be a JSON string!
      }).then(() => {
        this.$emit('complete', this.project.id)
      }).catch((err) => console.log(err))
    }
  }
}
</script>

<style>
  .project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;
  }
  h3 {
    cursor: pointer;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
  }
  .material-icons:hover {
    color: #777;
  }
  /* completed projects */
  .project.complete {
    border-left: 4px solid #00ce89;
  }
  .project.complete .tick {
    color: #00ce89;
  }
</style>