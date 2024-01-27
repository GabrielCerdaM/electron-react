// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Component is mounted, safe to access window here
    console.log(window);
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
