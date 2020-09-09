import React from 'react';
import './App.css';

const task = (tasks) => {
  return (tasks.map((item) => 
    <li>{item}</li>
  ));
}

function App() {
  const tasks = ['Tarefa 01', 'Tarefa 02', 'Tarefa 03', 'Tarefa 04'];
  return (
    <div>
      <h1>Minhas Tarefas</h1>
      <ul>
        {task(tasks)}
      </ul>
    </div>
  );
}

export default App;
