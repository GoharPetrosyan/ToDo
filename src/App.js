import React, { Component } from "react"
import './index.css';
import ToDoInput from './ToDoInput';
import NewToDo from './NewToDo';



class App extends Component {
    constructor (props) {
        super(props);

        this.state = {

            todo: [
                {id: 0, text: 'make Dinner tonight!'},
                {id: 1, text: 'Dinner'},
                {id: 3, text: 'Tonight'},
            ],
            nextid: 3
        }

        this.addTodo = this.addTodo.bind(this)

    }

    addTodo(todoText) {
        console.log('ToDoAdded: ', todoText)
    }

    render() {
        return (


            <div className = 'app'>
                <ToDoInput todoText = '' addTodo = {this.addTodo} />
                <ul>
                    {
                        this.state.todo.map((todo) => {
                        return  <NewToDo todoContent={todo.text} key = {todo.id} id = {todo.id} />
                        })
                    }
                </ul>
            </div>
            
        )
    }
}

export default App;
