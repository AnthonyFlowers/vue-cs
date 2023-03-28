<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="content">
    <Navbar />
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
export default {
  name: "Navbar",
  components: { Navbar },
};
</script>
<style scoped>
.content {
  width: 55rem;
  margin: 0 auto;
}
</style>
