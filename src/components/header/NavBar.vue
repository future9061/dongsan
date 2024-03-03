<template>
  <Banner />
  <nav>
    <a href="" v-for="(menu, idx) in nav" :key="idx">{{ menu }}</a>
  </nav>
</template>

<script>
import Banner from "./Banner.vue";
export default {
  name: "NavBar",
  data() {
    return {
      nav: ["Home", "About", "Products"],
    };
  },
  components: { Banner },
};
</script>

<style scoped>
nav {
  background-color: blueviolet;
  padding: 20px 10px;
  border-radius: 10px;
  color: #fff;
  width: 90%;
  margin: 20px auto;
}

nav > a {
  margin-left: 10px;
  font-size: 18px;
}

nav > a:hover {
  font-weight: 800;
}
</style>
