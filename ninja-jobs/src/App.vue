<template>
  <div id="nav">
    <!-- Router Link tag has a 'to' attribute to say where we want to go -->
    <!-- Faster than sending a request to the server -->
    <router-link to="/">Home</router-link> |

    <!-- This notation can be handy because in the future, maybe the path attribute has to change. But the name attribute will still be the same -->
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>
