const defaultState = {
    inputValue: '寫些東西吧！',
    list: ['吃飯', '睡覺', '再吃飯', '再睡覺', '又吃飯', '又睡覺', '繼續吃飯', '繼續睡覺']
};
export default (state = defaultState, action) => {
    // console.log(state, action);
    // Reducer裡只能接收 state，不能改變 state
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if (action.type === 'deleteItem') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
};
