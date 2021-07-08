// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import ToDo from './Todo';

const ToDoList = props => {


    return (
        <div className="to-do-list">
            {props.thingsToDo.map(item => (
                <ToDo key={item.id} handleTaskToggle={props.handleTaskToggle} thingsToDo={props.thingsToDo} item={item} />
            ))}
        </div>
    )
}

export default ToDoList;