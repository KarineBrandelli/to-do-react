import { Title } from './components/Title/Title';
import { Header } from './components/Header/Header';
import './App.css';

export function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Title />
      </div>
    </>
  )
}
