import React from 'react';
import ToDoItem from './toDoItem.js'

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { items, onTodoClick } = this.props;
        return (
            <ul>
                {
                    items.map((item, index) => {
                        console.log(item);
                        return <ToDoItem key={ index } item={ item } completed={true}/>
                    })
                }
            </ul>
        )
    }
}

ToDoList.propTypes = {
    items: React.PropTypes.array
};

export default ToDoList;