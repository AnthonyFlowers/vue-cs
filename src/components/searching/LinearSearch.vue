<script setup lang="ts">
import { defineComponent } from "vue";
import { Result, LinearSearch } from "./search";
</script>
<template>
  <div>
    <p>Finding a value in an array using a linear search</p>
    <div>
      <label for="arrayInput">Enter a list of comma separated values: </label>
      <input
        ref="arrayInput"
        name="arrayInput"
        type="text"
        @input="updateValues"
      />
      <p>{{ values.join(",") }}</p>
      <button @click="">Search</button>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: "LinearSearch",
  data() {
    return {
      values: [] as string[],
      result: {} as Result,
    };
  },
  methods: {
    updateValues() {
      this.values = (<HTMLInputElement>this.$refs.arrayInput).value.split(",");
    },
    search() {},
  },
});
</script>
<style scoped></style>
