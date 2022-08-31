<template>
  <div>
    <p>{{ price }}</p>
    <p>{{ originalPrice }}</p>
    <p>{{ doublePrice }}</p>
    <p>{{ triplePrice }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Demo",
  computed: {
    ...mapState(["price"]),
    ...mapGetters(["originalPrice", "doublePrice", "triplePrice"])
  }
};
</script>

<style scoped></style>
