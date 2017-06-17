import React from "react";

export default class Todo extends React.Component {
  render(){
    const { text } = this.props;

    return (
      <li>
        <span>{text}</span>
        <span>{"\u2716"}</span>
      </li>
    );
  }
}
