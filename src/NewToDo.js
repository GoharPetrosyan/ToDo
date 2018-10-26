import React, { Component } from "react"
import PropTypes from 'prop-types';
import edit from './edit.png';

class NewToDo extends Component {
   
    constructor(props) {
       super(props);

       this.todoContent = props.todoContent;
       this.todoId = props.todoId;

    //    this.editTodo = this.editTodo.bind(this);

        this.state = {
            status: 'New'}
        
   }

   todoMouseOver() {

        document.querySelector('.box').style.backgroundColor = '#ffffcc';
        document.querySelector('.imgEdit').style.display = 'inline';

    
   }

   todoMouseOut() {
    document.querySelector('.box').style.backgroundColor = '#dcedc8';
    document.querySelector('.imgEdit').style.display = 'none';

   }

//    chageNewDone() {

//        this.setState( {lablestate:  })
//        alert(this.state.status)
//    }

//    editTodo() {

//    }

    render () {
        return (
            <div className = 'box' onMouseOver = {this.todoMouseOver}  onMouseOut = {this.todoMouseOut}>       
                <p className = 'newText'> {this.todoContent} 
                    <img className = 'imgEdit' 
                    src = {edit} width = '20' 
                    height = '20' 
                    alt = 'img error'
                    // onClick = { () => this.editTodo}

                    /> 
                </p>
                <button 
                    className = 'buttonNew' 
                    onClick = { () => this.setState({status: 'Done'})} 
                > 
                    {this.state.status} 
                </button>
                <button className = 'ButtonUpdate'> Update </button>
                
            </div>
        )
    }
}

NewToDo.propTypes = {
    todoContent : PropTypes.string
}

export default NewToDo