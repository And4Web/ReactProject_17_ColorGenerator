import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [borderColor, setBorderColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setBorderColor("1px solid black");
      const colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setBorderColor("1px solid red");
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <h3>Generate your favorite color's shades</h3>
        <form onSubmit={handleSubmit}>
          <input
            style={{
              border: `${borderColor}`,
            }}
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
        {list.map((color, index) => {
          return (
            <div>
              <SingleColor index={index} key={index} {...color} />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default App;

//start at 3:30:00
