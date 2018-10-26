import React, { Component } from "react"
import PropTypes from 'prop-types';

class NewToDo extends Component {
   
    constructor(props) {
       super(props);

       this.todoContent = props.todoContent;
       this.todoId = props.todoId

 
   }

 

    render () {
        return (
            <div className = 'box'>
                        
                <p className = 'newText'> {this.todoContent}
             </p>
                <button className = 'buttonNew'> New </button> 
                </div>
        )
    }
}

NewToDo.propTypes = {
    todoContent : PropTypes.string
}

export default NewToDo