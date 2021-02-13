<template>
  <form>
    <!-- Two way data binding - Values are bound 2-ways between the template input and the component data itself -->
    <!-- If the value updates from user input, we bind that update to the component data -->
    <!-- If the component data updates, we bind that update to the user input -->

    <!-- v-model is used to track the whatever is being typed in the input and sets it equal to whatever data (ex: email) -->
    <label>Email:</label>
    <input type="email" required v-model="email">

    <label>Password:</label>
    <input type="password" required v-model="password">

    <label>Role:</label>
    <select v-model="role"> <!-- v-model can be used with select fields too! -->
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <div class="terms">
      <input type="checkbox" v-model="terms" required>
      <label>Accept terms and conditions</label>
    </div>

    <div>
      <input type="checkbox" value="Jenny" v-model="names">
      <label>Jenny</label>
    </div>
        <div>
      <input type="checkbox" value="Rilakkuma" v-model="names">
      <label>Rilakkuma</label>
    </div>
        <div>
      <input type="checkbox" value="Korilakkuma" v-model="names">
      <label>Korilakkuma</label>
    </div>
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ terms }}</p>
  <p>Names: {{ names }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: 'designer', // The inital value would be designer instead of blank
      terms: false,
      names: []
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
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
</style>