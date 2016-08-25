import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value, onHandleIncrement, onHandleDecrement } = this.props;
        console.log('counter', value);
        return (
            <div>
                <button onClick={ onHandleIncrement }>+</button>
                <span>{value}</span>
                <button onClick={ onHandleDecrement }>-</button>
            </div>
        )
    }
}

Counter.propTypes = {
    onHandleIncrement: React.PropTypes.func,
    onHandleDecrement: React.PropTypes.func,
    value: React.PropTypes.number
};

export default Counter;