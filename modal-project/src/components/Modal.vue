<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'text', 'theme'],
  methods: {
    // A custom event can be fired from a component
    // and then it an be listened to from the parent component
    closeModal() {
      this.$emit('close') // the name of the event we want to emit
    }
  }
}
</script>

<style scoped>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
  }

  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }

  .modal.sale {
    background: crimson;
    color: white;
  }
  .modal.sale h1 {
    color: white;
  }
</style>