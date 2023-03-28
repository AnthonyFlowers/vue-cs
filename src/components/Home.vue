<script setup lang="ts"></script>
<template>
  <div>
    <p>
      This is a website built using Vue, Vite and typescript. It will contain
      examples of computer science topics and algorithms implemented using
      JavaScript
    </p>
    <p>Current topics:</p>
    <ul>
      <li>Search: searching sorted and unsorted data structures</li>
      <li>
        Graphs: using undirected graph traversal to find a path between two
        nodes. (May implement directed graphs at some point)
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {
  name: "Home",
  computed: {},
  methods: {},
};
</script>
<style scoped>
div {
  margin-inline: 12px;
}
</style>
