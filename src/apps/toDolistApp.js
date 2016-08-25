import ReactDOM from "react-dom";
import React from "react";
import ToDoListView from '../components/toDoList/todoListView';

const items = ['task1'];

ReactDOM.render(
    <ToDoListView items = { items } />,
    document.getElementById('container')
);

