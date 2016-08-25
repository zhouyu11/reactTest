import React from 'react';
import ToDoItemView from './todoItemView.js'

class ToDoListView extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            items: props.items,
            text: props.text
        }
    }

    static defaultProps = {
        text: 'Add task here!',
        items: []
    };

    render() {
        const { items, text } = this.state;
        return (
            <div>
                <div>
                    <input type="text" value={ text } onChange={ this.handleInputChange }/>
                    <button onClick={ this.addTasks }>add tasks</button>
                </div>
                <div>
                    <ul>
                        {
                            items.map((item, index) => {
                                return <ToDoItemView key={ index } item={ item } completed={true}/>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

    addTasks = () => {
        const {text, items} = this.state;
        items.push(text);
        this.setState({
            items: items
        })
    };

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
}

ToDoListView.propTypes = {
    items: React.PropTypes.array,
    text: React.PropTypes.string
};

export default ToDoListView;