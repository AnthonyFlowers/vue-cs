<script setup lang="ts">
import { defineComponent } from "vue";
import {
  Result,
  LinearSearch,
  SentinelLinearSearch,
  BinarySearch,
} from "./search";
</script>
<template>
  <div>
    <p>Finding a value in an array using various search algorithms</p>
    <div>
      <div>
        <label for="arrayInput">Enter a list of comma separated values: </label>
        <input
          :value="value"
          name="arrayInput"
          @input="(event: Event) => (value = (<HTMLInputElement>event.target).value)"
        />
      </div>
      <div>
        <label for="searchTerm">Search Term: </label>
        <input
          name="searchTerm"
          :value="searchValue"
          @input="(event: Event) => searchValue = (<HTMLInputElement>event.target).value"
        />
      </div>
      <button @click="search">Search</button>
      <div v-for="result in results">
        <p>{{ result.algorithm }} (found: {{ result.found }})</p>
        <p v-if="result.algorithm === 'Binary'">
          Sorted Array: {{ sortedValues }}
        </p>
        <p>{{ result.searchPath.join(" => ") }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: "LinearSearch",
  data() {
    return {
      value: "",
      sortedValues: [] as string[],
      searchValue: "",
      results: [] as Result[],
    };
  },
  methods: {
    search() {
      this.results.length = 0;
      this.sortedValues.length = 0;
      let valueList = [] as string[];
      if (this.value !== "") valueList = this.value.split(",");
      this.results.push(LinearSearch.search([...valueList], this.searchValue));
      this.results.push(
        SentinelLinearSearch.search([...valueList], this.searchValue)
      );
      this.sortedValues = [...valueList].sort();
      this.results.push(
        BinarySearch.search(this.sortedValues, this.searchValue)
      );
      console.log(JSON.stringify(this.results, null, 2));
    },
  },
  computed: {
    getSortedValues() {
      return this.sortedValues;
    },
  },
});
</script>
<style scoped></style>
