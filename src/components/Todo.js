import React from 'react';

const ToDo = props => {

    const handleClick = () => {
        props.handleTaskToggle(props.item.id)
    }

    return (
        <div onClick={handleClick} className={`task${props.item.completed ? ' completed' : ''}`}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default ToDo;