import React, { Component } from "react"
import './index.css';
// import ToDoInput from './ToDoInput';
// import NewToDo from './NewToDo';
import PostView from './Components/postview';
import Tools from './Components/tools';
import Comments from  './Components/comments';



class App extends Component {
    constructor (props) {
        super(props);
        
       


    }


    render() {
        return (


            <div  className = 'app'>
                <div className = 'test'> 
                    <Tools/>
                    <PostView/>
                </div>
                    <Comments/>
                    <ul>

                    </ul>
        
            </div>
            
        )
    }
}

export default App;
