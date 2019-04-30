import React from "react";

const App = () => {
  const [joke, setJoke] = React.useState("");

  return (
    <div className="landing">
      <button
        className="btn"
        onClick={() => {
          fetch("http://localhost:4000/joke")
            .then(res => res.json())
            .then(res => {
              setJoke(res.joke);
            });
        }}
      >
        Tell me a joke
      </button>

      <div id="joke">{joke}</div>
    </div>
  );
};

export default App;
