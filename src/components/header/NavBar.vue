<template>
  <Banner />
  <nav>
    <div>
      <router-link
        v-for="(menu, idx) in nav"
        :key="idx"
        :to="'/' + menu.toLocaleLowerCase()"
      >
        <a href="">{{ menu }}</a>
      </router-link>
    </div>
    <div>
      <router-link to="/login"> <button>로그인</button></router-link>
    </div>
  </nav>
</template>

<script>
import Banner from "./Banner.vue";
export default {
  name: "NavBar",
  data() {
    return {
      nav: ["Home", "Products"],
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
  display: flex;
  justify-content: space-between;
}

nav > div > a {
  margin-left: 10px;
  font-size: 18px;
}

nav > a:hover {
  font-weight: 800;
}
</style>
