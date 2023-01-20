import { Title } from "./components/Title/Title";
import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import "./App.css";

export function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Title />
        <NewTask />
      </div>
    </>
  )
}
