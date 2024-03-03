<template>
  <NavBar />
  <MainPage />
</template>

<script>
import NavBar from "./components/header/NavBar.vue";
import MainPage from "./components/main/MainPage.vue";

export default {
  name: "app",
  components: { NavBar, MainPage },
};
</script>

<style>
* {
  cursor: default;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  margin: 0;
  padding: 0;
}

#app > div {
  display: flex;
  align-items: center;
  gap: 10px;
}

#app > .menu {
  background-color: blueviolet;
  color: #fff;
  display: flex;
  padding: 10px;
  gap: 10px;
}

#app > .menu > a {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
