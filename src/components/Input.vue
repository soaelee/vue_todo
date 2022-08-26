<template>
  <div class="inputBox shadow">
    <input type="text" v-model="value" @keyup.enter="addToDo" />
    <span class="icon" @click="addToDo">
      <font-awesome-icon icon="fa-solid fa-plus" class="addButton" />
    </span>
  </div>
</template>

<script>
export default {
  name: "Input",
  data: function() {
    return {
      value: ""
    };
  },
  methods: {
    addToDo: function() {
      console.log(this.value);
      localStorage.setItem(this.value, this.value);
      this.clearInput();
    },
    clearInput: function() {
      this.value = "";
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  display: flex;
  margin: 0 10px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  flex: 1;
  padding-left: 10px;
}
.icon {
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.icon .addButton {
  color: white;
  vertical-align: middle;
}
</style>
