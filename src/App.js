import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      <section>
        <h3>Generate your favorite color's shades</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section>
        <h4>List goes here:</h4>
      </section>
    </>
  );
}

export default App;
