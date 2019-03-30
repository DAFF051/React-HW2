import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Apptodo from './components/todo'
import Data from './tododata'

class App extends Component {
  constructor() {
    super()
    this.state = {
        todos: Data
    }
  }
  render() {
    const todosmap=this.state.todos.map( task=><dev><Apptodo key={task.id} 
                            description={task.description} 
                          deadline={task.deadline} 
                         done={task.done} 
                                 />
                                </dev>)
    return (
      <div className="App">
        <Apptodo/>
        {todosmap}
        <h1> hello </h1>
      </div>
     
    );
  }
}

export default App;
