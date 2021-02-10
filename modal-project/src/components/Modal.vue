<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <!-- Slots are useful for passing for custom templates into components, which we don't do with props -->
      <!-- Props are for simple strings/booleans -->
      <!-- So whatever we put inside the template (other component), it will put that where the splot is registered inside the component -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header'],
  methods: {
    closeModal() {
      this.$emit('close')
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