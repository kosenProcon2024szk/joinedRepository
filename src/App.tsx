import LinkButton from "./children/LinkButton";
import './App.css';

function App() {
  const titleName: string = "高専プロコン2024競技部門";
  return (
    <div className="App">
      <h1>igasa_K's portfolio</h1>
      <LinkButton text="高専プロコン2024競技部門" link="/procon35" />
    </div>
  );
}

export default App;
