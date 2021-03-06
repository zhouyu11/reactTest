import React from 'react';

class ToDoItemView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: this.props.completed
        }
    }

    render() {
        const { item } = this.props;
        const completed = this.state.completed;

        return (
            <li
                onClick = { this.onTodoClick }
                style={{textDecoration: !completed ? 'line-through' : 'none',
                                    cursor: !completed ? 'default' : 'pointer'}}>
                { item }
            </li>
        )
    }

    onTodoClick = () => {
        if (this.state.completed){
            this.setState({
                completed: false
            })
        }
    }
}

ToDoItemView.propTypes = {
    item: React.PropTypes.string,
    completed: React.PropTypes.bool
};

export default ToDoItemView;
