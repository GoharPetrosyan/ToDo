import React, { Component } from "react"

class NewToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render () {
        return (
            <div className = 'box'>
                <p className = 'newText'> creat text </p>
                <button className = 'buttonNew'> New </button>
            </div>
        )
    }
}

export default NewToDo