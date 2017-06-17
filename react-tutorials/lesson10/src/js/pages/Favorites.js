import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";

export default class Favorites extends React.Component {
  render(){
    const TodoComponents = TodoStore.getAll().map((todo) => <Todo key={todo.id} {...todo} />);

    return (
      <div>
        <h1>Favorites</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
