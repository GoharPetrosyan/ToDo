import React, { Component } from "react"
import './index.css';
import ToDoInput from './ToDoInput';
import NewToDo from './NewToDo';



class App extends Component {
    constructor (props) {
        super(props);

        this.state = {

            todo: [ ],
            nextid: 4
        }

        this.addTodo = this.addTodo.bind(this)

    }

    addTodo(todoText) {

        const prevuesTodo = this.state.todo;
        prevuesTodo.push({id: prevuesTodo.length + 1, text: todoText});
        this.setState({
            todo: prevuesTodo
        })
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
