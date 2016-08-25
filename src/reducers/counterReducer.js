export default function counterReducer(state=0, action) {
    console.log('action type', action.type);
    switch (action.type) {
        case 'INCREMENT':
            console.log('+');
            return state + 1;
        case 'DECREMENT':
            console.log('-');
            return state - 1;
        default:
            return state;
    }
}
