import React, { Component } from "react"

class ToDoInput extends Component {

    constructor(props) {
        super(props);

        this.state = {value: ''};

        this.handelChange = this.handelChange.bind(this);
        this.addTodo = this.addTodo.bind(this);

        }


    handelChange(e) {

        this.setState({value: e.target.value});
    }

    addTodo(todo) {

        if (todo.length > 0) {
            this.props.addTodo(todo);
            this.setState({value: ''})
        }
        
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
                        type = 'text' 
                        value = {this.state.value}
                        className = 'inputClass' 
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