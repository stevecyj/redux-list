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
    return state;
};
