import "./Title.css";

export function Title() {
  return (
    <div className="title">
      <h1>TODO</h1>

      <div class="toggle-switch">
        <label>
          <input
            class="toggle" type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
    </div>
  );
}
