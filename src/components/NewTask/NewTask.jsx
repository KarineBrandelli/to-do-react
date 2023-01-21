// import { Plus } from "phosphor-react";
import React, { useState, useEffect } from "react";
import "./NewTask.css";

export function NewTask() {
  const database = JSON.parse(localStorage.getItem("items"));

  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState(database || []);

  const handleAddItemToList = () => {
    if (task === "") {
      alert("Input cannot be empty");
      return;
    }

    setItemsList([...itemsList, task]);

    setTask("");
  };

  const removeItem = (index) => {
    setItemsList(itemsList.filter((item, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemsList));
  }, [itemsList]);

  return (
    <>
      <div className="new-item">
        <input
          className="new-content"
          placeholder="What's new?"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <i className="ph-plus" onClick={handleAddItemToList}></i>
      </div>

      <div className="todo-list">
        {itemsList.map((item, index) => (
          <div className="list-items" key={index}>
            <span className="todo-task">
              <i className="ph-circle"></i>
              <p className="task-content">{item}</p>
            </span>
            <i className="ph-x" onClick={() => removeItem(index)}></i>
          </div>
        ))}
      </div>

      <footer>
        <p>
          <span className="amount"> {itemsList.length} </span>
          tasks
        </p>
        <p className="clear" onClick={() => setItemsList([])}>Clear</p>
      </footer>
    </>
  );
}
