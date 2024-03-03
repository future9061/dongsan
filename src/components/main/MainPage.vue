<template>
  <main>
    <div>
      <div class="item" v-for="item in products" :key="item.id">
        <img :src="item.img.src" :alt="item.img.alt" @click="toggle(item)" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.price }} 만원</p>

        <button @click="increase(item)">허위매물 신고</button
        ><span>신고 수 {{ item.counter }}</span>
      </div>
      <Modal
        v-if="modalToggle.togg"
        :item="modalToggle.selectItem"
        :toggle="toggle"
      />
    </div>
  </main>
</template>

<script>
import Modal from "./Modal.vue";
import { products } from "../../data";
import { ref } from "vue";

export default {
  name: "MainPage",
  data() {
    const modalToggle = { selectItem: ref(null), togg: ref(false) };
    return { products, modalToggle };
  },
  methods: {
    increase(item) {
      item.counter++;
    },
    toggle(item) {
      this.modalToggle.togg = !this.modalToggle.togg;
      this.modalToggle.selectItem = item;
    },
  },
  components: { Modal },
};
</script>

<style scoped>
main {
  width: 90%;
  margin: auto;
}

main > div {
  display: flex;
  gap: 5%;
  justify-content: start;
  margin: auto;
  flex-wrap: wrap;
}

main > div > .item {
  width: 30%;
  padding: 10px;
  box-shadow: 3px 5px 5px 2px rgba(189, 189, 189, 0.541);
  border-radius: 10px;
  margin-bottom: 20px;
}

main > div > .item > img {
  width: 100%;
}
</style>
