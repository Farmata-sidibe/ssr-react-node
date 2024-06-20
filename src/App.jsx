// // Importe tous les membres de la bibliothèque "react" sous le nom "React"
// import * as React from "react";

// // Définit le composant fonctionnel "App" en tant qu'export par défaut
// export default function App() {
//   // Utilise le hook d'état "useState" de React pour définir une variable d'état "times" initialisée à 0 et une fonction "setTimes" pour la mettre à jour
//   const [times, setTimes] = React.useState(0);

//   // Rendu du composant
//   return (
//     <div>
//       {/* Affiche un titre avec le contenu "Hello" suivi de la valeur actuelle de la variable d'état "times" */}
//       <h1>Hello {times}</h1>
//       {/* Affiche un bouton qui, lorsqu'il est cliqué, appelle la fonction "setTimes" avec une fonction de mise à jour pour incrémenter la valeur de "times" de 1 */}
//       <button onClick={() => setTimes((times) => times + 1)}>ADD</button>
//     </div>
//   );
// }

import React from 'react';

const App = ({ todos }) => (
  <div>
    <h1>Liste des Tâches</h1>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  </div>
);

export default App;
