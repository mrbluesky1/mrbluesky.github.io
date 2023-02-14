import React from "react";

function Welcome(props) {
  return <h1>Привет, {props.name}</h1>
}

function App() {
  return (
      <div>
        <Welcome name="Sara"></Welcome>
        <Welcome name="Argen"></Welcome>
        <Welcome name="Arsen"></Welcome>
      </div>
  );
}

export default App;
