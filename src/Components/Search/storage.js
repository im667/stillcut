import { createPastDate } from "./helpers.js";

const storage = {
  keywordData: [
    { id: 1, keyword: "초상화" },
    { id: 2, keyword: "스틸컷" },
    { id: 3, keyword: "얼굴" },
  ],

  historyData: [
    { id: 1, keyword: "검색기록1", date: createPastDate(3) },
    { id: 2, keyword: "검색기록2", date: createPastDate(2) },
    { id: 3, keyword: "검색기록3", date: createPastDate(1) },
  ],

  productData: [
    {
      id: 1,
      name: "김윤진 초상화",
      imageUrl: "/Images/Contents/Contents5.jpg",
    },
    {
      id: 2,
      name: "반지 스틸컷",
      imageUrl: "/Images/Contents/Contents6.jpg",
    },
    {
      id: 3,
      name: "김윤진 얼굴",
      imageUrl: "/Images/Contents/Contents2.jpg",
    },
  ],
};

export default storage;
