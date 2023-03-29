<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="content">
    <Navbar />
    <div class="main">
      <router-view></router-view>
    </div>
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
.main {
  margin-inline: 12px;
}
</style>
