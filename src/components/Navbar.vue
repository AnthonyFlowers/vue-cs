<script setup lang="ts"></script>
<template>
  <ul>
    <li><router-link to="/">Home</router-link></li>

    <li class="dropdown">
      <router-link to="/arrays" class="dropbtn">Arrays</router-link>
      <div class="dropdown-content">
        <router-link to="/arrays/search">Search</router-link>
        <router-link to="/arrays/sort">Sort</router-link>
      </div>
    </li>
    <li class="dropdown">
      <router-link to="/graph">Graphs</router-link>
      <div class="dropdown-content">
        <router-link to="/graph/dijkstra-algo"
          >Dijkstra's Algorithm</router-link
        >
        <router-link to="/graph/prim-algo">Prim's Algorithm</router-link>
      </div>
    </li>

    <li style="float: right"><a class="active" href="#about">About</a></li>
  </ul>
</template>
<script>
export default {
  name: "Navbar",
  computed: {
    activeLink() {
      console.log(this.$route.path);
    },
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 8px;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a,
.dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover,
.dropdown:hover .dropbtn,
.router-link-active {
  background-color: red;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
