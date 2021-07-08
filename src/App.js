import React from 'react';

import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';
import './components/Todo.css'

const thingsToDo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your applicatsion.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      thingsToDo: thingsToDo
    }
  }

  handleAddItem = name => {
    const item = {
      task: name,
      id: Date.now(),
      completed: false
    }

    const newThingsToDo = [...this.state.thingsToDo, item]

    this.setState({
      thingsToDo: newThingsToDo
    })
  }

  // switch item.completed between true and false when clicked
  handleTaskToggle = (itemId) => {
    this.setState({
      thingsToDo: this.state.thingsToDo.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        };
        return item;
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Stuff To Get Done...</h2>
        <ToDoForm handleAddItem={this.handleAddItem}/>
        <ToDoList thingsToDo={this.state.thingsToDo} handleTaskToggle={this.handleTaskToggle}/>
      </div>
    );
  }
}

export default App;
