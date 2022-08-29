<template>
  <div class="clearAllContainer" @click="$emit('clearToDos')">
    <span class="clearAllBtn">
      Clear All
    </span>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.clearAllContainer {
  position: fixed;
  bottom: 10px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  font-weight: 700;
  display: block;
}
</style>
