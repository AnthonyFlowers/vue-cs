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
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Binary_search_algorithm"
        target="_blank"
        >Binary Search</a
      >: searches sorted arrays comparing the value at the middle index of the
      search array between a high and low index. The high and low indexs are
      initially the length of the array and 0. The indexes are updated if the
      middle value is not the value being searched for. If the search value is
      higher than the middle index the low index is set to the middle index and
      a new middle is calculated. If the search value is lower than the middle
      index the high index is set to the middle index and a new middle is
      calculated. The search continues until the low and high indexes cross or
      the search value is found.
    </p>
  </div>
</template>
<script lang="ts">
export default {
  name: "Search",
};
</script>
<style scoped></style>
