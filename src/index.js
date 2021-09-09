import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

// 액션
const ADD = "ADD";
const MINUS = "MINUS";

// 리듀서 state와 action을 인자로 받음
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// 스토어 생성
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

// 스토어 구독(state 변화 감지)
countStore.subscribe(onChange);

// 디스패치로 리듀서한테 액션을 전해줌
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
