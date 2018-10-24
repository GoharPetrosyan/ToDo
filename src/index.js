import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import ToDoInput from './ToDoInput';
import NewToDo from './NewToDo';

let inputToDo = document.querySelector('#container');

ReactDOM.render (
    <div>
        <ToDoInput toDoText = ''  addTodo = {this.addTodo} />
        <NewToDo/>

    </div>,
    inputToDo
)