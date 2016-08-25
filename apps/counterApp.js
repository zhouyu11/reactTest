import ReactDOM from "react-dom";
import React from "react";
import { createStore } from 'redux'
import Counter from '../components/counter.js'
import counterReducer from '../reducers/counterReducer.js'

const store = createStore(counterReducer);
console.log(store.getState());

function render() {
    ReactDOM.render(
        <Counter value={ store.getState() }
                 onHandleIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                 onHandleDecrement={() => store.dispatch({ type: 'DECREMENT' })}/>,
        document.getElementById('container')
    );
}

render();

store.subscribe(render);