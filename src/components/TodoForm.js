import React from 'react';

class ToDoForm extends React.Component {
    
    constructor() {
        super()
        this.state = {
            inputValue: ''
        }
    }

    handleChanges = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.inputValue !== '') {
            this.props.handleAddItem(this.state.inputValue)

            this.setState({
                inputValue: ''
            })
        }
    }

    handleClickClear = () => {
        this.props.handleClearCompleted()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="newToDo" onChange={this.handleChanges} value={this.state.inputValue} />
                <button name="addToDo">Add To Do</button>
                <button name="clearCompleted" onClick={this.handleClickClear}>Clear Completed</button>
            </form>
        )
    }
}

export default ToDoForm;