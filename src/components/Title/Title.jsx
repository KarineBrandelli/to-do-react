import "./Title.css";

export function Title() {
  return (
    <div className="title">
      <h1>TODO</h1>

      <div className="toggle-switch">
        <label>
          <input
            className="toggle" type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}
