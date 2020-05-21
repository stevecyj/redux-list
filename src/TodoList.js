import React, { Component } from "react";
import store from "./store";
import {
  getTodoList,
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getListAction,
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";
import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }
  componentDidMount() {
    // const action = getTodoList();
    // store.dispatch(action);
    axios
      .get(
        "https://www.fastmock.site/mock/028078cc45f813b3039e6ae524a52845/test/todolist"
      )
      .then((res) => {
        // console.log(data);
        const data = res.data;
        const action = getListAction(data);
        store.dispatch(action);
      });
  }

  storeChange() {
    this.setState(store.getState());
  }

  changeInputValue(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }

  clickBtn() {
    const action = addItemAction();
    store.dispatch(action);
  }

  deleteItem(index) {
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
