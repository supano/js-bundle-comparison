import React from "react";
import logo from "./logo.svg";
import "./App.css";

type User = {
  name: string;
  age: number;
};

function App() {
  const user: User = {
    name: "John Doe",
    age: 25,
  };

  return (
    <div className="App">
      <header className="App-header">
        {user.name} is {user.age} years old
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
