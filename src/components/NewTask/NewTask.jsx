// import { Plus } from "phosphor-react";
import React, { useState } from "react";
import "./NewTask.css";

export function NewTask() {
  const [newTask, setNewTask] = useState('');

  const itens = JSON.parse(localStorage.getItem("itens")) || [];
  console.log(itens);

  // Array.from(itens).forEach((task) => {
  //   criaTarefa(task.newTask);
  // });

  function add() {
    console.log(newTask);

    if (newTask === "") return;

    // criaTarefa(newTask);

    let novaTarefa = {
      tarefa: newTask,
      id: itens.length + 1,
    };

    Array.from(itens).push(novaTarefa);

    localStorage.setItem("itens", JSON.stringify(itens));
  }

  // function criaTarefa() {
  //   console.log("criei");
  //   // const template = `
  //   // <div class="list-items">
  //   // <span class="todo-task">
  //   //   <i class="fa-regular fa-circle-check"></i>
  //   //   <p class="task-content">${newTask}</p>
  //   // </span>
  //   // <i class="fa-solid fa-xmark"></i>
  //   // </div>
  //   // `;

  //   // lista.innerHTML += template;

  //   // removeTarefa();
  // }

  return (
    <>
      <div className="new-item">
        <input
          className="new-content"
          placeholder="What's new?"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <i className="ph-plus" onClick={add}></i>
      </div>
      <div className="todo-list">
        <div className="list-items">
          <span className="todo-task">
            <i className="ph-circle"></i>
            <p className="task-content">{newTask}</p>
          </span>
          <i className="ph-x"></i>
        </div>
      </div>
    </>
  );
}
