<script setup lang="ts"></script>
<template>
  <div>
    <p>
      <a href="https://en.wikipedia.org/wiki/Linear_search" target="_blank"
        >Linear Search</a
      >: searches a structured array one element at a time until the search term
      is found.
    </p>
    <p>
      <a
        href="https://wikipedia.org/wiki/Linear_search#With_a_sentinel"
        target="_blank"
        >Sentinel Linear Search</a
      >: similar to a linear search but instead of checking at each element if
      that is the last element of the array, it appends the search term to the
      end of the array. This eliminates one comparison for each element of the
      array.
    </p>
  </div>
</template>
<script lang="ts">
export default {
  name: "Search",
};
</script>
<style scoped></style>
