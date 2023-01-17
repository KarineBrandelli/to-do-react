import "./Task.css";

export function Task() {
  return (
    <div class="todo-list">
      <div class="list-items">
        <span class="todo-task">
          <i class="ph-circle"></i>
          {/* <i class="ph-check-circle"></i> */}
          <p class="task-content">tarefa</p>
        </span>
        <i class="ph-x"></i>
      </div>
      <div class="list-items">
        <span class="todo-task">
          <i class="ph-circle"></i>
          {/* <i class="ph-check-circle"></i> */}
          <p class="task-content">tarefa</p>
        </span>
        <i class="ph-x"></i>
      </div>
    </div>
  );
}
