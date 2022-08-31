<template>
  <div id="app">
    <Header />
    <Input />
    <List />
    <Footer />
    <portal-target name="destination" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Input from "./components/Input.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    Header,
    Footer,
    Input,
    List
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue";
}
body {
  text-align: center;
  background-color: #f6f6f6;
}
ul,
li {
  padding: 0;
  margin: 0;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
