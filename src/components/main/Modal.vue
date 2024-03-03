<template>
  <div class="modal">
    <h1>상품 상세 설명</h1>
    <h4>title :{{ item.title }}</h4>
    <div class="img-wrap">
      <img :src="item.img.src" :alt="item.img.alt" />
    </div>
    <p>{{ item.content }}</p>
    <button @click="toggle(item)">닫기</button>
  </div>
</template>

<script>
export default {
  name: "ModalView",
  props: { item: Object, toggle: Function },
};
</script>

<style scoped>
.modal {
  position: fixed;
  width: 50%;
  height: 60%;
  background: #edffff;
  border-radius: 20px;
  box-shadow: 3px 5px 5px 2px rgba(176, 175, 175, 0.692);
  top: calc(50% - 30%);
  left: calc(50% - 25%);
  text-align: center;
}

.modal > .img-wrap {
  width: 70%;
  height: 50%;

  margin: auto;
}

.modal > .img-wrap > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
