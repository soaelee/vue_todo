<template>
  <div class="inputBox shadow">
    <input type="text" v-model="value" @keyup.enter="addToDo" />
    <span class="icon" @click="addToDo">
      <font-awesome-icon icon="fa-solid fa-plus" class="addButton" />
    </span>

    <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->

    <portal to="destination" v-if="showModal">
      <Modal @close="showModal = false">
        <h3 slot="header">
          경고!
          <font-awesome-icon
            icon="fa-solid fa-xmark"
            @click="showModal = false"
          />
        </h3>
        <div slot="body">
          아무것도 입력하지 않으셨습니다.
        </div>
      </Modal>
    </portal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  name: "Input",
  data: function() {
    return {
      value: "",
      showModal: false
    };
  },
  methods: {
    addToDo: function() {
      if (this.value === "") {
        this.showModal = true;
        return;
      }
      this.$emit("addToDo", this.value);
      this.clearInput();
    },
    clearInput: function() {
      this.value = "";
    }
  },
  components: {
    Modal
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
