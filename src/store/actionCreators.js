import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./actionTypes";
import axios from "axios";

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value,
});

export const addItemAction = () => ({
  type: ADD_ITEM,
});

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index,
});

export const getListAction = (data) => ({
  type: GET_LIST,
  data,
});

// export const getTodoList = () => {
//   return (dispatch) => {
//     axios
//       .get(
//         "https://www.fastmock.site/mock/028078cc45f813b3039e6ae524a52845/test/todolist"
//       )
//       .then((res) => {
//         const data = res.data;
//         // console.log(data);
//         const action = getListAction(data);
//         store.dispatch(action);
//       });
//   };
// };
