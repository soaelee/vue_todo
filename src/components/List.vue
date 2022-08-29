<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todo, index) in todos" :key="todo.item" class="shadow">
        <span class="buttonWrap" @click="$emit('toggleToDo', todo, index)">
          <font-awesome-icon
            icon="fa-solid fa-check"
            class="checkBtn"
            :class="{ checkBtnCompleted: todo.completed }"
          />
        </span>
        <span :class="{ textCompleted: todo.completed }">{{ todo.item }}</span>
        <span class="buttonWrap" @click="$emit('removeToDo', todo.item, index)">
          <font-awesome-icon
            icon="fa-solid fa-trash-arrow-up"
            class="deleteBtn"
          />
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["todos"]
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
  justify-content: space-between;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.buttonWrap {
  color: #de4343;
}

/* 리스트 아이템 트랜지현 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
