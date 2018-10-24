import React, { Component } from "react"

class ToDoInput extends Component {

    constructor(props) {
        super(props);

        this.state = {value: 'test'};

        this.handelChange = this.handelChange.bind(this);
        this.addTodo = this.addTodo.bind(this);

        }


    handelChange(e) {

        console.log('Change here')
    }

    addTodo() {
        console.log('Added')
    }

    render () {
        return (
            <div className = "toDoListMain">
                <div className = "header">
                    <h1>
                        To Do List
                    </h1>
                </div>
                <div className = 'inputArea'>
                    <form className = 'formClass'>
                        <input 
                        placeholder = 'To Do text goes here' 
                        type = 'text' className = 'inputClass' 
                        value = '' 
                        onChange = {this.handelChange} 
                        />
                        
                        <button type='button' 
                        className = 'buttonClass'
                        onClick = { () => this.addTodo(this.state.value) }
                        >
                         Creat </button>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default ToDoInput;