import { Title } from "./components/Title/Title";
import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import { Task } from "./components/Task/Task";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

export function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Title />
        <NewTask />
        <Task />
        <Footer />
      </div>
    </>
  )
}
