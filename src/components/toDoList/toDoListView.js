import React from 'react';
import ToDoItemView from './toDoItemView.js'

class ToDoListView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { items, onTodoClick } = this.props;
        return (
            <ul>
                {
                    items.map((item, index) => {
                        return <ToDoItemView key={ index } item={ item } completed={true}/>
                    })
                }
            </ul>
        )
    }
}

ToDoListView.propTypes = {
    items: React.PropTypes.array
};

export default ToDoListView;