<template>
  <form>
    <label>Email:</label>
    <!-- Two way data binding - Values are bound 2-ways between the template input and the component data itself -->
    <!-- If the value updates from user input, we bind that update to the component data -->
    <!-- If the component data updates, we bind that update to the user input -->
    
    <!-- v-model is used to track the whatever is being typed in the input and sets it equal to whatever data (ex: email) --> 
    <input type="email" required v-model="email">

    <label>Password:</label>
    <input type="password" required v-model="password">
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
</style>