<template>
  <div>
    <b-table striped hover :items="getToday" />
  </div>
</template>

<style scoped>
div {
  padding-left: 10%;
  padding-right: 10%;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Today",
  data() {
    return {
      selected: null,
      //Add dataproperty and buttons to decide regular or effective volume
    };
  },
  computed: {
    ...mapGetters(["getToday"]),
  },
};
</script>