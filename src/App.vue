<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div>
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
<style scoped></style>
