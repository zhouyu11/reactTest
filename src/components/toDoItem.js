import React from 'react';

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: this.props.completed
        }
    }

    render() {
        const { item } = this.props;
        const completed = this.state.completed;

        console.log(completed);
        return (
            <li
                onClick = { this.onTodoClick }
                style={{textDecoration: !completed ? 'line-through' : 'none',
                                    cursor: completed ? 'default' : 'pointer'}}>
                { item }
            </li>
        )
    }

    onTodoClick = () => {
        console.log('click');
        this.setState({
            completed: false
        })
    }

}

ToDoItem.propTypes = {
    item: React.PropTypes.string,
    completed: React.PropTypes.bool
};

export default ToDoItem;
