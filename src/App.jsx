import React from 'react';

const App = ({ todos }) => (
  <div>
    <h1>Liste des Tâches</h1>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}> {todo.title} {todo.completed} </li>
      ))}
    </ul>
  </div>
);

export default App;
