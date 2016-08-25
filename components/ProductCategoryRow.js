import ReactDOM from "react-dom";
import React from "react";

export default class ProductCategoryRow extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<tr>
            <th colSpan="2">{this.props.category}</th>
        </tr>);
    }
}

