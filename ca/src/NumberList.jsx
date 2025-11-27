import React, { useState, useEffect, useMemo } from "react";
import "./Numbers.css";

function NumberList({ initialData }) {
  const [numbers, setNumbers] = useState(initialData);
  const [sum, setSum] = useState(0);
  const [avg, setAvg] = useState(0);

  const calc = useMemo(() => {
    const s = numbers.reduce((a, b) => a + b, 0);
    return { s, a: numbers.length ? s / numbers.length : 0 };
  }, [numbers]);

  useEffect(() => {
    setSum(calc.s);
    setAvg(calc.a);
  }, [calc]);

  return (
    <div className="container">
      <h2>Number List</h2>

      <ul>
        {numbers.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>

      <div className="buttons">
        <button onClick={() => setNumbers([...numbers].sort((a, b) => a - b))}>
          Sort Ascending
        </button>
        <button onClick={() => setNumbers([...numbers].sort((a, b) => b - a))}>
          Sort Descending
        </button>
      </div>

      <div className="stats">
        <p><b>Sum:</b> {sum}</p>
        <p><b>Average:</b> {avg.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default NumberList;

 
