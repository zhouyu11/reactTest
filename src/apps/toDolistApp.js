import ReactDOM from "react-dom";
import React from "react";
import ToDoList from '../components/toDoList/toDoList';

const items = ['task1'];

ReactDOM.render(
    <ToDoList items = { items } />,
    document.getElementById('container')
);

