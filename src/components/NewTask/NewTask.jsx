import React, { useState, useEffect } from "react";
import { Plus, Circle, CheckCircle, X } from "phosphor-react";
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

    setItemsList([
      ...itemsList,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const removeItem = (index) => {
    setItemsList(itemsList.filter((item, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemsList));
  }, [itemsList]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddItemToList();
    }
  };

  const toggleChecked = (index) => {
    const obj = {
      ...itemsList[index],
    };

    obj.completed = !obj.completed;

    setItemsList(
      [...itemsList.slice(0, index), obj].concat(itemsList.slice(index + 1))
    );
  };

  return (
    <>
      <div className="new-item" tabIndex={0} onKeyDown={handleKeyDown}>
        <input
          className="new-content"
          placeholder="What's new?"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)} />
        <span
          className="plus-component"
          onClick={handleAddItemToList}>
            <Plus size={16} />
        </span>
      </div>

      <div className="todo-list">
        {itemsList.map((item, index) => (
          <div className="list-items" key={index}>
            <span
              className="todo-task"
              onClick={() => toggleChecked(index)}>
                {
                  item.completed === false
                  ? <Circle size={16} checked={item.completed} />
                  : <CheckCircle size={16} checked={item.completed} />
                }              
              <p
                className="task-content"
                style={{ textDecoration: item.completed && "line-through" }} >
                  {item.text}
              </p>
            </span>
            <span
              className="x-component"
              onClick={() => removeItem(index)}>
                <X size={16} />
            </span>
          </div>
        ))}
      </div>

      <footer>
        <p>
          <span className="amount"> {itemsList.length} </span>
          tasks
        </p>
        <p className="clear" onClick={() => setItemsList([])}>
          Clear
        </p>
      </footer>
    </>
  );
}
