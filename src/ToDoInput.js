import React, { Component } from "react"

class ToDoInput extends Component {

    constructor(props) {
        super(props);

        this.state = {value: ''};
        this.totaId = 0;

        this.handelChange = this.handelChange.bind(this);
        this.writeTodo = this.writeTodo.bind(this);

        }


    handelChange(e) {
    
        this.setState({value: e.target.value});
    }

    writeTodo() {
        if (this.state.value.length !== 0) {
            this.props.addTodo(this.state.value);
            this.setState({value: ''})
            this.totaId++;
        }
        
        
    }

    render () {
        return (
            <div className = "toDoListMain">
                <div className = "header">
                    <h1>
                        To Do List
                    </h1>
                    <h5>Total {this.totaId} todo</h5> 
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
                        onClick = { () => this.writeTodo(this.state.value) }
                        >
                         Creat </button>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default ToDoInput;