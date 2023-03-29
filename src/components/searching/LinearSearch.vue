<script setup lang="ts">
import { defineComponent } from "vue";
import { Result, LinearSearch, SentinelLinearSearch } from "./search";
</script>
<template>
  <div>
    <p>Finding a value in an array using a linear search</p>
    <div>
      <label for="arrayInput">Enter a list of comma separated values: </label>
      <input
        :value="value"
        name="arrayInput"
        @input="(event: Event) => (value = (<HTMLInputElement>event.target).value)"
      />
      <p>{{ value }}</p>
      <button @click="search">Search</button>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: "LinearSearch",
  data() {
    return {
      value: "",
      results: [] as Result[],
    };
  },
  methods: {
    search() {
      const valueList = this.value.split(",");
      this.results.push(LinearSearch.search([...valueList], "a"));
      this.results.push(SentinelLinearSearch.search([...valueList], "a"));
      console.log(JSON.stringify(this.results, null, 2));
    },
  },
});
</script>
<style scoped></style>
