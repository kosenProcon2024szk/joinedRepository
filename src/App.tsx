import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

function App() {
  const titleName: string = "高専プロコン2024競技部門";
  return (
    <div className="App">
      <h1>igasa_K's portfolio</h1>
      <Link to='/procon35'>
        {titleName}
      </Link>
    </div>
  );
}

export default App;
