import { ref } from 'vue';

export const products = [
  {
    id: 0,
    title: "역삼동원룸",
    price: 60,
    counter: ref(0),
    img: {
      src: new URL("@/assets/room1.jpg", import.meta.url).href,
      alt: "1번방",
    },
    content: "1번 방입니다.",

  },
  {
    id: 1,
    title: "천호동원룸",
    price: 70,
    counter: ref(0),
    img: {
      src: new URL("@/assets/room2.jpg", import.meta.url).href,
      alt: "2번방",
    },
    content: "2번 방입니다.",

  },
  {
    id: 2,
    title: "마포구원룸",
    price: 80,
    counter: ref(0),
    img: {
      src: new URL("@/assets/room3.jpg", import.meta.url).href,
      alt: "3번방",
    },
    content: "3번 방입니다.",

  },
  {
    id: 3,
    title: "송파구원룸",
    price: 80,
    counter: ref(0),
    img: {
      src: new URL("@/assets/room4.jpg", import.meta.url).href,
      alt: "4번방",
    },
    content: "4번 방입니다.",

  },
  {
    id: 4,
    title: "화양원룸",
    price: 80,
    counter: ref(0),
    img: {
      src: new URL("@/assets/room5.jpg", import.meta.url).href,
      alt: "5번방",
    },
    content: "5번 방입니다.",

  },
]




